class AngryBird
{
    constructor(x, y)
    {

        var boxOptions={   //JSON script
            restitution:0.7,
            density:1,
            friction:0.5
        }
        this.width=50;
        this.height=50;
        this.body=Bodies.rectangle(x,y,50,50,boxOptions);
        World.add(myWorld, this.body);
    }

    display()
    {
        var angle=this.body.angle;
        angleMode(RADIANS);
        
        var pos=this.body.position;
        pos.x=mouseX
        pos.y=mouseY
        push();
        translate(pos.x, pos.y)
        rotate(angle)
        rectMode(CENTER);
        stroke("red");
        strokeWeight(4);
        fill(255);
        rect(0, 0, this.width, this.height);
        pop();
    }
}
