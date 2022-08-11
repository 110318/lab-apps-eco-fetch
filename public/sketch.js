let canvas;
let randomUserURL = 'https://randomuser.me/api/'
let catURL = 'https://catfact.ninja/fact'
let usaURL = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population'
let bitcoinURL = 'https://api.coindesk.com/v1/bpi/currentprice.json'

let modeApi = 0;
let button;
let randomuser = null;
let catfact = null
let usPopulation = null
let bitcoinPrice = null
let petImage = null
let imageData = null
let img = null

function setup() {
    frameRate(60);
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('z-index', '-1');
    canvas.style('position', 'fixed');
    canvas.style('top', '0');
    canvas.style('right', '0');

    button = createButton('Doggo can');
    button.position(0, 0);
    button.mousePressed(showDoggo);

    button = createButton('USer');
    button.position(50, 0);
    button.mousePressed(showUserrandom);

    button = createButton('Cat Facts');
    button.position(80, 0);
    button.mousePressed(catFacts);

    button = createButton('Population USA');
    button.position(140, 0);
    button.mousePressed(usaPopulation);

    button = createButton('Bitcoin');
    button.position(220, 0);
    button.mousePressed(showBitcoin);


   
}

//Random User
async function showUserrandom(){
    fetch(randomUserURL)
    .then(response => response.json())
    .then(data=> {randomuser = data
       console.log(randomuser.results)})
}


//Cat fact
async function catFacts(){
    fetch(catURL)
 .then(response => response.json())
 .then(data=> {catfact = data
    console.log(catfact)})
}


//USA population
async function usaPopulation(){
fetch(usaURL)
.then(response => response.json())
.then(data=> {usPopulation = data
   console.log(usPopulation)})
}

   //dog photos
async function getDoggoImage(){
    let petURL = 'https://dog.ceo/api/breeds/image/random'
    try{
        let response = await fetch(petURL)
        return await response.json()
    }
    catch(error){
        console.log(error)
    }
}

async function showDoggo(){
let doggos = await getDoggoImage();
let dog =[];
dog = new Image();
dog.src=doggos.message
dog.width = "600"
dog.height = "300"
let images = document.getElementsByTagName('img')
let pic = images.length;
if(pic>3){
    for(let p=0;p<1;p++){
        images[0].parentNode.removeChild(images[0])
    }

}
document.body.appendChild(dog)
}

// Bitcoin price
async function showBitcoin(){
fetch(bitcoinURL)
.then(response => response.json())
.then(data=> {bitcoinPrice = data
   console.log(bitcoinPrice)})
}





 /* function petImage(){
  fetch(petURL)
  .then(response => response.json())
  .then(data => {
      img=null
      responseData =null
  })
}
*/
function draw() {
    //background(0, 50);
    background(0);
    newCursor();
    
    if(randomuser != null){
        textSize(20);
        textWrap(WORD)
        text(randomuser.results[0].name.title,50,50,150)
        text(randomuser.results[0].name.first,100,50,100)
        text(randomuser.results[0].name.last,200,50,100)
    }

    if(catfact!= null){
        textSize(20);
        textWrap(WORD)
        text(catfact.fact,50,90,200)
      
    }
  if(usPopulation != null){
    textSize(20);
    textWrap(WORD)
    
    text('2019 POPULATION'+" "+ usPopulation.data[0].Population,50,450,300)
    text('2018 POPULATION'+" "+ usPopulation.data[1].Population,50,500,300)
  }

  if(bitcoinPrice != null){
    textSize(20);
    textWrap(WORD)
    
    text(bitcoinPrice.bpi.USD.code +" "+ bitcoinPrice.bpi.USD.rate,50,600,900)
    
  }
    
}

function mouseClicked(){

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function newCursor() {
    noStroke();
    fill(255);
    ellipse(pmouseX, pmouseY, 10, 10);
}