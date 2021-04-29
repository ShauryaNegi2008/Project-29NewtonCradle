class Paper {  
    constructor(x, y, radius){
        var options = {
            'restitution':0.5,
            'friction':2,
            'density':1.0,
            'isStatic' : false
        }
         this.radius = radius
         
        this.body = Bodies.circle(x, y, this.radius, options);
	    World.add(world, this.body);
        
   }
   display(){
    fill("white");
    noStroke();
    ellipseMode(RADIUS);
    ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
   }
}