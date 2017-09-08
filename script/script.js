'use strict';

window.addEventListener('load', function () {
	var btnPrev = document.querySelector('.myGallery__btnPrev');
	var btnNext = document.querySelector('.myGallery__btnNext');
	var myPhotos = document.querySelectorAll('.my-gallery__photos');
	var i = 0;
	myPhotos[i].classList.add('my-gallery__photos-view');
	btnPrev.addEventListener('click', function (e) {
		showNextPhoto(-1);
	});
	btnNext.addEventListener('click', function (e) {
		showNextPhoto(1);
	});
	function showNextPhoto (incDec) {
		myPhotos[i].classList.remove('my-gallery__photos-view');
		i += incDec;
		i = (i > myPhotos.length - 1) ? myPhotos.length - 1 : (i < 0) ? 0 : i;
		myPhotos[i].classList.add('my-gallery__photos-view');
	}
});

