var numOfSquares = 6;
var colors = [];
var pickedColor = pickColor();
var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#messageDisplay');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var modes = document.querySelectorAll('.mode');

//refactor
init();

function init() {
    setUpModeButton();
    setUpSquares();
    reset();
}

function setUpModeButton() {
    for (var i = 0; i < modes.length; i++) {
        modes[i].addEventListener("click", function () {
            modes[0].classList.remove('selected');
            modes[1].classList.remove('selected');
            this.classList.add('selected');
            //determine the number of square 
            this.textContent === 'Easy' ? numOfSquares = 3 : numOfSquares = 6;
            reset();
        });
    }
};


function setUpSquares() {
    for (var i = 0; i < squares.length; i++) {
        //give initial color to squares
        squares[i].style.backgroundColor = colors[i];

        //add event listener to squares;
        squares[i].addEventListener('click', function () {
            //grab color of clicked square
            var clickColor = this.style.backgroundColor;

            //compare colorDisplay to pickedColor
            if (clickColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                changedColors(clickColor);
                h1.style.backgroundColor = clickColor;
                resetButton.textContent = "Play again?"
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again"
            }
        });
    }
}

function reset() {
    //generate a new random colors
    colors = generateRandomColor(numOfSquares);
    //pick a new random color from colors array
    pickedColor = pickColor();
    //if reset "new color" text appear
    resetButton.textContent = "New Color";
    //change color display to match picked color
    //remove the the "correct" text
    messageDisplay.textContent = "";
    colorDisplay.textContent = pickedColor;
    //change colors of all squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }

    }
    // reset the background color of h1
    h1.style.backgroundColor = "steelblue";
}


//reset if the user click the "play again?" button 
resetButton.addEventListener("click", function () {
    reset()
})



// if the user picked the correct color all Squares background color will be the equal to the picked color
function changedColors(color) {
    //loop through all the squares
    for (var i = 0; i < squares.length; i++) {
        //changed all squares color with the given color
        squares[i].style.backgroundColor = color;
    }
};

//pick color
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);

    return colors[random];
};

//generate random color
function generateRandomColor(num) {
    //make an array
    var arr = [];
    //repeat num times
    for (var i = 0; i < num; i++) {
        //get the created color and push it in array
        arr.push(createColor());
    }
    //return the random color array
    return arr;
};

//create color
function createColor() {
    //pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 255);
    //pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 255);
    //pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 255);

    return "rgb(" + r + ", " + g + ", " + b + ")";
};

