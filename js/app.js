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
//   toggleElemClass() ( toggleElemMod() or changeElemClass() );
//   +edit a progress-bar modifier;
//   edit progress-bar styles;

var progressBarItems = document.getElementsByClassName('progress-bar__item');

for (var i = 0; i < progressBarItems.length; i++) {
	var progressBarItem = progressBarItems[i];

	progressBarItem.addEventListener('click', toggleProgressBarItem);
	progressBarItem.addEventListener('keypress', toggleProgressBarItem);
}

function toggleProgressBarItem() {
	// var progressBarItems = document.getElementsByClassName('progress-bar__item');
	var progressBarItemActivatingClass = 'progress-bar__item_active';

	var progressBar = document.getElementById('checkout__progress-bar');
	var progressBarAddedClass = 'progress-bar_active_' + cutBemElem(this.id);
	// console.log(progressBarAddedClass);
	var progressBarRemovedClass = progressBar.classList[1]; /* edit - what if there is more than one class? */

	activateElem(progressBarItemActivatingClass, progressBarItems, this);

	toggleElemClass(progressBarAddedClass, progressBarRemovedClass, progressBar);
}

// console.log( 'progress-bar__first-item_active'.slice(14, 24) );
// console.log( ~('progress-bar__first-item_active'.indexOf('__')) );
// console.log( cutBemElem('progress-bar__first-item') );

function cutBemElem(nameStr) {
	var blockIndex = nameStr.indexOf('__') + 2;
	var modIndex = nameStr.indexOf('_', blockIndex);

	if ( ~(blockIndex - 2) && ~modIndex ) {
		var result = nameStr.slice(blockIndex, modIndex);
	} else if ( ~(blockIndex - 2) ) {
		var result = nameStr.slice(blockIndex);
	} else if (~modIndex) {
		var result = nameStr.slice(0, modIndex);
	} else {
		var result = nameStr;
	}

	return result;
}

function toggleElemClass(addedClass, removedClass, elem) {
	removeClass(removedClass, elem);
	addClass(addedClass, elem);
}

function activateElem(activatingClass, arrOfSublings, elem) {
	var sublings = arrOfSublings;

	for (var i = 0; i < sublings.length; i++) {
		var subling = sublings[i];

		removeClass(activatingClass, subling);
	}

	addClass(activatingClass, elem);
}

function addClass(cls, elem) {
	elem.classList.toggle(cls, true);
}

function removeClass(cls, elem) {
	elem.classList.toggle(cls, false);
}
