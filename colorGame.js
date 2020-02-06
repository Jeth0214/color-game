var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(0, 255, 0)",
    "rgb(255, 0, 255)",
];

var squares = document.querySelectorAll('.square');
var pickedColor = colors[3];
var colorDisplay = document.getElementById('colorDisplay');

// display the color to be pick
colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    //give initial color to squares
    squares[i].style.backgroundColor = colors[i];

    //add event listener to squares;
    squares[i].addEventListener('click', function(){
        //grab color of clicked square
        var clickColor = this.style.backgroundColor;

        //compare colorDisplay to pickedColor
        if(clickColor === pickedColor){
            alert('correct');
        }else {
            alert('wrong')
        }
    })
}