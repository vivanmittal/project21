var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
block1=createSprite(0,580,360,30)
block1.shapeColor="blue"

block2=createSprite(295,580,200,30)
block2.shapeColor="orange"

block3=createSprite(515,580,200,30)
block3.shapeColor="red"

block4=createSprite(740,580,220,30)
block4.shapeColor="green"

ball=createSprite(random(20,750),100,40,40)
ball.shapeColor="white"
ball.velocityX=5
ball.velocityY=10



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges= createEdgeSprites()
ball.bounceOff(edges)
if(block1.isTouching(ball)&&ball.bounceOff(block1)){
ball.shapeColor="blue"
}

if(block3.isTouching(ball)&&ball.bounceOff(block3)){
    ball.shapeColor="red"
    }

    if(block4.isTouching(ball)&&ball.bounceOff(block4)){
        ball.shapeColor="green"
        }

        if(block2.isTouching(ball)){
ball.shapeColor="orange"
ball.velocityX=0
ball.velocityY=0
        }
drawSprites()
    //add condition to check if box touching surface and make it box
}
