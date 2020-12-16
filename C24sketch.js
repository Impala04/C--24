const Engine = Matter.Engine; //Universe
const World = Matter.World;  //Earth
const Bodies = Matter.Bodies;  //Physical Bodies
const Render = Matter.Render;

var myEngine, myWorld; //our engine and world objects for this file
var ground; //physical bodies
var box1, box2, box3,box4,box5;
var log1, log2, log3,log4;
var pig1,pig2, bird;

function setup()
{
    createCanvas(1800,500);

    //initialising myEngine and myWorld objects
    myEngine=Engine.create();
    myWorld = myEngine.world;

    var render = Render.create({
        element: document.body,
        engine: myEngine,
        options: {
          width: 1200,
          height: 700,
          wireframes: false
        }
      });
  
      //Engine.run(myEngine);
      Render.run(render);
  
    ground=new Ground(width/2,height,width,20)
    console.log(ground)

    
    //instantiating objects of the Box class
    box1=new Box(700,420,70,70);
    box2=new Box(920,420,70,70)
    pig1= new Pig(810,450)
    log1=new Log(810,360,300,PI/2)
    pig2= new Pig(810,320)
    box3= new Box(700,340,70,70)
    box4= new Box(920,340,70,70)
     log2= new Log(810,280,300,PI/2)
     box5= new Box(810,260,70,70)
     log3= new Log(760,220,150,PI/7)
     log4= new Log(870,220,150,-PI/7)
    bird= new AngryBird (100,400)
}

function draw()
{
    background(0);

    Engine.update(myEngine); //refreshing myEngine in every frame-like drawSprites()
    //displaying the box using p5 rect Shape
    
    
    box1.display();
    box2.display();
    pig1.display() 
     ground.display();
     log1.display();
     pig2.display()
     box3.display()
     box4.display()
     log2.display()
     box5.display()
     log3.display()
     log4.display()
     bird.display()
}
