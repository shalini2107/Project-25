class dustbin
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.dustbinWidth=190;
		this.dustbinHeight=190;
		this.wallThickness=20;
		this.image=loadImage("dustbingreen.png");
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		
		

		this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);
        
	}
	display()
	{
		var posBottom=this.bottomBody.position;
		var posLeft=this.leftWallBody.position;
		var posRight=this.rightWallBody.position;

			

			push()
			translate(posLeft.x, posLeft.y);
			imageMode(CENTER)
			strokeWeight(4);
			
			fill(255)
			rotate(this.angle)
			
			pop()

			push()
			translate(posRight.x, posRight.y);
			imageMode(CENTER)
			strokeWeight(4);
			
			fill(255)
			rotate(-1*this.angle)
			
			pop()

			push()
			translate(posBottom.x, posBottom.y+10);
			imageMode(CENTER)
			strokeWeight(4);
			
			fill(255)
			image(this.image,0,0, this.dustbinWidth, this.dustbinHeight);
			pop()
			
	}

}