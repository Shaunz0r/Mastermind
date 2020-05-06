const guessPiece = document.getElementsByClassName('piece');
const targetPiece = document.getElementsByClassName('targetPiece')
let guessPieceColor = guessPiece.style.backgroundColor;
 let colorPick = () => {
    if (guessPieceColor === '#000326') {
        guessPieceColor = '#f00';
    } else if (guessPieceColor === '#f00') {
        guessPieceColor = '#0f0';
    } else if (guessPieceColor === '0f0') {
        guessPieceColor = '#00f';
    }
    piece.style.backgroundColor = guessPieceColor;
};
guessPiece.onclick = colorPick();