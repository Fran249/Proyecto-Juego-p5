let viking;
let vikingImg;
let fondoImg;
let ojoImg;
let ojos = [];

function preload(){
vikingImg = loadImage("https://i.imgur.com/bNvPtei.png?1");
ojoImg = loadImage("https://i.imgur.com/Ypoh0E0.png?1")
fondoImg = loadImage("https://i.imgur.com/zrAB4Hq.jpg?1")
}

function setup() {
	createCanvas(1000, 450);
	url = "https://media.giphy.com/media/RU5b41May8iOB9T4Qb/giphy.gif";
  	fondoImg = loadImage(url)
	viking = new Viking();
}

function keyPressed(){
	if (key == ' ') {
		viking.saltar();
	}
}

function draw() {
	if (random(1) < 0.005) {
		ojos.push(new Ojo());
	}

	background(fondoImg);
	for (let o of ojos) {
		o.mover();
		o.show();
		if (viking.hits(o)){
			alert("Game Over!")
			noLoop();
			window.location.reload()
		}
	}

	viking.show();
	viking.mover();
	
}
