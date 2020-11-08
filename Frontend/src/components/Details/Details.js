import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faThumbsUp,
  faClock,
  faShareSquare,
  faStar,
  faMusic,
} from '@fortawesome/free-solid-svg-icons';

import PlaylistItem from './PlaylistItem.js';
import 'animate.css';
import './detailsStyle.css';

/**
 * Match incoming API to this JSON format (so that it's compatible with both AM & Spotify )
 */
// const sampleData = {
// 	title: "Bob's Favorites Playlist",
// 	totalRuntime: "12:33",
// 	tracks: [
// 		{
// 			title: "Sierra Leone",
// 			artist: "Frank Ocean",
// 			runtime: "2:29",
// 			coverImg:
// 				"https://upload.wikimedia.org/wikipedia/en/2/28/Channel_ORANGE.jpg",
// 		},
// 		{
// 			title: "Gone (feat. Consequence & Cam'ron)",
// 			artist: "Kanye West",
// 			runtime: "5:33",
// 			coverImg:
// 				"https://upload.wikimedia.org/wikipedia/en/f/f4/Late_registration_cd_cover.jpg",
// 		},
// 		{
// 			title: "Pyramids",
// 			artist: "Frank Ocean",
// 			runtime: "9:53",
// 			coverImg:
// 				"https://upload.wikimedia.org/wikipedia/en/2/28/Channel_ORANGE.jpg",
// 		},
// 		{
// 			title: "Pilot Jones",
// 			artist: "Frank Ocean",
// 			runtime: "3:04",
// 			coverImg:
// 				"https://upload.wikimedia.org/wikipedia/en/2/28/Channel_ORANGE.jpg",
// 		},
// 	],
// };

const Details = ({ playlistId, title, totalRuntime, tracks }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <p>Navbar component goes here</p>
        </div>
      </div>
      <div className="row">
        <div className="col-8 shadow-lg webdv-playlist-style animate__animated animate__slideInLeft">
          <div className="d-flex flex-column align-items-end animate__animated animate__fadeIn animate__slow">
            <h2 className="mt-3 font-weight-bold">
              {title} &nbsp;
              <FontAwesomeIcon icon={faMusic} />
            </h2>
            <h6 className="text-muted">total runtime - {totalRuntime}</h6>
            <hr
              style={{
                width: '100%',
                border: '2px dashed #C9E4D1',
              }}
            />
          </div>

          {tracks.map((track, id) => {
            return (
              <span key={id}>
                <PlaylistItem
                  title={track.title}
                  artist={track.artist}
                  runtime={track.runtime}
                  coverImg={track.coverImg}
                />
                <hr />
              </span>
            );
          })}
        </div>

        <div className="col-4 d-flex flex-column mt-5">
          <button className="m-1 btn btn-primary shadow font-weight-light animate__animated animate__flipInX">
            <FontAwesomeIcon icon={faShareSquare} />
            &nbsp; Share to profile
          </button>
          <button className="m-1 btn btn-primary shadow font-weight-light animate__animated animate__flipInX">
            <FontAwesomeIcon icon={faStar} />
            &nbsp; Import to library
          </button>
          <button className="m-1 btn btn-light shadow font-weight-light animate__animated animate__flipInX">
            ...
          </button>
        </div>
      </div>
    </div>
  );
};

const stateToPropertyMapper = (state) => ({
  title: state.playlistDetailsReducer.title,
  totalRuntime: state.playlistDetailsReducer.totalRuntime,
  tracks: state.playlistDetailsReducer.tracks,
});
const dispatchToPropertyMapper = (dispatch) => ({
  //services-
});

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(Details);
