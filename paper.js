class Paper{
    constructor(x,y,r){
        var option={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

        this.x=x;
        this.y=y;
        this.r=r;
        this.body = Bodies.circle(x,y,r/2,option);
        World.add(myWorld,this.body);
    }
    dispaly(){
        var paperpos=this.body.position;
        var angle = this.body.angle;
        push();
        translate(paperpos.x,paperpos.y);
        rotate (angle);
        rectMode(CENTER);
        strokeWeight(3);
        fill(255,0,255);
        ellipse(0,0,10,10);
        pop();
        
    }
}