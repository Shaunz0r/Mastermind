window.onload = function (){
const guessPiece = document.getElementsByClassName('piece');
guessPiece.onclick = function colorPick()  {
    if (this.style.backgroundColor === '#000326') {
        this.style.backgroundColor = '#f00';
    } else if (this.style.backgroundColor === '#f00') {
        this.style.backgroundColor = '#0f0';
    } else if (this.style.backgroundColor === '0f0') {
        this.style.backgroundColor = '#00f';
    }
    piece.style.backgroundColor = this.style.backgroundColor;
};


}