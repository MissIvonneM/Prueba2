
//Arrays Profe
var proyect = [80,85,95,98,100];


function promedio(){
  var sum = proyect[0]+proyect[1]+proyect[2]+proyect[3]+proyect[4];
  var prom = sum/proyect.length;
  console.log(prom);
}


function setup() {
  createCanvas(400, 400);
  promedio();
}

function draw() {
  background(220);
}

/*Arrays Alumno
var s1,s2,s3,s4;
var sprites = [];

function setup(){
  createCanvas(400, 400);
   s1 = createSprite(75,100,30,30);
   s2 = createSprite(150,250,30,30);
   s3 = createSprite(300,300,30,30);
   s4 = createSprite(350,150,30,30);

   sprites = [s1, s2, s3, s4];

   console.log(sprites[0].position.x);
   console.log(sprites[1].position.x);
   console.log(sprites[2].position.x);
   console.log(sprites[3].position.x);

}

function draw(){
   background(100,200,50);
   drawSprites();
}*/
