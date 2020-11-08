import { connect } from 'react-redux';
import Details from '../components/Details/Details';
import { findDetails } from '../actions/DetailsAction';
import Service from '../services/Services';

const stateToPropertyMapper = (state) => ({
  details: state.playlistDetailsReducer.details,
});

const propertyToDispatchMapper = (dispatch) => ({
  findDetails: (json) =>
    Service.getPlaylistInformation(json).then((details) => {
      findDetails(dispatch, details);
    }),
});

export default connect(stateToPropertyMapper, propertyToDispatchMapper)(Details);
