// Sign up form validation

var submit = document.getElementById("sign-up__submit");

var email = document.getElementById("sign-up__email");
var emailc = document.getElementById("sign-up__emailc");

var password = document.getElementById("sign-up__password");
var passwordc = document.getElementById("sign-up__passwordc");

submit.onclick = function() {
	// email field validation
	if (emailc.value !== email.value) {
		emailc.setCustomValidity("The two email addresses must match.");
	} else {
		emailc.setCustomValidity("");
	}

	// password field validation
	if (passwordc.value !== password.value) {
		passwordc.setCustomValidity("The two passwords must match.");
	} else {
		passwordc.setCustomValidity("");
	}
};
