window.onload = function () {
    const guessPiece = document.getElementsByClassName('piece');

    // guessPiece is a collection of elements. If we want to bind to each individual element
    // we need to loop through them and attach an event listener to each one

    for (let index = 0; index < guessPiece.length; index++) {
        const element = guessPiece[index];
        element.addEventListener("click", colourToggle);
    }
}
//start of target array
var target = document.getElementsByClassName("targetPiece");
target.array.forEach(element => {
    
    
});
var colours = ["red", "green", "blue", "yellow" ,"purple", "white"];
function colourToggle(event) {
    var element = event.target;
    
    var currentColour = element.classList[1]; // [0] will be piece, [1] will be colour
    
    var index = colours.indexOf(currentColour);
    index++; // next element in the array
    
    
    if(index > 5) {
      index = 0;
    }
    
    element.classList.remove(currentColour);
    element.classList.add(colours[index]);
    
  }

