export const FIND_PLAYLIST = 'FIND_PLAYLIST';

export const findPlayLists = (dispatch, playlists) =>
  dispatch({
    type: FIND_PLAYLIST,
    playlists,
  });
