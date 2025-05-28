document.addEventListener("DOMContentLoaded", () => {


// update counter
let counter = document.getElementById('counter'); //=> counter = string

function updateCounter(){
let updatedNumber = parseInt(counter.innerText, 10)
updatedNumber++
counter.innerText = updatedNumber.toString();
return counter;
}

setInterval(updateCounter, 1000)    


// <button id='minus' > ➖ </button>
// addeventlistener

let minus = document.getElementById('minus')
minus.addEventListener("click", () =>
    console.log("you clicked me")
)

//callback function to manipulate DOM - when minus is clicked - take counter and minus 1

//  <button id='plus' > ➕ </button>

let plus = document.getElementById('plus')
plus.addEventListener("click", () =>
    console.log("you clicked me too")
)

//  <button id='heart' > ❤️ </button>

let heart = document.getElementById('heart')
heart.addEventListener("click", () =>
    console.log("liked")
)

//  <button id='pause' > pause </button>
let pause = document.getElementById('pause')
pause.addEventListener("click", () =>
    console.log("paused")
)


//clearInterval?


//form input  id="comment-input"
//submit


});