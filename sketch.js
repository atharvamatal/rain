const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var drop1,drop2;
var maxDrops=100;
var drop = [];
function preload(){
    
}

function setup(){
    var canvas = createCanvas(1200,570);
    engine = Engine.create();
    world = engine.world; 
   if(frameCount%150===0){

for(i=0;i<maxDrops;i++){
drop.push(new Createdrop(random(0,400),random(0,400)));
}
 }
} 
function draw(){
    background("black");
    Engine.update(engine);
  
    for(var i = 0; i<maxDrops; i++){
        drop[i].showDrop();
        drop[i].updateY();
        
    }
        
  
}   
