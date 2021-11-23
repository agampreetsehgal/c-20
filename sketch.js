
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var rock;
var wall;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var rock_options = {
    restitution: 0.95,
   
  }
   
   var wall_options ={
     isStatic: true
   };
  

  wall = Bodies.rectangle(200,390,400,20,wall_options);
  World.add(world,wall);

  rock = Bodies.circle(100,10,20,rock_options);
  World.add(world,rock);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(rock.position.x,rock.position.y,20);
  rect(wall.position.x,wall.position.y,400,20);
 

}


