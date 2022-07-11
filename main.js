let pickNum = 0;
let userInput = document.getElementById('user-input')
let resultArea = document.getElementById('result-area')
let chanceArea = document.getElementById('chance-area')
let playBtn = document.getElementById('play-btn')
let resetBtn = document.getElementById('reset-btn')
let imgSrc = document.getElementById('img-src')
let chances = 5
let gameOver = false
let history = []


playBtn.addEventListener('click',play)
resetBtn.addEventListener('click',reset)
userInput.addEventListener('focus',function(){userInput.value=''})

function randomNum(){


    pickNum = Math.floor(Math.random()*100)+1
    console.log('정답은?',pickNum)

}

function play(){
    const userValue = userInput.value

    if(userValue<1 || userValue>100){
        resultArea.textContent = '범위를 벗어난 숫자입니다.'
        resultArea.style.color = '#D90D1E'
        return;
    }

    if(history.includes(userValue)){
        resultArea.textContent = '이미 입력된 숫자입니다.'
        resultArea.style.color = '#D90D1E'
        return;
    }

    chances --;
    chanceArea.textContent = `남은 기회:${chances}번`
    history.push(userValue)

    if(userValue>pickNum){
        imgSrc.src = 'down.webp'
        resultArea.textContent = '숫자를 내려보세요'
        resultArea.style.color = '#000'
        console.log('다운!')
    }else if(userValue<pickNum){
        imgSrc.src = 'up.gif'
        resultArea.textContent = '숫자를 올려보세요'
        resultArea.style.color = '#000'
    }else{
        playBtn.disabled = true
        imgSrc.src = 'happy.gif'
        resultArea.textContent = '정답입니다!'
        resultArea.style.color = '#3382f3'
        playBtn.style.opacity = '0.5'

    }


    if(chances==0){
        gameOver = true
    }

    if(gameOver){
        userInput.value = ''
        playBtn.disabled = true
        imgSrc.src = 'over.gif'
        resultArea.textContent = `Game Over 정답은 ${pickNum}입니다.`
        resultArea.style.color = '#D90D1E'
        playBtn.style.opacity = '0.5'
    }


}

function reset(){
    randomNum();
    userInput.value = ''
    chances =5;
    chanceArea.textContent = `남은 기회:${chances}번`
    resultArea.textContent = '1부터 100까지의 숫자를 입력해보세요'
    resultArea.style.color = '#000'
    imgSrc.src = 'number.gif'
    gameOver = false
    playBtn.disabled = false
    playBtn.style.opacity = '1'
    history = []


}

randomNum();