document.addEventListener("DOMContentLoaded", () => {
// declare variables
let counter = document.getElementById('counter'); //=> counter = string
let intervalId;
let pause = document.getElementById('pause')
let isPaused = false;
let ul = document.querySelector("ul");
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

// append message for number liked

const heart = document.getElementById('heart')
let likeCount = 0
let counterLiked = []

heart.addEventListener("click", (event => {
    likeCount =+1
    let li = document.createElement("li")
    li.setAttribute('data-num' , counter.innerText)
    li.setAttribute('data-liked', likeCount)
    counterLiked.push(li.dataset);
    console.log(counterLiked);
       
    
    li.textContent = `${li.dataset.num} has been liked ${li.dataset.liked} times.`
        ul.appendChild(li);
    }))


   
    //const span = document.createElement("span");
   //dataset?
    

//form input appended to dom
const form = document.getElementById("comment-form")
const commentList = document.getElementById("list")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const newComment = document.createElement("li");
    newComment.innerText = event.target[0].value;
    commentList.appendChild(newComment);
})

})