import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, User, Playlist} from '../index';

const Search = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <div className="d-flex flex-column justify-content-center">
          <input
            type="text"
            placeholder="Search..."
            className="w-75 mx-auto my-5 search-box px-2 py-2"
          />
          <div className="d-flex">
            <div className="col-8">
              <div className="w-75">
                <h3 className="border-bottom pl-4 pb-3">Playlists</h3>
                <Playlist />
                <Playlist />
              </div>
            </div>
            <div className="col-4">
              <div className="w-100">
                <h3 className="border-bottom pl-4 pb-3">Users</h3>
                <User />
                <User />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Search;
