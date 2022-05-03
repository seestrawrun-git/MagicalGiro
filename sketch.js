const numImgs = 4,
imgs = [];
let currentImg = 0;
let previousInstruction = '';
let instructiontext = '';
let myFont;

let musica;
let musicb;
let musicc;


let serial; 
let instruction;
let poof;
let star;
let title;
let diamond;

// // timer stuffß
// let timer = 5000;
// let nextChange = timer;

function setup(){
  createCanvas(400,400)
}


function preload() {
  imgs[0] = loadImage('Title.gif');
  imgs[1] = loadImage('Poof.gif');
  imgs[2] = loadImage('Star.gif');
  imgs[3] = loadImage('Diamond.gif');
  imgs[4] = loadImage('Circle.gif');

  musica = loadSound('a.wav');
  musicb = loadSound('b.wav');
  musicc = loadSound('c.wav');

  myFont = loadFont('SpaceMono.ttf')

}




function setup() {
  createCanvas(windowWidth, windowHeight);

  textFont(myFont);
  
 
  colorMode(HSB);
  background(317, 26, 98);

  scale = width/20;

  serial = new p5.SerialPort();
  serial.open("/dev/tty.usbmodem2101");
  serial.on("data", gotData);
  serial.on("open", gotOpen);

  musica.setVolume(0.0);
  musica.loop();

  musicb.setVolume(0.0);
  musicb.loop();

  musicc.setVolume(0.0);
  musicc.loop();
  
}

function draw() {
    console.log(instruction);
    background(317, 26, 98);
    textSize(24);
    textAlign(CENTER);

    // if(instruction == 'r' && previousInstruction != 'r') {
    //   if (currentImg < imgs.length - 1) currentImg++;
    // } else if(instruction == 'l' && previousInstruction != 'l') {
    //   if (currentImg > 0) currentImg--;
    // }
// playStar(); 


// switch(instruction) {
// case a:
//   console.log("hey");
//   playPoof();
//   break;

//   case b: 
//   playTitle();
//   break;

//   case c:
//   playDiamond();
//   break;

//   case d: 
//   playStar();
//   break;

//   default:
//   text("here's the thing", width/2, height/2);
//   console.log("I am error");
//   break;

// }

if(instruction == 'l') {
  decrease();
}

if(instruction == 'r') {
  increase();
}


// if(instruction != previousInstruction) {
//   if(instruction == 'a') {
//     playTitle();
//   } else if (instruction == 'b') {
//     playPoof();
//   } else if (instruction == 'c') {
//     playDiamond();
//   } else if (instruction == 'd') {
//     playStar();
//   }
// }
  
// if(currentImg == 0) {
//   instructiontext = "Welcome";
// } else if(currentImg == 1) {
//   instructiontext = "Do a Cross";
// } else if(currentImg == 2) {
//   instructionText = "Do a Diamond";
// } else if (currentImg == 3) {
//   instructionText = "Do the Wave!";
// }

switch(currentImg) {
  case 0:
    instructiontext = "Gesture the Device \n to the left or right to swap option";
    break;

    case 1:
    instructiontext = "Do a Cross";
    break;

    case 2:
    instructiontext = "Do a Diamond!";
    break;

    case 3:
    instructiontext = "Do a Circle"
    break;

    case 4:
    instructiontext = "Do a Wave!";
    break;
}

if(currentImg == 1 && instruction == 'a') {
  instructiontext = "Sick Cross";
  musica.setVolume(0.3);

}

if(currentImg == 2 && instruction == 'b') {
  instructiontext = "Whoa, cool Diamond";
  musicb.setVolume(0.3);
}

if(currentImg == 3 && instruction == 'c') {
  instructiontext = "Sick Circle";
  musicc.setVolume(0.3);
}

if(currentImg == 4 && instruction == 'd') {
  instructiontext = "Nice WAVES!"
  musica.setVolume(0.0);
  musicb.setVolume(0.0);
  musicc.setVolume(0.0);
}
 
    
fill(20,0,100);
  text(instructiontext, width/2, height/5);
  

  image(imgs[currentImg], width/2 - 150, height/3);
  console.log(currentImg);
  previousInstruction = instruction;
}

 

function increase() {
  if(instruction != previousInstruction){
  if (currentImg < imgs.length - 1) currentImg++;
  }
}

function decrease() {
  if(instruction != previousInstruction) {
  if (currentImg > 0) currentImg--;
  }
}



   //serial stuff
// format incoming data
function gotData() {

  
  let currentString = serial.readLine(); 
  trim(currentString); 
  if (currentString.length > 0 && currentString != 'nodata'){
    // if(previousInstruction != instruction) {

    // }
  instruction = currentString;
  console.log(currentString);
 
// // reset timer
// nextChange = millis() +timer;
// console.log(`time elapsed: ${round(millis() / 5000)}`)
//   }
  }
}

function gotOpen() {
  print("Serial Port is Open");
  serial.clear(); 
}





