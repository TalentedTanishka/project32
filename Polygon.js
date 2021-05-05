class Polygon
{
  constructor(x, y, radius) {
    var options = { 
      'isStatic' : false,
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius;
    World.add(world, this.body);
  }
  display(){
    push();
    translate(this.body.position.x, this.body.position.y);
    fill(180,39,219);
    strokeWeight(2);
    ellipseMode(CENTER);
   ellipse( 0, 0, this.radius);
    pop();
  }
  }
  