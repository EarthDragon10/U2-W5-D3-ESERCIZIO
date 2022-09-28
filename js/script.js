let n_img = 10;
let corrente = 1;

const nextImg = () => {
	if (corrente > 5) {
		corrente = 1;
		let initialImg = 1;
		let finalImg = 6;
		while (initialImg <= 5) {
			document.querySelector(
				`.slides:nth-child(${initialImg})`
			).style.display = "block";
			initialImg++;
			console.log(initialImg);
		}
		while (finalImg < n_img + 1) {
			document.querySelector(
				`.slides:nth-child(${finalImg})`
			).style.display = "none";
			finalImg++;
		}
	} else {
		document.querySelector(`.slides:nth-child(${corrente})`).style.display =
			"none";

		document.querySelector(
			`.slides:nth-child(${corrente + 5})`
		).style.display = "block";
		corrente++;
	}
	console.log(corrente);

	colorizeBalls(corrente);
};

const colorizeBalls = (corrente) => {
	if (corrente === 4) {
		document.querySelector(".ball:nth-child(1)").style.backgroundColor =
			"grey";
		document.querySelector(".ball:nth-child(2)").style.backgroundColor =
			"orange";
	} else if (corrente === 1) {
		document.querySelector(".ball:nth-child(1)").style.backgroundColor =
			"orange";
		document.querySelector(".ball:nth-child(2)").style.backgroundColor =
			"grey";
	}
};

const prevImg = () => {
	corrente--;
	if (corrente == 0) {
		corrente = n_img;
	}
	console.log(corrente);

	for (let i = n_img; i > 0; i--) {
		document.querySelector(`.slides:nth-child(${i})`).style.display =
			"none";
	}
	document.querySelector(`.slides:nth-child(${corrente})`).style.display =
		"block";
};

console.log(corrente);
