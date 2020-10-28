// import {FIND_PLAYLIST} from '../actions/playlistAction';
import { FIND_TRACKS_FOR_PLAYLIST } from "../actions/playlistDetailsAction";

const initialState = {
	title: "Bob's Favorites Playlist",
	totalRuntime: "12:33",
	tracks: [
		{
			title: "Sierra Leone",
			artist: "Frank Ocean",
			runtime: "2:29",
			coverImg:
				"https://upload.wikimedia.org/wikipedia/en/2/28/Channel_ORANGE.jpg",
		},
		{
			title: "Gone (feat. Consequence & Cam'ron)",
			artist: "Kanye West",
			runtime: "5:33",
			coverImg:
				"https://upload.wikimedia.org/wikipedia/en/f/f4/Late_registration_cd_cover.jpg",
		},
		{
			title: "Pyramids",
			artist: "Frank Ocean",
			runtime: "9:53",
			coverImg:
				"https://upload.wikimedia.org/wikipedia/en/2/28/Channel_ORANGE.jpg",
		},
		{
			title: "Pilot Jones",
			artist: "Frank Ocean",
			runtime: "3:04",
			coverImg:
				"https://upload.wikimedia.org/wikipedia/en/2/28/Channel_ORANGE.jpg",
		},
	],
};

const playlistDetailsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FIND_TRACKS_FOR_PLAYLIST:
			return {
				tracks: action.tracks,
			};
		default:
			return state;
	}
};

export default playlistDetailsReducer;
