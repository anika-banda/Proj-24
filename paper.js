class paper
{
    constructor(x,y,r)

    {
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(85,-85,this.r/2,options)
        World.add(world,this.body);
        this.x=85;
        this.y=-85;
        this.r = r;
       
    }
    display()
    {
        var paperpos=this.body.position;

        push()
        translate(paperpos.x,paperpos.y);
       
        strokeWeight(3)
        fill(255,0,255)
        rectMode(CENTER);
        ellipse(0,0,this.r,this.r);
        pop()

    }
}