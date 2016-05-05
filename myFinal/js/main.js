function clicked() {

	var user = document.getElementById('username');
	var pass = document.getElementById('password');

	var coruser = "professor";
	var corpass = "password";

	if(user.value == coruser) {

		if(pass.value == corpass) {

			window.alert("You are logged in as " + user.value);
			window.open("members.html");

		} else {

			window.alert("Incorrect username or password!");

		}

	} else {

			window.alert("Incorrect username or password!");

	}

}
