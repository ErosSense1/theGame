function animate(func) {
	let id = requestAnimationFrame(func);
	ctx.clearRect(0, 0, WIDTH, HEIGHT);
	return id;
}
function img(src) {
	let img = new Image();
	img.src = src;

	return img;
}
