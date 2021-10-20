//choose rock paper or scissors for both players
//count and displays wins for both players
//p2 is computer - randomly chooses 
//rock and rock = draw
//paper and paper = draw
//scissors and scissors = draw

//paper and rock = p1 wins
//scissors and paper = p1 wins
//rock and scissors = p1 wins

//rock and paper = p2 wins
//paper and scissors = p2 wins
//scissors and rock = p2 wins

//write function computerPlay that will randomly choose between rock paper scissors
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const pScore = document.querySelector('#pScore');
const comScore = document.querySelector('#comScore');
const h3 = document.createElement('h3');
let playerChoice = "rock";
let comCounter = 0;
let pCounter = 0;


rock.addEventListener('click', function () {
    playerChoice = "rock";
    computerPlay();
    console.log(playerChoice);
    console.log(comChoice)
    game(playerChoice, comChoice); 
    pScore.textContent = pCounter;
    comScore.textContent = comCounter;
    h3.innertext = '';
    
    
})
paper.addEventListener('click', function () {
    playerChoice = "paper";
    computerPlay();
    console.log(playerChoice);
    console.log(comChoice)
    game(playerChoice, comChoice);
    pScore.textContent = pCounter;
    comScore.textContent = comCounter;
})
scissors.addEventListener('click', function () {
    playerChoice = "scissors";
    computerPlay();
    console.log(playerChoice);
    console.log(comChoice)
    game(playerChoice, comChoice);
    pScore.textContent = pCounter;
    comScore.textContent = comCounter;
})

// let p1Choice = "rock";

let comChoice = "rock";
function computerPlay() {
    const randNum = Math.floor(Math.random() * 3);
    if (randNum  === 1) {
        comChoice= "rock";
    }
    else if (randNum  === 2) {
        comChoice= "paper";
    }
    else if (randNum  === 3) {
        comChoice= "scissors";
    }
}


function game(p1, com) {
    //console.log("lol");
    // const p1Choice = prompt(`Enter 'rock', 'paper', or 'scissors'`);
    // computerPlay();
    if(playerChoice=="paper" &&comChoice=="paper"){
        
        h3.innerText="It's a tie!";
        document.querySelector('#result').append(h3);
        //h3.remove();
        }
       else if(playerChoice=="scissors"&&comChoice=="scissors"){
        
        h3.innerText="It's a tie!";
        document.querySelector('#result').append(h3);
        //h3.remove();
        }
        
        else if(playerChoice=="rock"&&comChoice=="rock"){
            
            h3.innerText="It's a tie!";
        document.querySelector('#result').append(h3);
        //h3.remove();
        }
        
       else if(playerChoice=="paper"&&comChoice=="rock"){
        
        h3.innerText="You won! Paper beats rock.";
        document.querySelector('#result').append(h3);
        pCounter++;
        //h3.remove();
        }
        else if(playerChoice=="scissors"&&comChoice=="paper"){
        
        h3.innerText="You won! Scissors beats paper. ";
        document.querySelector('#result').append(h3);
        pCounter++;
        //h3.remove();
        }
        
       else if(playerChoice=="rock"&&comChoice=="scissors"){
       
        h3.innerText="You won! Rock beats scissors";
        document.querySelector('#result').append(h3);
        pCounter++;
        //h3.remove();
        }
        
        else if(playerChoice=="rock"&&comChoice=="paper"){
          
            h3.innerText="You lost! Paper beats rock.";
            document.querySelector('#result').append(h3);
        comCounter++;
        //h3.remove();
        }
        else if(playerChoice=="paper"&&comChoice=="scissors"){
        
        h3.innerText="You lost! Scissors beats paper.";
        document.querySelector('#result').append(h3);
        comCounter++;
        //h3.remove();
        }
        
        else if(playerChoice=="scissors"&&comChoice=="rock"){
        
        h3.innerText="You lost! Rock beats scissors";
        document.querySelector('#result').append(h3);
        comCounter++;
        //h3.remove();
        }
        
   
        
}
