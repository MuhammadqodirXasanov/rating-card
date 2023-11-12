const btn = document.querySelector('.btn');
const rating = document.querySelector('.rating');
const thanksBox = document.querySelector('.thanks-box');
const ratingBox = document.querySelector('.rating-box');
const selectedNum = document.querySelector('.selected-num');
const rates = document.querySelectorAll('.rate');
const errorMessage = document.querySelector('.err-msg');

let rateNum = '';
let activeRateNum = '';

btn.addEventListener('click', () => {
	if (rateNum) {
		thanksBox.style.display = 'block';
		ratingBox.style.display = 'none';
	} else {
		errorMessage.innerHTML = 'Rating is required!';
		setTimeout(() => {
			errorMessage.innerHTML = '';
		}, 3000);
	}

	selectedNum.innerHTML = rateNum;
});

rating.addEventListener('click', (e) => {
	if (e.target.classList.contains('rate')) {
		rateNum = e.target.innerHTML;

		rates.forEach((rateEl) => {
			rateEl.style.backgroundColor = '';
			rateEl.style.color = '';

			if (e.target === rateEl) {
				rateEl.style.color = 'white';
				rateEl.style.backgroundColor = '#7C8898';
			}
		});
	}
});
