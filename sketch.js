
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world;
var ground1;
var paper1;

var container1;
var container2;
var container3;
function preload()
{
	
}

function setup() {
	createCanvas(2900, 2900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground1 = new ground(200,390,2900,30);
	container1 = new container(200,300,50,50);
   
	container2 = new container(240,100,50,100);
	container3 = new container(460,610,20,100);

	paper1 = new paper(600,900,180);
	fill(255,0,255);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
 
  ground1.display(); 
  paper1.display();
  
  container1.display();
  container2.display();
  container3.display();

  keyPressed();
  drawSprites();
 
}


function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85})
	}
}
