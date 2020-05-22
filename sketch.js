const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
 
 
 var sun1,mercury,venus,earth,mars,jupiter,saturn,neptune,uranus



function setup() {
  createCanvas(10000,800);

  engine = Engine.create();
  world = engine.world;

  sun1 = new sun(700,300, 120, 250, 200, 0);
  mercury = new planet(592,300,20,155,155,155);
  venus = new planet(503,166,30,100,100,100);
  //  earth = new Planet(370,413,20,200,200,200);
  // mars = new Planet;
  // jupiter = new Planet;
  // saturn = new Planet;
  // neptune = new Planet;
  // uranus = new Planet;



}

function draw() {
  background(0);
fill("white");
  text("mouse pointerx:"+ mouseX,20,15);
  text("mouse pointery:"+ mouseY,140,15);

  engine = Engine.create();
    world = engine.world;
    
    

      sun1.display();
      mercury.display();
      venus.display();
      //  earth.display();
    
    
    
goGrow();
  
  drawSprites();
}

function goGrow(){

if(frameCount % 50 === 0){

sun1.scale = sun1.scale+0.5

}


}


