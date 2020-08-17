const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new box();
    box2 = new box();

    console.log(ground);
}

function draw(){
    background(255);
    Engine.update(engine);

    box1.display();
    box2.display();
    
}