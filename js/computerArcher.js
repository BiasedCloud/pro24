class ComputerArcher{
    constructor(x,y,w,h){
        var ops = {
            isStatic:true
        }
                
        this.w = w;
        this.h = h;

        this.body = Matter.Bodies.rectangle(x,y,this.w,this.h,ops);

        this.image = loadImage("./assets/computerArcher.png");

        World.add(world,this.body);
    }

    display() {        
        var pos = this.body.position;
        var angle = this.body.angle;

        

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        Matter.Body.setAngle(this.body,PI/2)
        imageMode(CENTER);
        image(this.image,0,0,this.w,this.h);
        pop()
    }
}