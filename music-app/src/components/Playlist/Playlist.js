import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay, faThumbsUp, faClock} from '@fortawesome/free-solid-svg-icons';
import sampleImg from '../../assets/damon.jpg';

const Playlist = () => {
  return (
    <div className="container mt-4">
      <div className="d-flex align-items-center">
        <img src={sampleImg} alt="user" className="playlist-image mr-5" />
        <div className="d-flex flex-column">
          <span>Songs to listen while coding</span>
          <span className="text-secondary">
            <small>by Damon Joung</small>
          </span>
          <div>
            <span className="mr-2 text-secondary">
              <small>
                <FontAwesomeIcon icon={faPlay} />
                100,000
              </small>
            </span>
            <span className="mr-2 text-secondary">
              <small>
                <FontAwesomeIcon icon={faThumbsUp} />
                1,000
              </small>
            </span>
            <span className="mr-2 text-secondary">
              <small>
                <FontAwesomeIcon icon={faClock} />
                2h18m
              </small>
            </span>
            <span className="mr-2 text-secondary">
              <small>1y ago</small>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playlist;
