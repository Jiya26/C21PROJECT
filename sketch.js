var bullet,wall, speed , weight
var thickness;
 
 
 function setup() {
  
  createCanvas(1600,1000);
  bullet=createSprite(50,200,100,20);
  wall=createSprite(500,200,60,height/2);

  speed=random(223,321);
  weight=random(30,52);
  thickness = random(22,83);

  bullet.velocityX=speed;

  wall.width = thickness;
}

function draw() {
  background(255,255,255); 
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    
    if(damage<10){
      wall.shapeColor = color(0,255,0);
    }
    if(damage>10){
      wall.shapeColor = color(255,0,0);
    }
 }
    
  drawSprites();
}
function hasCollided(lbullet, lwall)
{
  bulletRightEdge=lbullet.x+lbullet.width; 
  wallLeftEdge=lwall.x-lwall.width;
  if(bulletRightEdge>=wallLeftEdge)
  {
     return true
  }
  return false;
  }
  