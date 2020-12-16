class Log 
{
    constructor(x,y,height,angle)
    {

        var boxOptions={
            restitution:0.5,
            density:1,
            friction:1.5
        }
        this.width=20;
        this.height=height;
        this.body=Bodies.rectangle(x,y,20,height,boxOptions);
        Matter.Body.setAngle(this.body,angle)
        World.add(myWorld, this.body);
    }

    display()
    {
        var angle=this.body.angle;
        angleMode(RADIANS);
        
        var pos=this.body.position;
        push();
        translate(pos.x, pos.y)
        rotate(angle)
        rectMode(CENTER);
        stroke("magenta");
        strokeWeight(4);
        fill(255);
        rect(0, 0, this.width, this.height);
        pop();
    }
}
