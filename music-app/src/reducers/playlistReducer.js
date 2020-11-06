import {FIND_PLAYLIST} from '../actions/playlistAction';

const initialState = {
  playLists: [],
};

const playListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIND_PLAYLIST:
      return {
        playLists: action.playLists,
      };
    default:
      return state;
  }
};

export default playListReducer;
