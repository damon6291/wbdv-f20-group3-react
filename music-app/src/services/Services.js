
export const searchForSongs = (song) =>
  fetch('/searchForSong', {
    method: 'POST',
    body: JSON.stringify(song),
    headers: {
      'content-type': 'application/json',
    },
    json: true
  }).then(response => response.json()).then(results => console.log(results))


export default {
  searchForSongs
};
