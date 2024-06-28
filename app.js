let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const charizard = document.getElementById("charizard");
const blastoise = document.getElementById("blastoise");
const scissors_div = document.getElementById("s");




function getComputerChoice() {
    const choices = ["phanpy", "blastoise", "pikachu", "chikorita", "charizard"];
    const randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber];
    }

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";

}


function win(userChoice, computerChoice){
    
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML= computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord} You win!`;
    const userChoice_div =  document.getElementById(userChoice);
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);

}
    
function lose(userChoice, computerChoice){
 
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML= computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord} You lost... `;
    const userChoice_div =  document.getElementById(userChoice);
    userChoice_div.classList.add('red-glow');
    setTimeout(() =>  userChoice_div.classList.remove('red-glow'), 300);
        
 }
    
function draw(userChoice, computerChoice){
  
    
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div =  document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equeals ${convertToWord(computerChoice)}${smallCompWord} it's a draw! `;
    userChoice_div.classList.add('gray-glow');
    setTimeout(() =>  userChoice_div.classList.remove('gray-glow'), 300);
}

function game (userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "charizardchikorita":
        case "charizardpikachu":
        
        case "phanpycharizard":
        case "blastoisecharizard":
    
        win(userChoice, computerChoice);
        break;

        case "charizardblastoise":
        case "charizardphanpy":
        
    
   
        lose(userChoice, computerChoice);
        break;

    default:   

        draw(userChoice, computerChoice);
        break;
    }
}


function getPikachu(){

    const request = fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    console.log(request);
    
    request.then(function(resp){
        console.log(resp);
        resp.json().then(function(resp2){

            console.log(resp2)
        })
        
    })
    
}
//Async - await
async function getCharizard(){
    const request = fetch("https://pokeapi.co/api/v2/pokemon/charizard");
    const response = await request
    console.log(response);
    const data = await response.json()
    console.log(data);
    changeHTML("charizard",data)
    
    
}

function changeHTML(pokemonName, data){

    const container = document.getElementById(pokemonName);
    const children = container.children; 
    const image = data.sprites.front_default;
    children[0].setAttribute("src", image)
    const name = data.name;
    children[1].innerHTML = name;
    const type = data.types[0].type.name;
    children[2].innerHTML = type;
}

async function getBlastoise(){
    const request = fetch("https://pokeapi.co/api/v2/pokemon/blastoise");
    const response = await request
    console.log(response);
    const data = await response.json()
    console.log(data);
    changeHTML("blastoise",data)
}

async function getPhanpy(){
    const request = fetch("https://pokeapi.co/api/v2/pokemon/phanpy");
    const response = await request
    console.log(response);
    const data = await response.json()
    console.log(data);
}

async function getChikorita(){
    const request = fetch("https://pokeapi.co/api/v2/pokemon/chikorita");
    const response = await request
    console.log(response);
    const data = await response.json()
    console.log(data);
}
   
function main() {

    charizard.addEventListener('click', function() {
         game("charizard");
    })

    blastoise.addEventListener('click', function() {
         game("blastoise");
    })

    // scissors_div.addEventListener('click', function() { 
    //     game("s");
    // })
    
    getCharizard();
    getBlastoise();
    getPikachu();
    getPhanpy();
    getChikorita()

    }



    
main(); 