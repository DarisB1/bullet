import './style.css'

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const range = document.querySelector("input[type='range']");
const randomNumber = document.getElementById("random");
let score = document.getElementById("score");
randomNumber.textContent = getRandomInt(101)


range.addEventListener('input', (e) => {
  console.log(e.target.value);
  if (range.value === randomNumber.textContent) {
    score.textContent = 5;
  }else if(range.value - randomNumber.textContent > 6 || randomNumber.textContent - range.value  < 6){
    score.textContent = 2;
  }else{
    score.textContent = 0;
  }
});
