const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var platform;
var stand1,stand2; 
var block1;
var block2;
var box1;

function preload(){

}

function setup(){
  var canvas = createCanvas(1200,400);
   engine = Engine.Create();
   world = engine.world;

  ground = new Ground(600,height,1200,20);
  platform = new Ground(150,305,300,170);

  stand1 = new Ground(400,300,20,10);
  stand2 = new Ground(950,150,20,10);
  block1 = new Box(330,235,30,40);
  block2 = new Box(360,235,30,40);

}

function draw(){
  engine.update(engine);
  strokeWeight(4);
  stand1.display();
  stand2.display();
  ground.display();
  platform.display();
    
}