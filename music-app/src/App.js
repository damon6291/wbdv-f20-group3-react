import React from "react";
import "./App.css";
import {
	Details,
	Home,
	Login,
	Register,
	Profile,
	Search,
	Playlist,
} from "./components/index";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
// for small Playlist widget || used on User Profile page
import playlistReducer from "./reducers/playlistReducer";
// for large Playlist display || used on PlaylistDetails page || includes inner track details
import playlistDetailsReducer from "./reducers/playlistDetailsReducer";

const allReducer = combineReducers({
	playlistReducer,
	playlistDetailsReducer,
});

const store = createStore(allReducer);

function App() {
	return (
		<Provider store={store}>
			<Router>
				<Link to="/Details">Details</Link>
				<Link to="/Home">Home</Link>
				<Link to="/Login">Login</Link>
				<Link to="/Register">Register</Link>
				<Link to="/Profile">Profile</Link>
				<Link to="/Search">Search</Link>
				<Link to="/Playlist">Playlist</Link>
				<Route path="/Details" component={Details}></Route>
				<Route path="/Home" component={Home}></Route>
				<Route path="/Login" component={Login}></Route>
				<Route path="/Register" component={Register}></Route>
				<Route path="/Profile" component={Profile}></Route>
				<Route path="/Search" component={Search}></Route>
				<Route path="/Playlist" component={Playlist}></Route>
			</Router>
		</Provider>
	);
}

export default App;
