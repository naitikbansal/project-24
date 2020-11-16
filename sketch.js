const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bin1,paperObject,groundObject;
var ball;
function preload()
{
	
}

function setup() {
	createCanvas(1250,650);
   rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
    
	
	paperObject=new Paper(200,450,70);
	groundObject=new ground(width/2,620,width,20);
	bin1=new Bin(1200,510,20,200);
	bin2=new Bin(1000,510,20,200);
	bin3=new Bin(1100,600,200,20);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('black');
  paperObject.display();
  groundObject.display();
  bin1.display();
  bin2.display();
  bin3.display();
  
  
  
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145})
	}
}
