let birdImage;
let pipeImage;

let bird;
let pipes = [];

async function setup() {
  createCanvas(740, 525);
  fundo = await loadImage('meu zoio.jpg');
  birdImage = await loadImage('bird.png');
  pipeImage = await loadImage('pipe.png');
  
  bird = new Bird(25,width/2,birdImage);
  pipes.push(new Pipe(width,pipeImage));
}

function draw() {
  background(fundo);
  bird.exibir();
  bird.update();

  if (frameCount % 200 === 0) {
  pipes.push(new Pipe(width, pipeImage));
}

  for(let pipe of pipes){
    pipe.exibir();
    pipe.update();

    if(bird.colidiu(pipe)){
      noLoop();
    }
  }
}

function keyPressed(){
  if(key === ' '){
    bird.up();
  }
}