const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground

var particles = []
var plinkos = []
var divisions = []

function setup(){
    var canvas = createCanvas(490,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Grou(240,795,480,10)

    for(var i = 0; i<width;i=i+80){
      divisions.push(new Div(i,700,10,200));
    }
    
    for(var i = 0; i<width;i=i+60){
      plinkos.push(new Plinkos(i,250,10));
    }
    for(var i = 0; i<width;i=i+60){
      plinkos.push(new Plinkos(i,500,10));
    }
    for(var i = 0; i<width;i=i+90){
      plinkos.push(new Plinkos(i,325,10));
    }
    for(var i = 0; i<width;i=i+90){
      plinkos.push(new Plinkos(i,425,10));
    }
 
   
    
}

function draw(){
  background("black")
    Engine.update(engine);

    ground.display();
    if(frameCount%60===0){
      particles.push(new Particle(random(width/2-10,width/2+10),10,10))
    }
    for (var i = 0; i<divisions.length;i++){
      divisions[i].display()
    }
    for (var i = 0; i<plinkos.length;i++){
      plinkos[i].display()
    }
    for(var j = 0; j<particles.length;j++){
      particles[j].display();
    }
}
