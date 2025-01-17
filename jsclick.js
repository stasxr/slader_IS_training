
const slider = document.querySelector('.slider');
const items = document.querySelectorAll('.slider img, .slider video');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

function updateSliderPosition() {
	slider.style.transform = 'translateX(-${currentIndex * 100}%)';
}

nextButton.addEventListener('click', () => {
	currentIndex = (currentIndex + 1) % items.length;
	updateSliderPosition();
});

prevButton.addEventListener('click', () => {
	currentIndex = (currentIndex - 1 + items.length) % items.length;
	updateSliderPosition();
});