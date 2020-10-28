import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";

import PlaylistItem from "./PlaylistItem.js";

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

const Details = ({ title, totalRuntime, tracks }) => {
	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<p>Navbar component goes here</p>
				</div>
			</div>
			<div className="row">
				<div
					className="col-8 shadow-lg"
					style={{
						border: "solid 2px lightgrey",
						borderRadius: "10px",
					}}
				>
					<div className="d-flex flex-column align-items-end">
						<h3 className="mt-3 font-weight-bold">{title}</h3>
						<h6 className="text-muted">
							total runtime - {totalRuntime}
						</h6>
					</div>

					{tracks.map((track) => {
						return (
							<span>
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
					<button className="m-1 btn btn-info shadow font-weight-light">
						Share to profile
					</button>
					<button className="m-1 btn btn-info shadow font-weight-light">
						Import to library
					</button>
					<button className="m-1 btn btn-info shadow font-weight-light">
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
	//services
});

export default connect(
	stateToPropertyMapper,
	dispatchToPropertyMapper
)(Details);
