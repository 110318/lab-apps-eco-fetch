let canvas;
let randomUserURL = 'https://randomuser.me/api/'
let catURL = 'https://catfact.ninja//fact'
let usaURL = 'https://datausa.io//api/data?drilldowns=Nation&Measures=Population'
let bitcoinURL = 'https://api.coindesk.com/v1/bpi/currentprice.json'
let petURL = 'https://dog.ceo/api/breeds/image/random'

let respondRandomuser = null;
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



    console.log(fetch(URL).then(response => response.json()))
    //function getRandomuser(){}
    let content  = "Random User\r\n"
    fetch(randomUserURL)
    .then(response => response.json())
    .then(data=> {data.results.forEach(user => {
        content += 'NAME' + user.name.first+ ' '+ user.name.last + '\r\n'

        
    });
        console.log(content.results[0])
    })

    //function petImage(){}
    fetch(petURL)
    .then(response => response.json())
    .then(data => {
        img=null
        responseData =nu
    })
}

function draw() {
    //background(0, 50);
    background(0);
    newCursor();
    if(content != null){
        textSize(20);
        textWrap(WORD)
        text(content.results[0],50,50,100)
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