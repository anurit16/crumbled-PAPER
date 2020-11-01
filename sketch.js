
const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;
var myEngine,myWorld;

var dustbin1,dustbin2,dustbin3,paper,ground;
var box3,box4,box5;



function setup() {
	createCanvas(1800, 600);

	myEngine=Engine.create();
	myWorld = myEngine.world;
  


	

	//Create the Bodies Here.

	ground = new Ground(900,550,1800,20);
	dustbin1 = new Dustbin(1600,530,300,20);
	dustbin2 = new Dustbin(1450,430,20,200);
	dustbin3 = new Dustbin(1750,430,20,200);
   	paper = new Paper(100,300,20);
	
}


function draw() {

  background(0);
  Engine.update(myEngine);
  
  ground.display(); 
  dustbin1.display(); 
  dustbin2.display(); 
  dustbin3.display(); 
  paper.display();

 
}
 function keyPressed(){
	 if(keyCode===UP_ARROW){
		 Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	 }
 }


