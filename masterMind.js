window.onload = function () {
    const guessPiece = document.getElementsByClassName('piece');

    // guessPiece is a collection of elements. If we want to bind to each individual element
    // we need to loop through them and attach an event listener to each one

    for (let index = 0; index < guessPiece.length; index++) {
        const element = guessPiece[index];
        element.addEventListener("click", colorPick);
    }

}

function colorPick(event)  {
    // event is automatically passed in to event listeners
    // it contains details on what happened
    // we need to get the current element out of this event, which is conveniently
    // done via the .target property

    console.log("piece clicked!"); // just to show that the event fires when a piece is clicked

    var currentElement = event.target; // gets the current html element from the event (i.e. the one that was clicked)
    var currentElementColour = currentElement.style.backgroundColor; // as a note here, this will be an empty string - do you know why?
    var colourToSet;

    if (currentElementColour === '#000326') {
        colourToSet = '#f00';
    } else if (currentElementColour === '#f00') {
        colourToSet = '#0f0';
    } else if (currentElementColour === '0f0') {
        colourToSet = '#00f';
    }

    currentElement.style.backgroundColor = colourToSet; // ultimately, an undefined value will be assigned to the piece background colour

    // TO DO:
    // Think about where currentElement.style.backgroundColor looks for it's information compared to where you have it
        // Check this page out, it'll help with the above: https://www.w3schools.com/jsref/prop_html_style.asp

};
