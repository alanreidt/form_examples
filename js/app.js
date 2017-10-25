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

var forms = document.getElementsByClassName('form');
var forms_len = forms.length;

var confirmReset = function(evt) {
	if (!confirm('Do you really want to reset this data? If no, select Cancel below.')) {
		evt.preventDefault();
	}
};

for (var i = 0; i < forms_len; i++) {
	var form = forms[i];

	form.addEventListener('reset', confirmReset);
}

// Progress-bar toggle

// TODO:
//   clean up functions;
//   edit a progress-bar__items' id;
//   edit progress-bar styles;

var progressBarItems = document.getElementsByClassName('progress-bar__item');
var progressBarItems_len = progressBarItems.length;

var addProgressBarActiveClass = function() {
	var items = document.getElementsByClassName('progress-bar__item');
	var items_len = items.length;

	var progressBar = document.getElementById('checkout__progress-bar');
	var progressBarClass = 'progress-bar_active_' + this.id;

	for (var i = 0; i < items_len; i++) {
		var item = items[i];

		removeClass('progress-bar__item_active', item);
	}

	this.classList.toggle('progress-bar__item_active', true);

	progressBar.classList.toggle(progressBar.classList[1], false);
	progressBar.classList.toggle(progressBarClass, true);
};

var removeClass = function(cls, elem) {
	elem.classList.toggle(cls, false);
};

for (var i = 0; i < progressBarItems_len; i++) {
	var progressBarItem = progressBarItems[i];

	progressBarItem.addEventListener('click', addProgressBarActiveClass);
	progressBarItem.addEventListener('keypress', addProgressBarActiveClass);
}
