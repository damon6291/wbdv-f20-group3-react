import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
	return (
		<div
			class="container mt-4"
			style={{ border: "solid 2px lightgrey", borderRadius: "20px" }}
		>
			<div className="d-flex align-items-center float-right m-3">
				<h2 className="">Login&nbsp;</h2>
				<span className="text-muted">
					Enter your account information below...
				</span>
			</div>

			<div class="form-group row">
				<label for="username" class="col-sm-2 col-form-label">
					Username
				</label>
				<div class="col-sm-10">
					<input
						id="username"
						value="..."
						type="text"
						class="form-control"
					/>
				</div>
			</div>

			<div class="form-group row">
				<label for="inputPassword" class="col-sm-2 col-form-label">
					Password
				</label>

				<div class="col-sm-10">
					<input
						type="password"
						class="form-control"
						id="inputPassword"
						placeholder="123qwe!@#"
					/>
				</div>
			</div>

			<div class="form-group row">
				<button class="m-1 btn btn-primary btn-block wbdv-button wbdv-login">
					Sign In
				</button>
			</div>
			<a className="m-2 float-left">I don't have an account!</a>

			<a href="#" className="float-right mt-2">
				I forgot my password!
			</a>
		</div>
	);
};

export default Login;
