import {FIND_PLAYLIST} from '../actions/playlistAction';

const initialState = {
  playlists: [],
};

const playlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIND_PLAYLIST:
      return {
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default playlistReducer;
