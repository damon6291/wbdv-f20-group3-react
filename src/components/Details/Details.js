import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Details = () => {
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
						<h3 className="mt-3 font-weight-bold">
							Bob's Favorites Playlist
						</h3>
						<h6 className="text-muted">total runtime - 1hr 2m</h6>
					</div>

					<hr />
					<div className="d-flex flex-row justify-content-between align-items-center">
						<div className="d-flex flex-row align-items-center">
							<img
								src="https://upload.wikimedia.org/wikipedia/en/2/28/Channel_ORANGE.jpg"
								className="m-1"
								style={{
									height: "75px",
									width: "75px",
									border: "solid 1px black",
									borderRadius: "5px",
								}}
							/>
							<div className="d-flex flex-column ml-2">
								<h5>Sierra Leone</h5>
								<h6 className="text-muted">by Frank Ocean</h6>
							</div>
						</div>

						<span className="float-right font-italic">2:29</span>
					</div>
					<hr />
					<div className="d-flex flex-row justify-content-between align-items-center">
						<div className="d-flex flex-row align-items-center">
							<img
								src="https://upload.wikimedia.org/wikipedia/en/2/28/Channel_ORANGE.jpg"
								className="m-1"
								style={{
									height: "75px",
									width: "75px",
									border: "solid 1px black",
									borderRadius: "5px",
								}}
							/>
							<div className="d-flex flex-column ml-2">
								<h5>Pyramids</h5>
								<h6 className="text-muted">by Frank Ocean</h6>
							</div>
						</div>

						<span className="float-right font-italic">9:53</span>
					</div>
					<hr />
					<div className="d-flex flex-row justify-content-between align-items-center">
						<div className="d-flex flex-row align-items-center">
							<img
								src="https://upload.wikimedia.org/wikipedia/en/2/28/Channel_ORANGE.jpg"
								className="m-1"
								style={{
									height: "75px",
									width: "75px",
									border: "solid 1px black",
									borderRadius: "5px",
								}}
							/>
							<div className="d-flex flex-column ml-2">
								<h5>Pilot Jones</h5>
								<h6 className="text-muted">by Frank Ocean</h6>
							</div>
						</div>

						<span className="float-right font-italic">3:04</span>
					</div>
					<hr />
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

export default Details;
