import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, User, Playlist} from '../index';
import {searchForSongs} from '../../services/Services';

const Search = ({playlists, findPlaylists}) => {
  const [query, setQuery] = useState('');
  // const modifiedPlayLists = playlists.filter((playlist) => {
  //   return playlist.toLowerCase().includes(query.toLowerCase()) ? playlist : null;
  // });

  // useEffect(() => {
  //   findPlaylists();
  // }, []);

  const onSearchHandler = () => {
    const json = {searchParams: query};
    searchForSongs(json);
  };

  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <div className="d-flex flex-column justify-content-center">
          <input
            type="text"
            placeholder="Search..."
            className="w-75 mx-auto my-5 search-box px-2 py-2 shadow"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={() => onSearchHandler()}>Enter</button>
          <div className="d-flex">
            <div className="col-8">
              <div className="w-75">
                <h3 className="border-bottom pl-4 pb-3">Playlists</h3>
                <Playlist />
                <Playlist />
                {/* {modifiedPlayLists.map((playlist) => (
                  <Playlist key={playlist.id} playlist={playlist} />
                ))} */}
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
