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
			title: "So It Goes",
			artist: "Mac Miller",
			runtime: "5:13",
			coverImg:
				"https://upload.wikimedia.org/wikipedia/en/5/5e/Mac_Miller_-_Swimming.png",
		},
		{
			title: "Pilot Jones",
			artist: "Frank Ocean",
			runtime: "3:04",
			coverImg:
				"https://upload.wikimedia.org/wikipedia/en/2/28/Channel_ORANGE.jpg",
		},
		{
			title: "Mojo So Dope",
			artist: "Kid Cudi",
			runtime: "3:31",
			coverImg:
				"https://upload.wikimedia.org/wikipedia/en/0/0a/Kidcudimanonthemoonthelegendof.jpg",
		},
		{
			title: "Understood",
			artist: "Mick Jenkins",
			runtime: "3:29",
			coverImg:
				"https://upload.wikimedia.org/wikipedia/en/0/0b/MickJenkinsPoaM.png",
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
