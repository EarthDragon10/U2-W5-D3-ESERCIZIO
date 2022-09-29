let n_img = 10;
let corrente = 1;

let images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const nextImg = () => {
	document.querySelector(`.slides:nth-child(${corrente})`).style.display =
		"none";

	document.querySelector(`.slides:nth-child(${corrente + 5})`).style.display =
		"block";
	document
		.querySelector(`.slides:nth-child(${corrente + 3})`)
		.classList.toggle("images-animation");
	corrente++;
	console.log(corrente);

	if (corrente > 6) {
		document.querySelector(`.slides:nth-child(4)`).style.display = "none";
		document.querySelector(`.slides:nth-child(1)`).style.display = "block";
		// corrente = 1;
	}
};

function playSlider() {
	return setInterval(nextImg, 1000);
}

// let varPlaySlider = setInterval(nextImg, 1000);

// const stopSlider = () => {
// 	clearInterval(varPlaySlider);
// };
// console.log(corrente);
