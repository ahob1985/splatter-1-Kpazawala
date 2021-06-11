// Author:

// Global UI Variables
let canvasDiv;
let canvas;
let buttonDiv;
let clearButton;
let sliderDiv;
let slider;
let minSpan;
let maxSpan;

function setup() {
  canvas = createCanvas(640, 480);
  background(65, 60, 88);

  sliderDiv = createDiv();
  minSpan = createSpan("Min");minSpan.parent(sliderDiv);

  slider = createSlider(0, 100, 50, 1);
  slider.parent(sliderDiv);

  maxSpan = createSpan("Max");maxSpan.parent(sliderDiv);

  canvas.mousePressed(drawSplatter);
  canvas.parent(canvasDiv);

  // create slider UI

  // create button UI
  buttonDiv = createDiv();
  clearButton = createButton("Clear Canvas");

  clearButton.mousePressed(function() {
    background(65, 60, 88);
  });

  clearButton.parent(buttonDiv);

}


/******************************************************************************
                              drawSplatter()

  Creates ellipses on the canvas around where the mouse is clicked.

  Details:
   -The function creates between 10 and 14 ellipses (random).
   -Each ellipse will be a random color and have no outline.
   -Each ellipse will have a random width (5 to 14 pixels).
   -Each ellipse's x and y values are calculated like this:
     x = random value between mouseX - spread and mouseX + spread
     y = random value between mouseY - spread and mouseY + spread
   -Note that "spread" is accessed through the value of the slider:
     slider.value()
*******************************************************************************/

function drawSplatter(){
  let ellipses = random(10, 15);
  let spread = slider.value();

  fill(random(100, 256), random(100, 256), random(100, 256));
  noStroke();

  for(let i = 0; i < ellipses; i++) {

  let randomSize = random(5, 15);

  let randomX = random(mouseX - spread, mouseX + spread + 1);

  let randomY = random(mouseY - spread, mouseY + spread + 1);

  ellipse(randomX, randomY, randomSize);
  
  }
  

}
