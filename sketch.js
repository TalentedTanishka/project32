const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine , world;
var ground, ground1 , ground2 , ground3;
var box1 , box2 , box3 , box4 , box5 , box6 , box7 , box8 , box9;
var box11 , box12 , box13 , box14 , box15 , box16 , box17 , box18 , box19 , box20;
var box21 , box22 , box23 , box24 , box25 , box26 , box27 ;
var box31 , box32 , box33 , box34 , box35 , box36 , box37 , box38 , box39 , box40;
var box41 , box42 , box43 , box44 , box45;
var polygon , slingshot;
var backgroundImg;
var score = 0;

function preload() {
   getBackgroundImg();
}


function setup() {
  var canvas = createCanvas(800,600);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,590,800,20);
ground1 = new Ground(300,400,200,20);
ground2 = new Ground(550,550,300,20);
ground3 = new Ground(550,200,100,20);


box1 = new Box(300,375,40,40);
box2 = new Box(270,375,40,40);
box3 = new Box(250,375,40,40);
box4 = new Box(330,375,40,40);
box5 = new Box(360,375,40,40);
box6 = new Box1(270,350,40,40);
box7 = new Box1(280,350,40,40);
box8 = new Box1(320,350,40,40);
box9 = new Box1(340,350,40,40);
box11 = new Box(320,290,40,40);
box12 = new Box(285,290,40,40);
box13 = new Box1(300,250,40,40);


box14 = new Box2(525,515,50,50);
box15 = new Box2(535,515,50,50);
box16 = new Box2(545,515,50,50);
box17 = new Box2(555,515,50,50);
box18 = new Box2(565,515,50,50);
box19 = new Box2(575,515,50,50);

box20 = new Box3(450,460,50,50);
box21 = new Box3(500,460,50,50);
box22 = new Box3(540,460,50,50);
box23 = new Box3(600,460,50,50);
box24 = new Box3(640,460,50,50);

box25 = new Box2(490,400,50,50);
box26 = new Box2(530,400,50,50);
box27 = new Box2(580,400,50,50);




box32 = new Box4(538,175,30,30);
box33 = new Box4(548,175,30,30);
box34 = new Box4(558,175,30,30);

box37 = new Box5(540,165,30,30);
box38 = new Box5(550,165,30,30);


box45 = new Box4(545,135,30,30);

polygon = new Polygon(50,200,30);

slingshot = new SlingShot(polygon.body ,{x : 80 , y: 80});


}

function draw() {

   if(backgroundImg)
   background(backgroundImg);



   Engine.update(engine);

textSize(30);
   text("SCORE : " + score , width-200 , 50);

ground.display();
   ground1.display();
   ground2.display();
   ground3.display();

  box1.display();
  box2.display();
  box3.display();
   box4.display();
   box5.display();
   box6.display();
  box7.display();
   box8.display();
   box9.display();
   box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box32.display();
    box33.display();
    box34.display();
    box37.display();
    box38.display();
    box45.display();

    box1.score();
    box2.score();
    box3.score();
     box4.score();
     box5.score();
     box6.score();
    box7.score();
     box8.score();
     box9.score();
     box11.score();
      box12.score();
      box13.score();
      box14.score();
      box15.score();
      box16.score();
      box17.score();
      box18.score();
      box19.score();
      box20.score();
      box21.score();
      box22.score();
      box23.score();
      box24.score();
      box25.score();
      box26.score();
      box27.score();
      box32.score();
      box33.score();
      box34.score();
      box37.score();
      box38.score();
      box45.score();
  

     
    polygon.display();
   slingshot.display();

    
}
function mouseDragged()
{
Matter.Body.setPosition(polygon.body , {x : mouseX , y : mouseY})

}

function mouseReleased()
{

	slingshot.fly();
}

function keyPressed()
{
if(keyCode == 32)
{
   Matter.Body.setPosition(polygon.body , {x : 50 , y : 200})
   slingshot.attach(polygon.body);
}


}
async function getBackgroundImg(){
   var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
   var responseJSON = await response.json();

   var datetime = responseJSON.datetime;
   var hour = datetime.slice(11,13);
   
   if(hour>=0600 && hour<=1900){
       bg = "sprites/bg1.png";
   }
   else{
       bg = "sprites/bg2.jpg";
   }

   backgroundImg = loadImage(bg);
   console.log(backgroundImg);
}


