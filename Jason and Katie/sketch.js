//var color1; attempt to change color
var locations=[];
var counter=50;

function setup() {
    createCanvas(1200,800);
    skin = color(255,202,191);
    
  // uncomment this line to make the canvas the full size of the window
  // createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(255);
    //attempt to change location of monster 
for(var i = 0; i <6; i++){
  fill(skin);
  locations[i]=50+counter;    
  translate(locations[i], 5);
  makeAMonster();
}
    
   // makeAMonster(color1); attempt to pass parameter and adjust color
  // draw stuff here
  // ellipse(width/2, height/2, 50, 50);
}
function leftArm(){
beginShape();
    curveVertex(350,700);
    curveVertex(350,700);
    curveVertex(200,600);
    curveVertex(400,620);
    curveVertex(470,620);
    curveVertex(470,620);
    endShape();    
    
}
function rightArm(){
beginShape();
    curveVertex(600, 600);
    curveVertex(600, 600);
    curveVertex(720, 750);
    curveVertex(700, 750);
    curveVertex(600, 600);
    curveVertex(600, 600);
    endShape();    
}
function body(){
     beginShape();
    curveVertex(300, 800);
    curveVertex(300, 800);
    curveVertex(330, 550);
    curveVertex(630, 600);
    curveVertex(800, 1200);
    curveVertex(800, 1200);
    endShape();        
}
function leftEye(){
     noFill();
    beginShape();
    curveVertex(340, 580);
    curveVertex(340, 580);
    curveVertex(340,600);
    curveVertex(410, 600);
    curveVertex(415, 580);
    curveVertex(415, 580);
    endShape();
}
function rightEye(){
   noFill();
    beginShape();
    curveVertex(500, 580);
    curveVertex(500, 580);
    curveVertex(500,600);
    curveVertex(570, 600);
    curveVertex(575, 580);
    curveVertex(575, 580);
    endShape();
    
}
function leftFoot(){
    beginShape();
    curveVertex(375, 1200);
    curveVertex(375, 1200);
    curveVertex(400, 800);
    curveVertex(500, 800);
    curveVertex(500, 1200);
    curveVertex(500, 1200);
    endShape();    
    
} 
function rightFoot(){
    
    
 beginShape();
    curveVertex(475, 1200);
    curveVertex(475, 1200);
    curveVertex(500, 800);
    curveVertex(600, 800);
    curveVertex(600, 1200);
    curveVertex(600, 1200);
    endShape();
}
function makeAMonster(){//var color_1a, var color_2b) attempts to change color by passing parameters
    //fill(skin1);
    leftArm();
    rightArm();
    body();
    leftEye(); 
    rightEye();
    //fill(color_2b);
    leftFoot();
    rightFoot();
}


