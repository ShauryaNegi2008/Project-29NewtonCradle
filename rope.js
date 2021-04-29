class Rope{
constructor(body1,body2,x,y){
    this.x=x;
    this.y=y;
var options={
bodyA:body1,
bodyB:body2,
pointB:{x:this.x, 
    y:this.y}
}
this.rope=Constraint.create(options)
World.add(world,this.rope);


}
display(){
    var pointA=this.rope.bodyA.position;
    var pointB=this.rope.bodyB.position;
    strokeWeight(2);
    stroke("red") 
    var Anchor1X=pointA.x 
    var Anchor1Y=pointA.y 
    var Anchor2X=pointB.x+this.x 
    var Anchor2Y=pointB.y+this.y
    line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
}


}
