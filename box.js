class box {
    constructor(x,y,width,height) {
        var options ={
            restitution: 1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,options); 
        World.add(world,this.body); 
    }

    display() {
        rectMode(CENTER);
        fill(255);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}