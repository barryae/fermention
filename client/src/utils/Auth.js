import axios from "axios";

function Auth () {

	function logIn (username, password, cb) {
		//CODE GOES HERE
		axios.post("/api/authenticate", { username: username, password: password })
			.then(response => {
				localStorage.setItem("token", response.data.token);
				cb(response.data);
			});
	}

	function logOut (cb) {
		localStorage.removeItem("token");
		cb();
	}

	function getToken () {
		return localStorage.getItem("token");
	}

	function isLoggedIn () {
		const token = localStorage.getItem("token");
		if (token) {
			return true;
		} else {
			return false;
		}
	}

	return {
		isLoggedIn,
		logIn,
		logOut,
		getToken
	}
}

export default Auth();