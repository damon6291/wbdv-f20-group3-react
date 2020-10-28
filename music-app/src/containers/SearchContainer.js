import {connect} from 'react-redux';
import Search from '../components/Search/Search';
import {findPlayLists} from '../actions/playlistAction';
// import Service from '../services/Services';

const stateToPropertyMapper = (state) => ({
  playlists: state.playlistReducer.playlists,
});

const propertyToDispatchMapper = (dispatch) => ({
  // findPlayLists: () =>
  //   Service.findPlayLists().then((playlists) => {
  //     findPlayLists(dispatch, playlists);
  //   }),
});

export default connect(stateToPropertyMapper, propertyToDispatchMapper)(Search);
