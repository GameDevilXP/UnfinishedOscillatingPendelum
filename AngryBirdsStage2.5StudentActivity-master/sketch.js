const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ballHolder;
var heldRectangle;
var chain;


function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    ballHolder = new BallHolder(600,100,100,20);
    heldRectangle = new HeldRectangle(560,150,50,50);
    chain = new Chain(ballHolder.body,heldRectangle.body);
   

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    
    ground.display();
    ballHolder.display();
    heldRectangle.display();
    chain.display();
    
}
