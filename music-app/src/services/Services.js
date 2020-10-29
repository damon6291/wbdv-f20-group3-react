const url = 'http://localhost:3001/searchForSong'; // + topic_id

export const searchForSongs = (song) =>
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(song),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then(console.log(song))
    .then((response) => response.json());

export default {
  searchForSongs,
};
