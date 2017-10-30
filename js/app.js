// Sign up form validation

(function() {
	var submit = document.getElementById("sign-up__submit");

	submit.onclick = function() {
		var email = document.getElementById("sign-up__email");
		var emailC = document.getElementById("sign-up__emailc");

		var password = document.getElementById("sign-up__password");
		var passwordC = document.getElementById("sign-up__passwordc");

		// email field validation
		if (emailC.value !== email.value) {
			emailC.setCustomValidity("The two email addresses must match.");
		} else {
			emailC.setCustomValidity("");
		}

		// password field validation
		if (passwordC.value !== password.value) {
			passwordC.setCustomValidity("The two passwords must match.");
		} else {
			passwordC.setCustomValidity("");
		}
	};
})();





// Confirm window before form reset

(function() {
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
})();





// Progress-bar toggle

// TODO:
//   clean up functions;
//   toggleElemClass() ( toggleElemMod() or changeElemClass() );
// + edit a progress-bar modifier;
// + edit the progress-bar styles;
//   edit the slider__item styles;
//   make the slider component independent;

(function(){
	var progressBarItems = document.getElementsByClassName('progress-bar__item');

	for (var i = 0; i < progressBarItems.length; i++) {
		var progressBarItem = progressBarItems[i];

		progressBarItem.addEventListener('click', toggleProgressBarItem);
		progressBarItem.addEventListener('keypress', toggleProgressBarItem);
	}

	function toggleProgressBarItem() {
		var progressBar = document.getElementById('checkout__progress-bar');
		var progressBarAddedClass = 'progress-bar_active_' + cutBemElem(this.id);
		// console.log(progressBarAddedClass);
		var progressBarRemovedClass = progressBar.classList[1]; /* edit - what if there is more than one class? */

		// var progressBarItems = document.getElementsByClassName('progress-bar__item');
		var progressBarItemActivatingClass = 'progress-bar__item_active';

		var sliderItems = document.getElementsByClassName('slider__item');
		var sliderItemActivatingClass = 'slider__item_active';
		var selectedSliderItem = getRelatedElem(sliderItems, progressBarItems, this);

		activateElem(progressBarItemActivatingClass, progressBarItems, this);

		toggleElemClass(progressBarAddedClass, progressBarRemovedClass, progressBar);

		activateElem(sliderItemActivatingClass, sliderItems, selectedSliderItem);
	}

	function getRelatedElem(arrOfRelatedElems, arrOfElems, elem) {
		// rename arguments;
		var elemIndex = identifyIndex(arrOfElems, elem);
		var relatedElem = getElemByIndex(arrOfRelatedElems, elemIndex);

		return relatedElem;
	}

	function identifyIndex(arrOfElems, elem) {
		for (var i = 0; i < arrOfElems.length; i++) {
			if (arrOfElems[i] !== elem) continue;

			return i;
		}

		return -1;
	}

	function getElemByIndex(arrOfElems, index) {
		var elems = arrOfElems;

		for (var i = 0; i < elems.length; i++) {
			var elem = elems[i];

			if (i !== index) continue;

			return elem;
		}
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
})();
