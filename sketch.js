var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box;
var edge1,edge2,edge3,edge4;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(500,600);

  surface1 = createSprite(70,595,100,10);
  surface1.shapeColor = ("blue");
    surface2 = createSprite(185,595,100,10);
    surface2.shapeColor = ("red");
  surface3 = createSprite(295,595,100,10);
  surface3.shapeColor = ("green");
  surface4 = createSprite(405,595,100,10);
  surface4.shapeColor = ("yellow");
  box = createSprite(random(70,450),100,30,30);
  box.shapeColor = ("white");
  box.velocityX = 4;
  box.velocityY = 4;
 
  // edges
  edge1 = createSprite(505,300,10,600);
  edge2 = createSprite(-5,300,10,600);
  edge3 = createSprite(250,-5,500,10);
  edge4 = createSprite(250,605,500,10);


    //create box sprite and give velocity

}

function draw() {
    background("black");
   
  
    box.bounceOff(edge1)
    box.bounceOff(edge2)
    box.bounceOff(edge3)
    box.bounceOff(edge4)
    
    if(box.isTouching(surface1)){
        box.bounceOff(surface1);
        box.shapeColor = ("blue");
    
    }
    if(box.isTouching(surface2)){
        box.bounceOff(surface2);
        box.shapeColor = ("red");
        
    }
    if(box.isTouching(surface3)){
        box.bounceOff(surface3);
        box.shapeColor = ("green");
        
    }
    if(box.isTouching(surface4)){
        box.velocityX = 0;
        box.velocityY = 0;
        box.shapeColor = ("yellow")
        
    }   
    
    
 drawSprites();   //add condition to check if box touching surface and make it box
}
