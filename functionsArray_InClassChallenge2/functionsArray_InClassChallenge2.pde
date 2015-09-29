/*
* re-structure this code into functions
* then using one function call to create the creature
* Use variables to pass parameters to the function.
* Some suggestions are to change color, location, and movement of arms + legs
* Use an array, to generate several creatures, each demonstrating their differences
* Then, call the array again, making modifications to the content of the array - ie. splice, remove, re-order, etc
* This MUST be done in P5.js
*/
void setup() {
  size(1200, 800);
    
}

void draw() {
  background(255);
    fill(0, 200, 15); // green
    
     
    //left arm
    beginShape();
    curveVertex(350,700);
    curveVertex(350,700);
    curveVertex(200,600);
    curveVertex(400,620);
    curveVertex(470,620);
    curveVertex(470,620);
    endShape();
    
  //right arm
    
    beginShape();
    curveVertex(600, 600);
    curveVertex(600, 600);
    curveVertex(720, 750);
    curveVertex(700, 750);
    curveVertex(600, 600);
    curveVertex(600, 600);
    endShape();
   
   // body
    beginShape();
    curveVertex(300, 800);
    curveVertex(300, 800);
    curveVertex(330, 550);
    curveVertex(630, 600);
    curveVertex(800, 1200);
    curveVertex(800, 1200);
    endShape();
  
    
   // eye
    noFill();
    beginShape();
    curveVertex(340, 580);
    curveVertex(340, 580);
    curveVertex(340,600);
    curveVertex(410, 600);
    curveVertex(415, 580);
    curveVertex(415, 580);
    endShape();
    
    // right eye
    noFill();
    beginShape();
    curveVertex(500, 580);
    curveVertex(500, 580);
    curveVertex(500,600);
    curveVertex(570, 600);
    curveVertex(575, 580);
    curveVertex(575, 580);
    endShape();
    
    
    // left foot
    fill(200, 60, 200);
    beginShape();
    curveVertex(375, 1200);
    curveVertex(375, 1200);
    curveVertex(400, 800);
    curveVertex(500, 800);
    curveVertex(500, 1200);
    curveVertex(500, 1200);
    endShape();
    
    // right foot
    beginShape();
    curveVertex(475, 1200);
    curveVertex(475, 1200);
    curveVertex(500, 800);
    curveVertex(600, 800);
    curveVertex(600, 1200);
    curveVertex(600, 1200);
    endShape();
}