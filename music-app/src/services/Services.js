export const searchForSongs = (song) =>
  fetch('/searchForSong', {
    method: 'POST',
    body: JSON.stringify(song),
    headers: {
      'content-type': 'application/json',
    },
    json: true,
  })
    .then((response) => response.json())
    .then((results) => results.results)
    .then((string) => JSON.parse(string))
    .then((json) => json.tracks.items);

export default {
  searchForSongs,
};

// .then((response) => response.json())
// .then((results) => results.results)
// .then((string) => JSON.parse(string))
// .then((json) => json.tracks.items);
