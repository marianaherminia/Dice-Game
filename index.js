// DOM nodes
const message = document.querySelector('#message');
const player1Dice = document.querySelector('#player1Dice');
const player2Dice = document.querySelector('#player2Dice');
const score1 = document.querySelector('#player1Score');
const score2 = document.querySelector('#player2Score');
const rollBtn = document.querySelector('#btnRoll');
const resetBtn = document.querySelector('#resetBtn');
const container = document.getElementsByClassName('container')

// Game status
let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

function toogleBtns (){
    rollBtn.style.display = "none";
    resetBtn.style.display = "block";
}


function rollDice() {
    // Generate random number
    let number = Math.floor((Math.random() * 6) + 1);
    
    if ( player1Turn ){
        player1Dice.innerText = number;
        player1Score += number;
        score1.innerText = player1Score;
        message.innerText = 'Player 2 Turn';
        player2Dice.classList.add('active');
        player1Dice.classList.remove('active');

        /* if ( number === 1) {
            //number = Math.floor((Math.random() * 6) + 1);
            player2Dice.innerText = number;
            player2Score += number;
            score2.innerText = player2Score;
            message.innerText = 'Player 1 Turn';
            player1Dice.classList.add('active');
            player2Dice.classList.remove('active');
            
            if ( number === 1) {
                message.innerText = "It's a tie! 🥳";
            } else {
                message.innerText = 'Player 2 has won! 🥳';       
            }
            toogleBtns();  
        } */
            
    } else {
        player2Dice.innerText = number;
        player2Score += number;
        score2.innerText = player2Score;
        message.innerText = 'Player 1 Turn';
        player1Dice.classList.add('active');
        player2Dice.classList.remove('active');

        /* if ( number === 1) {
            message.innerText = 'Player 1 has won! 🥳';  
            toogleBtns(); 
        } */
    }

    // Change the player
    player1Turn = !player1Turn;

    // End of the game
    if ( player1Turn && player1Score >= 20 || player2Score >= 20 ){
        if ( player1Score > player2Score ) {
            message.innerText = 'Player 1 has won! 🥳';
        } else if ( player1Score < player2Score ) {
            message.innerText = 'Player 2 has won! 🥳';
        } else {
            message.innerText = "It's a tie! 🥳";
        }

        player1Dice.classList.remove('active');
        player2Dice.classList.remove('active');
        
        toogleBtns();
    }

    /* if ( number === 1) {
        if ( player1Turn ) {
            message.innerText = 'Player 1 has won! 🥳';
        } else {
            message.innerText = 'Player 2 has won! 🥳';
        }     

        player1Dice.classList.remove('active');
        player2Dice.classList.remove('active');

        toogleBtns();
    } */
   

}

function gameReset() {
    player1Score = 0;
    player2Score = 0;
    player1Turn = true;
    message.innerText = 'Player 1 Turn';
    score1.innerText = 0;
    score2.innerText = 0;
    player1Dice.innerText = '-';
    player2Dice.innerText = '-';
    rollBtn.style.display = 'block';
    resetBtn.style.display = 'none';
    player1Dice.classList.add('active');
    player2Dice.classList.remove('active');


}

rollBtn.addEventListener('click', rollDice);

resetBtn.addEventListener('click', gameReset);
