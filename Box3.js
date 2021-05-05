class Box3
{
  constructor(x, y, width, height) {
    var options = { 
      'isStatic' : false,
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.visibility = 255;
    World.add(world, this.body);
  }

  
  display(){

   
    if(this.body.speed < 3)
    {

      push();
      translate(this.body.position.x, this.body.position.y);
      strokeWeight(2);
      fill(253,75,75);
      rectMode(CENTER);
      rect( 0, 0, this.width, this.height);
      pop();


    }
    else
    {
      World.remove(world,this.body);
      push();
      tint(255 , this.visibility)
      rect( 0, 0, this.width, this.height);
      this.visibility = this.visibility - 5
      pop();


    }
  

    
  }

  score()
  {
    if(this.visibility < 0 && this.visibility > -105)
    {
      score++ ;
    }
  }
  }
  