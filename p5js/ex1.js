//Variáveis tipo let nomeDaVar;

function setup() { //código que só corre uma vez

  ///Não Apagar para Baixo até <<<
  var canvasDiv = document.getElementById('ex1');
  var width = canvasDiv.offsetWidth;
  var sketchCanvas = createCanvas(width,width*.75);
  console.log(sketchCanvas);
  sketchCanvas.parent('ex1');
  ///<<< Não fica a faltar createCanvas


}

  let numDiv;

function setup() {
  createCanvas(400, 400);

function draw() {
  background( 184, 186, 248 );
  numDiv = 8;//map(mouseX,0,width,5,50);

  for (i = 0; i < numDiv-1; i++){
    for (j = 0; j <numDiv-1; j++){
      avatar((i+1)*width/numDiv,(j+1)*height/numDiv, 25);

    }
  }
}


function avatar(posX, posY, diam){
  fill(0)
  ellipse(posX+diam/70,posY-diam/4,diam/1);
   fill( 35, 38, 144 )
  ellipse(posX-diam/4,posY-diam/50,diam/1);
    ellipse(posX+diam/4,posY-diam/50,diam/1);
    fill( 75, 221, 161 )
  ellipse(posX+diam/90,posY+diam/2,diam/2);
    fill(245, 196, 166)
  ellipse(posX,posY,diam);
      fill(250)
  ellipse(posX-diam/4,posY-diam/5,diam/5);
  ellipse(posX+diam/4,posY-diam/5,diam/5);
  fill(20)
  ellipse(posX-diam/4,posY-diam/5,diam/20);
  ellipse(posX+diam/4,posY-diam/5,diam/20);
      fill(222, 160, 121)
  ellipse(posX+diam/20,posY-diam/80,diam/6);
      fill(221, 81, 4)
  ellipse(posX-diam/40,posY+diam/4,diam/9);
  fill(222, 160, 121)
  ellipse(posX+diam/3,posY+diam/2,diam/7);
  ellipse(posX-diam/3,posY+diam/2,diam/7);
      fill(0)
  ellipse(posX+diam/6,posY+diam-8,diam/6);
  ellipse(posX-diam/6,posY+diam-8,diam/6);


}


}
