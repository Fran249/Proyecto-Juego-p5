class Nube {
 	constructor(){
 		this.r = 70;
 		this.x = width;
 		this.y = height - this.r 
 	}

 	show(){
 		image(ojoImg, this.x, this.y , this.r, this.r )
 	}

 	mover(){
 		this.x -= 10;
 	}