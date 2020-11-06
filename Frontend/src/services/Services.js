export const searchForPlaylists = (query) =>
  fetch('/searchForPlaylists', {
    method: 'POST',
    body: JSON.stringify(query),
    headers: {
      'content-type': 'application/json',
    },
    json: true,
  })
    .then((response) => response.json())
    .then((results) => results.results)
    .then((string) => JSON.parse(string))
    .then((json) => json.playlists.items);

// export const searchForSongs = (query) =>
//   fetch('/playlistTracks')

export default {
  searchForPlaylists,
};

// .then((response) => response.json())
// .then((results) => results.results)
// .then((string) => JSON.parse(string))
// .then((json) => json.tracks.items);
