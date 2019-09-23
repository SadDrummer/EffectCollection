let gif = document.querySelector("#two_cars_gif");
let isPlay = false;
gif.addEventListener("click", ()=>{
	if (isPlay) {
		gif.querySelector("audio").pause();
		isPlay = false;
	} else {
		gif.querySelector("audio").play();
		isPlay = true;
	}
});