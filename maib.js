'use strict'
//declare var
const player0El=document.querySelector('.player--0');
const player1El=document.querySelector('.player--1');

const score0EL=document.querySelector('#score--0');
const score1EL=document.querySelector('#score--1');
const current0El=document.getElementById('current--0');
const current1El=document.getElementById('current--1');

const diceEl=document.querySelector('.dice');
const btnNew=document.querySelector('.btn--new')
const btnRoll=document.querySelector('.btn--roll')
const btnHold=document.querySelector('.btn--hold')

const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent =0;
    currentScore = 0;
    activePlayer= activePlayer=== 0 ? 1:0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');

};
let scores ,currentScore, activePlayer , playing;
const init=function(){
    
    
    scores=[0,0];
     currentScore=0;
     activePlayer=0;
        playing=true;
    
    score0EL.textContent=0;
    score1EL.textContent=0;
    current0El.textContent=0;
    current1El.textContent=0;

    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player0El.classList.remove('player--active');
};
// start conditions
init();
// rolling fice functionality
btnRoll.addEventListener('click',function(){
    if(playing){
        const dice = Math.trunc(Math.random()*6)+1;
        diceEl.classList.remove('hidden');
        diceEl.src=`dice-${dice}.png`;
        if(dice!==1){
            // add dice to the cur-score;
            currentScore+=dice;
            document.getElementById(`current--${activePlayer}`).textContent =currentScore;

        }
        else{
            switchPlayer();
        }
    }
    
});
btnHold.addEventListener('click',function(){
    if(playing){
        scores[activePlayer]+=currentScore;
        document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];
    
        if(scores[activePlayer]>100){
            playing=false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        }
        else{
            switchPlayer();
        }

    }
    
});
btnNew.addEventListener('click',init);