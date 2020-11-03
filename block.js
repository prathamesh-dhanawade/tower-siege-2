class Block {
  constructor(x,y,width,height) {

    this.Visiblity = 255;

    this.body = Bodies.rectangle(x,y,width,height);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    
    if(this.body.speed<5){
      var pos =this.body.position;
      var angle = this.body.angle
      push ()
  
      translate(pos.x,pos.y)
      rotate(angle)
      rectMode(CENTER);
      fill("green"); 
      rect(0,0, this.width, this.height);
      pop()

    }
    else{

World.remove(world,this.body)
push()
this.Visiblity = this.Visiblity-5;
pop()
        }
    
  }
}
  