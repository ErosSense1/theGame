let fuel = document.querySelector('#fuel');
class Player {
	constructor() {
		this.speed = { x: 0, y: 0 };
		this.width = 25;
		this.height = 40;
		this.movement = 3;
		this.pos = { x: WIDTH / 2 - this.width, y: HEIGHT / 2 - this.height };
		this.fuel = 1554;
		this.start = true;
		this.dead = 'none';
		this.win = false;
		this.play = false;
		this.lost = document.getElementById('lost');
		this.full = document.getElementById('fuela');
		let rand = Math.random(-1) * 1;

		for (let x = this.width * 2; x < WIDTH - this.width * 10; x += 1) {
			for (let y = this.height * 2; y < HEIGHT - this.height; y += 1) {
				this.pos.x = x * rand;
				this.pos.y = y * rand;
			}
		}
	}
	draw() {
		ctx.fillStyle = 'lightgray';
		ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);
	}
	update() {
		if (this.dead === 'none') {
			this.draw();
		} else {
			setTimeout((e) => {
				window.location.reload();
			}, 3000);
		}

		this.pos.x += this.speed.x;
		this.pos.y += this.speed.y;
		if (this.dead === 'lost') {
			if (!this.play) {
				lost.play();
			}
			this.play = true;
			this.lost.style.visibility = 'visible';
			this.start = false;
		}
		if (this.start) {
			this.fuel--;
		}
		if (this.fuel < 0) {
			this.pos.x  = 0
		this.pos.y  = 0
			if (!this.play) {
				nogas.play();
			}
			this.play = true;
			fuel.innerHTML = 'fuel: 0%';
			this.dead = 'fuel';
			this.full.style.visibility = 'visible';
			this.movement = 0;
		} else {
			fuel.innerHTML = `fuel: ${Math.floor(this.fuel / 100)}%`;
		}
		if (this.fuel > 10000) {
			this.fuel = 10000;
		}
		if (this.fuel > 9500 && this.dead != 'win') {
			win.style.visibility = 'visible';
			this.win = true;
		} else {
			win.style.visibility = 'hidden';
			this.win = false;
		}
		if (this.pos.y > HEIGHT * 1.2) {
			this.dead = 'lost';
		} else if (this.pos.y < -HEIGHT * 0.2) {
			this.dead = 'lost';
		}
		if (this.pos.x < -WIDTH * 0.2) {
			this.dead = 'lost';
		} else if (this.pos.x > WIDTH * 1.2) {
			this.dead = 'lost';
		}
		window.addEventListener('keydown', (e) => {
			this.start = true;
			switch (e.key) {
				case 'd':
					if (this.fuel > 0) {
						this.speed.x = this.movement;
					}
					break;
				case 'a':
					if (this.fuel > 0) {
						this.speed.x = -this.movement;
					}
					break;
				case 's':
					if (this.fuel > 0) {
						this.speed.y = this.movement;
					}
					break;
				case 'w':
					if (this.fuel > 0) {
						this.speed.y = -this.movement;
					}
					break;
				case ' ':
					if (this.win) {
						winS.play();
						this.dead = 'win';
						wina.style.visibility = 'visible';
						if (this.dead === 'win') {
							this.movement = 0;
						}
					}
					break;
			}
		});
	}
}
const obj = new Player();
class Star {
	constructor({ pos = { x: 0, y: 0 }, color, radius }) {
		this.pos = pos;
		this.radius = radius;
		this.color = color;
	}
	draw() {
		ctx.fillStyle = this.color;
		ctx.beginPath();
		ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2);
		ctx.fill();
		ctx.closePath();
	}
}
let stars = [];
for (let x = 0; x < 1000; x += 40) {
	for (let y = 0; y < 1000; y += 100) {
		let rand = Math.random() * 2;
		stars.push(
			new Star({
				color: 'white',
				pos: { x: x * rand, y: y * rand },
				radius: rand,
			}),
		);
	}
}
class Gas {
	constructor({ pos = { x: 0, y: 0 }, radius }) {
		this.pos = pos;
		this.radius = radius;
		this.color = 'red';
		let rand = Math.random(-1) * 1;
		let randY = Math.random(-1) * 1;

		for (let x = radius; x < WIDTH - radius * 2; x += 1) {
			for (let y = radius; y < HEIGHT - radius; y += 1) {
				this.pos.x = x * rand;
				this.pos.y = y * randY;
			}
		}
	}
	draw() {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.pos.x, this.pos.y, this.radius * 0.8, this.radius);
	}
}
let gas = [new Gas({ radius: 20 })];
class Rockx {
	constructor({ pos = { x: 0, y: 0 }, radius }) {
		this.pos = pos;
		this.radius = radius;
		this.x = 0;
		this.y = 0;
		this.color = 'rgba(160, 145, 123,0.7)';
		let rand = Math.random(-1) * 1;
		this.rand = Math.random(2) * 2 + 0.5;

		for (let x = 0; x < WIDTH - radius; x += 1) {
			this.pos.x = x * rand;
		}
	}
	draw() {
		this.x = this.radius * this.rand;
		this.y = this.radius * this.rand;
		ctx.fillStyle = this.color;
		ctx.fillRect(this.pos.x, this.pos.y, this.x, this.y);
	}
	update() {
		let randx = Math.random(0) * 2;
		let randy = Math.random(-2) * 2;
		this.draw();
		this.pos.x += randx;
		this.pos.y += randy;
	}
}
class Rocky {
	constructor({ pos = { x: 0, y: 0 }, radius }) {
		this.pos = pos;
		this.radius = radius;
		this.x = 0;
		this.y = 0;
		this.color = 'rgba(160, 145, 123,0.7)';
		this.rand = Math.random(2) * 2 + 0.5;
		let randY = Math.random(-1) * 1;

		for (let y = radius; y < HEIGHT - radius; y += 1) {
			this.pos.y = y * randY;
		}
	}
	draw() {
		this.x = this.radius * this.rand;
		this.y = this.radius * this.rand;
		ctx.fillStyle = this.color;
		ctx.fillRect(this.pos.x, this.pos.y, this.x, this.y);
	}
	update() {
		let randx = Math.random(-1) * 2;
		let randy = Math.random(-2) * 2;
		this.draw();
		this.pos.x += randx;
		this.pos.y += randy;
	}
}
let rocks = [];
function newRock() {
	let rand = Math.random() * 100;
	rocks.push(new Rockx({ radius: rand }));
	rocks.push(new Rocky({ radius: rand }));
}
function game() {
	let id = setInterval(newRock, 3000);
	return id;
}
