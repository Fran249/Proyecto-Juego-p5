 class Ojo {
 	constructor(){
 		this.r = 40 ;
 		this.x = width;
 		this.y = height - this.r; 
 	}

 	show(){
 		image(ojoImg, this.x, this.y , this.r, this.r );
 	}

 	mover(){
 		this.x -= 8;
 	}
 }