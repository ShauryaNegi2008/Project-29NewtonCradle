
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let ground,paper1,paper2,paper3,paper4,rope1,rope2,rope3,rope
const Constraint=Matter.Constraint;
function preload()
{
	
}

function setup() {
	background(0)
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground =new Ground(400,250,230,20);
paper1 = new Paper(320,575,40)
paper2 = new Paper(370,575,40)
paper3 = new Paper(400,575,40)
paper4 = new Paper(440,575,40)
rope1 = new Rope(paper1.body,ground.body,-80,0)
rope2 = new Rope(paper2.body,ground.body,-40,0)
rope3 = new Rope(paper3.body,ground.body,0,0)
rope4 = new Rope(paper4.body,ground.body,40,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  drawSprites();
 ground.display();
 rope1.display();
rope2.display();
rope3.display();
 rope4.display();
 paper1.display();
 paper2.display();
 paper3.display();
  paper4.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	
		 Matter.Body.applyForce(paper1.body,paper1.body.position,
								{x:-50,y:-45});
	
		  }
	}



