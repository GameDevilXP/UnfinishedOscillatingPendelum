class HeldRectangle {
    constructor(x,y){
        var options ={
            restitution: 3.0,
            friction:2.0,
            density:1.8,
        }
        this.body = Bodies.rectangle(x,y,50,50);
        this.width = 50;
        this.height = 50;
        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y)
        rotate(angle);
        rectMode(CENTER);
        fill("brown");
        pop();
        rect(pos.x,pos.y,this.width,this.height);
    }
    
}