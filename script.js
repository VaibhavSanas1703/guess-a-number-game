
let userNumber = document.getElementById('userNumber');
let btn = document.getElementById('submitBtn');
let restartBtn = document.getElementById('restart');
let hiddenBtn = document.getElementById('hiddenbtn');

let error = document.getElementById('error');
let result = document.getElementById('result');
let chancesLeft = document.getElementById('chances');
// Chances left
let count = 5;
// GENRATED A WIN NUMBER
const winNumber = Math.floor(Math.random() * 50 + 1); 

console.log(winNumber);

// Sounds Effects
let over = new Audio("Over.mp3");
let win = new Audio("Win.mp3");

const restartGame = () => {
   setTimeout(() => {
    error.innerHTML = ''
    userNumber.value = ''
    result.innerHTML = ''
   }, 1800);
    setTimeout(() => {
        let playAgain = confirm('Do you want to play again?')
        if(playAgain){
            window.location.reload()
        }
        else{
            alert('Thank you for playing this game!!')
            window.close();
        }
    }, 1200);
}

const verifyNumber = (userguess) => {
    if(userguess == winNumber){
        result.innerHTML = 'Congratulations!! You are win'
        setTimeout(() => {
            win.play()
          }, 400);
        error.innerHTML = ''
        restartGame();
    }
    else if(userguess != winNumber){
        count--;
        chancesLeft.innerHTML = `${count}`;
        error.innerHTML = 'you are guess wrong number! please try again.'
        if(count == 0){
            userNumber.setAttribute('disabled','')
            btn.setAttribute('disabled','')
            userNumber.value = ''
            error.innerHTML = 'Your chances has left!! Game over'
          setTimeout(() => {
            over.play()
          }, 200);
            btn.style.display = 'none';
            restartBtn.style.display = 'block';
            restartBtn.addEventListener('click',() => {
               restartGame();
            })
        }
    }
}

const checkNumber = (userguess) => {
    if(userguess == ''){
        error.innerText = 'Please enter a number'
        setTimeout(() => {
            error.innerText = ''
        },1800)
    }
    else if(userguess.length >= 3){
        error.innerText = 'Please enter a valid number'
    }
    else if(userguess > 50){
        error.innerText = 'Please guess a number between 1 to 50'
    }
    else{
        verifyNumber(userguess);
    }
}

btn.addEventListener('click',() => {
    userNumber.addEventListener('input',() => {
        if(userNumber.value.length < 1){
            error.innerText = ''
        }
    })
    checkNumber(userNumber.value)
})



