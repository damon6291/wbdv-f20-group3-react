
export const searchForSongs = (song) => {
  fetch('/searchForSong', {
    method: 'POST',
    body: JSON.stringify(song),
    headers: {
      'content-type': 'application/json',
    },
    json: true
  }).then(response => console.log(response))
    }

export default {
  searchForSongs
};
