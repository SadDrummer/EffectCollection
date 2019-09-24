let ad = document.getElementById("nasty_ads_block"),
	colors = ["#00C7D5", "#20A020", "yellow"],
	i = 0;
let timer = setInterval(()=>{
	ad.style.backgroundColor = colors[i];
	i = ++i % 3;
}, 1000);

ad.addEventListener("click", ()=>{
	window.location = "https://www.healthline.com/health/mens-health/penis-stretching";
});
let close = ad.querySelector("div");
close.addEventListener("mousedown", function(e){
	ad.style.marginTop = "-41px";
});
close.addEventListener("mouseup",function(e){
	ad.remove();
});