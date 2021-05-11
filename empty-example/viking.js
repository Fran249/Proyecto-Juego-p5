class Viking {
	constructor(){
		this.r = 50;
		this.x = this.r;
		this.y = height - this.r;
		this.vy = 0;
		this.gravedad = 2;

	}

	saltar() {
		if (this.y == height - this.r) {
		this.vy = -25;
		}
	}
	hits(ojo){
		return collideRectRect(this.x, this.y, this.r, this.r, ojo.x, ojo.y,ojo.r,ojo.r);

	}

	mover() {
		this.y += this.vy;
		this.vy += this.gravedad;
		this.y = constrain(this.y, 0 , height - this.r)
	}

	show() {
		image(vikingImg, this.x, this.y, this.r, this.r); 
	}
}