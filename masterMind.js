var colours = ["red", "green", "blue", "yellow", "purple", "white"]; // moved this to the top. Stylistic preference, but I like globals at the top so I know what is in there

window.onload = function () {
  const guessPiece = document.getElementsByClassName('piece');

  // guessPiece is a collection of elements. If we want to bind to each individual element
  // we need to loop through them and attach an event listener to each one

  for (let index = 0; index < guessPiece.length; index++) {
    const element = guessPiece[index];
    element.addEventListener("click", colourToggle);
  }

  //start of target array
  // initally moved the target piece inside of the onload function
  // try to avoid "floating" code (i.e. code that isn't in a function)
  // you'll end up in a mess as some code will be global, others won't
  
  // target.forEach(element => { }); // this will error. Fun little JS detail, a collection isn't considered an array, thus does not have the forEach method on it
  // moved this to a function for generally neater code
  createTargetPieces();
} 


function colourToggle(event) {
  var element = event.target;

  var currentColour = element.classList[1]; // [0] will be piece, [1] will be colour

  var index = 0;
  if (currentColour !== undefined) { // validating whether the colour is set (by default, this will be undefined)

    var index = colours.indexOf(currentColour);
    index++; // next element in the array

    if (index > colours.length - 1) { // validated against array length, so this auto-scales with array size (-1 because arrays are 0 based)
      index = 0;
    }

    element.classList.remove(currentColour);
  }

  element.classList.add(colours[index]);

}

function createTargetPieces() {
  var target = document.getElementsByClassName("targetPiece");

  ///////////////////////////////////////////////////////////////////////
  //  TO DO:                                                           //
  //  1. Loop through each item in the target array                    //
  //  2. Generate a set colour for the piece from the colours array    //
  //  3. Add piece to a collection so you can reference it later       //
  //  4. ???                                                           //
  //  5. Profit                                                        //
  ///////////////////////////////////////////////////////////////////////            
}
