var r, g, b;
var audio = new Audio('music.mp3'); 
audio.play(); //play the audio
audio.loop = true;


function setup(){	
  createCanvas(windowWidth, windowHeight, WEBGL); //create a canvas that can be adjustable

  //start with random color. change the background whenever the page is reloaded
  r = random(255);
  g = random(255);
  b = random(255);
}


function draw(){
  background(r, g, b);

  var locY = (mouseY / height - 0) * (-2);
  var locX = (mouseX / width - 0) * 2;


  ambientLight(50, 51, 53, 80); //global light
  pointLight(0, 100, 200, locX, locY, 0); //single light
  
  //box in the middle
  translate(0, 0, 0);
  push();
  normalMaterial(0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(40);
  pop();

  //torus in the middle
  translate(0, 0, 0);
  push();
  specularMaterial(250);
  rotateZ(map(mouseY, 0, width, 0, PI));
  rotateX(map(mouseX, 0, height, 0, PI));
  rotateY(map(mouseX, 0, height, 0, PI));
  torus(90, 25, 64, 64);
  pop();

  //box on the left
  translate(-400, -70, 0);
  push();
  rotateZ(frameCount * -0.01);
  rotateX(frameCount * -0.01);
  rotateY(frameCount * -0.01);
  box(50);
  pop();

  //sphere
  translate(750, -170, 0);
  push();
  rotateZ(frameCount * 0.03);
  rotateX(frameCount * -0.02);
  rotateY(frameCount * 0.01);
  sphere(30, 25, 800);
  pop();

  //plane
  translate(0, 0, 0);
  push();
  rotateZ(frameCount * -0.01);
  rotateX(frameCount * -0.01);
  rotateY(frameCount * -0.01);
  plane(80);
  pop();
  normalMaterial(0);


  //plane
  translate(0, 0, 0);
  push();
  rotateZ(frameCount * 0.009);
  rotateX(frameCount * 0.009);
  rotateY(frameCount * 0.009);
  plane(100);
  pop();
  normalMaterial(0);

  //ambient torus
  translate(0, 350, 140, 10);
  push();
  ambientMaterial(250);
  rotateZ(frameCount * -0.02);
  rotateX(frameCount * -0.02);
  rotateY(frameCount * -0.02);
  torus(20, 10, 80, 80);
  pop();

  //thin and big torus above the center
  translate(-250, -450, 30);
  push(); 
  specularMaterial(250);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(100,8, 80, 80);
  pop();
  
  //cone 1 on the lower left side
  translate(-360, 550, 0);
  push();
  rotateZ(frameCount * -0.01);
  rotateX(frameCount * -0.01);
  rotateY(frameCount * -0.01);
  cone(10,60);
  pop();

  //cone 2
  translate(0, 10, -180);
  push();
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
  cone(20,50);
  pop();

  //cylinder on the lower left corner
  translate(-240, 100, 0);
  push();
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
  cylinder(50,50);
  pop();

  //cone with a needle
  translate(800, 40, 0);
  push();
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
  cone(20,50);
  pop();

  //needle(plane)
  translate(0, 0, 0);
  push();
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
  plane(1,120);
  pop();
  normalMaterial(0);

  //torus with a tooth
  translate(-850, -600, 0, 10);
  push();
  ambientMaterial(250);
  rotateZ(frameCount * -0.03);
  rotateX(frameCount * -0.03);
  rotateY(frameCount * -0.03);
  torus(20, 10, 80, 80);
  pop();

  //tooth(plane)
  translate(0, 0, 0);
  push();
  rotateZ(frameCount * -0.03);
  rotateX(frameCount * -0.03);
  rotateY(frameCount * -0.03);
  plane(5,20);
  pop();
  normalMaterial(0);

  //sphere on the upper left side
  translate(50, -70, 0);
  push();
  specularMaterial(250);
  rotateZ(frameCount * 0.03);
  rotateX(frameCount * -0.02);
  rotateY(frameCount * 0.01);
  sphere(8, 8, 800);
  pop();

  //small cylinder near the box on the left 
  translate(240, 100, 0);
  push();
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
  cylinder(5,5);
  pop();
}

function mousePressed() {
  // Check if mouse is inside the circle
  var d = dist(mouseX, mouseY);

  {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);	  
  }
}




