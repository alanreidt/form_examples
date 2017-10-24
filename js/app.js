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

// Confirm window before reset form execution

var form = document.getElementById('sign-up__form');

form.addEventListener('reset', function(evt) {
	if (!confirm('Are you sure?')) {
		evt.preventDefault();
	}
});

// progress-bar (don`t work)

var shipping = document.getElementById('shipping');

shipping.onclick = function() {
	alert("alarm");
	this.classList.toggle('progress-bar__link_active', true);
};
