import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faThumbsUp, faClock} from '@fortawesome/free-solid-svg-icons';

const Playlist = ({playList: {album, artists, duration_ms, name, popularity}}) => {
  return (
    <div className="container mt-4">
      {console.log(album.images[0].url)}
      <div className="d-flex align-items-center">
        <img src={album.images[0].url} alt="user" className="playlist-image mr-5" />
        <div className="d-flex flex-column">
          <span>{name}</span>
          <span className="text-secondary">
            <small>by {artists[0].name}</small>
          </span>
          <div>
            <span className="mr-2 text-secondary">
              <small>
                <FontAwesomeIcon icon={faThumbsUp} />
                {popularity}
              </small>
            </span>
            <span className="mr-2 text-secondary">
              <small>
                <FontAwesomeIcon icon={faClock} />
                {duration_ms}
              </small>
            </span>
            <span className="mr-2 text-secondary">
              <small>{album.release_date}</small>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playlist;
