class PlayerArcher{
    constructor(x,y,w,h){
        var ops = {
            isStatic:true
        }

        this.w = w;
        this.h = h;

        this.body = Matter.Bodies.rectangle(x,y,this.w,this.h,ops);

        this.image = loadImage("./assets/playerArcher.png");

        World.add(world,this.body);
    }

    display() {        
        var pos = this.body.position;
        var angle = this.body.angle;
        if (keyIsDown(DOWN_ARROW) && angle < -1.77) {
            angle += 0.01;
            Matter.Body.setAngle(this.body, angle);
          }
      
          if (keyIsDown(UP_ARROW) && angle > -1.47) {
            angle -= 0.01;
            Matter.Body.setAngle(this.body, angle);
          }
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        Matter.Body.setAngle(this.body,-PI/2);
        image(this.image,0,0,this.w,this.h);
        pop()
    }
}