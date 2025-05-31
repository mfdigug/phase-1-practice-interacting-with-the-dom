document.addEventListener("DOMContentLoaded", () => {
// declare variables
let counter = document.getElementById('counter'); //=> counter = string
let intervalId;
let pause = document.getElementById('pause')
let isPaused = false;

//function for setInterval that loads when page loads
function startCounter(){
if (isPaused)
    isPaused = false;
    intervalId = setInterval(updateCounter, 1000)
}
startCounter()


//counter function as callback to setInterval that increments the counter
function updateCounter(){
let updatedNumber = parseInt(counter.innerText, 10)
updatedNumber++
counter.innerText = updatedNumber.toString();
return counter;
}


//add event listener to pause button which alters 'isPaused' variable
pause.addEventListener("click", () => {
    isPaused = !isPaused;
    pauseCounter();
})

//function called when pause button is clicked
function pauseCounter(){
    if (isPaused) {
    isPaused = true;
    clearInterval(intervalId);
    pause.innerText = 'resume'
    } else {
    pause.innerText = 'pause'
    updateCounter()
    startCounter()
    }
}   

// minus counter button & cb function

let minus = document.getElementById('minus')
minus.addEventListener("click", minusButton);

function minusButton() {
let updatedNumber = parseInt(counter.innerText, 10)
updatedNumber-=1;
counter.innerText = updatedNumber.toString();
return counter;
}

//  plus counter button & cb function

let plus = document.getElementById('plus')
plus.addEventListener("click", plusButton)

function plusButton() {
let updatedNumber = parseInt(counter.innerText, 10)
updatedNumber+=1;
counter.innerText = updatedNumber.toString();
return counter;
}

//  <button id='heart' > ❤️ </button>

let heart = document.getElementById('heart')
heart.addEventListener("click", () =>
    console.log("liked")
)

// const timesLiked = event?
// const likes = document.getElementsByClass("likes")
// add ul.append(li) => li `${counter.innerText} has been liked` + <span> `${times liked}` </span> "time"
// if/else 'time' v 'times




//form input  id="comment-input"
//submit
});