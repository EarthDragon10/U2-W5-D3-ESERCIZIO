let n_img = 10;
let corrente = 1;

const nextImg = () => {
	document.querySelector(`.slides:nth-child(${corrente})`).style.display =
		"none";

	document.querySelector(`.slides:nth-child(${corrente + 5})`).style.display =
		"block";
	document
		.querySelector(`.slides:nth-child(${corrente + 5})`)
		.classList.toggle("images-animation");
	corrente++;
	console.log(corrente);
};

const playSlider = () => {
	setInterval(nextImg, 1000);
};

console.log(corrente);
