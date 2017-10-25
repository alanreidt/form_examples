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
//   clean up functions (replace for loops by forEach method, concatenate toggleElemClass and toggleElemsClass functions);
//   edit a progress-bar__items' id;
//   edit progress-bar styles;

var progressBarItems = document.getElementsByClassName('progress-bar__item');
var progressBarItems_len = progressBarItems.length;

for (var i = 0; i < progressBarItems_len; i++) {
	var progressBarItem = progressBarItems[i];

	progressBarItem.addEventListener('click', toggleProgressBar);
	progressBarItem.addEventListener('keypress', toggleProgressBar);
}


function toggleProgressBar() {
	var progressBarItems = document.getElementsByClassName('progress-bar__item');
	var progressBarItemsAddedClass = 'progress-bar__item_active';
	var progressBarItemsRemovedClass = 'progress-bar__item_active';

	var progressBar = document.getElementById('checkout__progress-bar');
	var progressBarAddedClass = 'progress-bar_active_' + this.id;
	var progressBarRemovedClass = progressBar.classList[1];

	toggleElemsClass(progressBarItemsAddedClass, progressBarItemsRemovedClass, progressBarItems, this);

	toggleElemClass(progressBarAddedClass, progressBarRemovedClass, progressBar);
}

function toggleElemClass(addedClass, removedClass, elem) {
	removeClass(removedClass, elem);
	addClass(addedClass, elem);
}

function toggleElemsClass(addedClass, removedClass, arrOfSublings, elem) {
	var sublings = arrOfSublings;

	for (var i = 0; i < sublings.length; i++) {
		var subling = sublings[i];

		removeClass(removedClass, subling);
	}

	addClass(addedClass, elem);
}

function addClass(cls, elem) {
	elem.classList.toggle(cls, true);
}

function removeClass(cls, elem) {
	elem.classList.toggle(cls, false);
}
