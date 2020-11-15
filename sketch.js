
const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;
var myEngine,myWorld;

var dustbin1,dustbin2,dustbin3,paper,ground;
var box3,box4,box5;



function setup() {
	createCanvas(1000, 400);

	myEngine=Engine.create();
	myWorld = myEngine.world;
  


	

	//Create the Bodies Here.

	ground = new Ground(500,350,1000,20);
	dustbin1 = new Dustbin(750,330,200,20);
	dustbin2 = new Dustbin(650,290,20,100);
	dustbin3 = new Dustbin(850,290,20,100);
	paper = new Paper(110,300,30);
	
}


function draw() {

  background(200);
  Engine.update(myEngine);
  
  ground.display(); 
  dustbin1.display(); 
  dustbin2.display(); 
  dustbin3.display(); 
  paper.display();

 
}
 function keyPressed(){
	 if(keyCode===UP_ARROW){
		
		 Matter.Body.applyForce(paper.body,paper.body.position,{x:300,y:-110});
	 }
 }


