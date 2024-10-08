let guessField=document.querySelector(".guessField");
let guessNo=document.querySelector(".guessNo")
let button=document.querySelector(".btn")
let res=document.querySelector(".res")
let turn=document.querySelector(".chances");

button.addEventListener("click",check);
let count=1;

function check(){
    const userGuess=Number(guessField.value);
    let randomNo=Math.floor(Math.random()*100)+1;

    if(userGuess===randomNo){
        guessNo.textContent=randomNo;
        res.textContent="Congratulations!!! You guessed the correct no.";
        setGameOver();
    }
    else if(count===10){
        guessNo.textContent=randomNo;
        res.textContent="!!!Game Over";
        setGameOver();
    }
    else{
        guessNo.textContent=randomNo;
        res.textContent="Wrong Guess!!!";
        if(userGuess<randomNo) res.textContent+=" Try a higher number.";
        else res.textContent+=" Try a lower number.";
    }
    turn.textContent=10-count;
    count++;
    guessField.value="";

}

function setGameOver(){
    guessField.disabled=true;
    button.disabled=true;
    // guessNo.textContent="";
    resetBtn=document.createElement("button");
    resetBtn.textContent="Start a new Game";
    document.body.append(resetBtn);
    resetBtn.classList.add('resetBtn')
    resetBtn.addEventListener("click",reset);
}

function reset(){
    guessField.disabled=false;
    button.disabled=false;
    res.textContent="";
    count=0;
    resetBtn.parentNode.removeChild(resetBtn);
    randomNo=Math.floor(Math.random()*100)+1;
    turn.textContent=10;
}
