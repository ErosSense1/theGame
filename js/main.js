let id;
function gameLoop() {
	id = animate(gameLoop);
	stars.forEach((s) => {
		s.draw();
	});
	let last = gas.length - 1;
	if (obj.fuel > 0 && obj.dead === 'none') {
		gas[last].draw();
	}
	if (
		obj.pos.x + obj.width > gas[last].pos.x &&
		obj.pos.x < gas[last].pos.x + gas[last].radius &&
		obj.pos.y < gas[last].pos.y + gas[last].radius &&
		obj.pos.y + obj.height > gas[last].pos.y
	) {
		sound.play();
		gas.push(new Gas({ radius: 20 }));
		obj.fuel += 500;
	}
	rocks.forEach((roxk) => {
		roxk.update();
		if (
			obj.pos.x + obj.width > roxk.pos.x &&
			obj.pos.x < roxk.pos.x + roxk.x &&
			obj.pos.y < roxk.pos.y + roxk.y &&
			obj.pos.y + obj.height > roxk.pos.y
		) {
			hit.play();
			console.log(obj.fuel);
			obj.fuel -= 50;
		}
	});

	obj.update();
}
start.addEventListener('click', (e) => {
	start.style.visibility = 'hidden';
	name.style.visibility = 'hidden';
	version.style.visibility = 'hidden';
	fuel.style.visibility = 'visible';
	game();
	gameLoop();
});
