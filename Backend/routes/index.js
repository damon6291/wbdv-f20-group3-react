var express = require('express');
var request = require('request');
var router = express.Router();
var body_parser = require('body-parser');

var app = express();
app.use(body_parser.json());

client_id = '64a311df55f24059a326323c754eedfd';
client_Secret = '71ed2c4226d746488ca2afd497128671';
client_auth_code = []
client_refresh_token = []

app.get('/spotifyLogin', (req,res) => {
    url = 'https://accounts.spotify.com/authorize'
    redirect_url = 'http://localhost:3001/post_authentication'
    scope = 'ugc-image-upload%20user-read-recently-played%20' +
        'user-read-playback-position%20user-top-read%20' +
        'playlist-modify-private%20playlist-read-collaborative%20' +
        'playlist-read-private%20playlist-modify-public%20' +
        'user-read-email%20user-read-private%20streaming%20app-remote-control%20user-follow-read%20' +
        'user-follow-modify%20user-library-modify%20user-library-read%20user-read-currently-playing%20' +
        'user-read-playback-state%20 + user-modify-playback-state'
    res.redirect('https://accounts.spotify.com/authorize?client_id=' + client_id +'&response_type=code&redirect_uri=' + redirect_url + '&scope=' + scope)
})

app.get('searchForSong', (req,res) => {
    try {
        searchParams = req.body.searchParams;
        searchParams.replace(" ", '%20');
        var authOptions = {
            url: 'https://api.spotify.com/v1/search?q=' + searchParams +'&type=artist%20album%20track',
            headers: {
                'Authorization': 'Basic ' + (new Buffer(client_auth_code[0]).toString('base64'))
            },
            json: true
        };

        request.post(authOptions, (error,response,body) => {
            console.log(body);
            res.json({
                body
            })
        });

    }
    catch(e) {
        console.log("there is an error searching")
        console.log(e);
    }
})

app.get('/post_authentication', (req, res) => {
    try {
        code = req.query.code
        console.log(code)
        client_auth_code.push(code);

        var authOptions = {
            url: 'https://accounts.spotify.com/api/token',
            form: {
                code: code,
                redirect_uri: 'http://localhost:3001/post_authentication',
                grant_type: 'authorization_code'
            },
            headers: {
                'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_Secret).toString('base64'))
            },
            json: true
        };

        request.post(authOptions, (error,response,body) => {
            console.log(body);
            client_auth_code.push(body.access_token)
            client_auth_code.push(body.refresh_token)
            res.json({
                body
            })
        });

    }
    catch(e) {
        console.log("there has been an error with authentication")
        console.log(e);
    }
})

app.get('user_profile', (req, res) => {
    try{
        var authOptions = {
            url: 'https://accounts.spotify.com/v1/me',
            form: {
                code: code,
                redirect_uri: 'http://localhost:3001/post_authentication',
                grant_type: 'authorization_code'
            },
            headers: {
                'Authorization': 'Basic ' + (new Buffer(client_auth_code[0]).toString('base64'))
            },
            json: true
        };

        request.post(authOptions, (error,response,body) => {
            console.log(body);
            res.json({
                body
            })
        });
    }
    catch(e) {
        console.log("there was an error retrieving user profile information")
        console.log(e)
    }
})

app.get('user_top_tracks', (req,res) => {

})

app.get('')




/* GET home page. */
app.get('/', function(req, res) {
  res.json({ title: 'Express' });
});

app.listen(3001);

module.exports = app;