class Paper{
    constructor(x,y,r){
        var option={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:5.3
        }

        this.x=x;
        this.y=y;
        this.r=r;
        this.body = Bodies.circle(x,y,r/2,option);
      
        World.add(myWorld,this.body);
    }
    display(){
        var paperpos=this.body.position;
        var angle = this.body.angle;
        paper.scale=1;
        push();
        translate(paperpos.x,paperpos.y);
        rotate (angle);
        rectMode(CENTER);
        strokeWeight(3);
        fill(255,0,255);
        ellipse(0,0,30,30);
        pop();
        
    }
}
