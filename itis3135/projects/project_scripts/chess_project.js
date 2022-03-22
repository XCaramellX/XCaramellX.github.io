
/* id variables */
var kingButton = document.getElementById("king");
var kingModal = document.getElementById("kingmodal");

var queenButton = document.getElementById("queen");
var queenModal = document.getElementById("queenmodal");

var bishopButton = document.getElementById("bishop");
var bishopModal = document.getElementById("bishopmodal");

var knightButton = document.getElementById("knight");
var knightModal = document.getElementById("knightmodal");

var castleButton = document.getElementById("castle");
var castleModal = document.getElementById("castlemodal");

var pawnButton = document.getElementById("pawn");
var pawnModal = document.getElementById("pawnmodal");




window.onclick = function(event)
{
    if (event.target == kingButton)
    {
        kingModal.style.display = "block";
    }

    if (event.target == kingModal)
    {
       
         kingModal.style.display = "none";
  
    }

    if (event.target == queenButton) {
        queenModal.style.display = "block";
    }

    if (event.target == queenModal) {

        queenModal.style.display = "none";

    }


    if (event.target == bishopButton) {
        bishopModal.style.display = "block";
    }

    if (event.target == bishopModal) {

        bishopModal.style.display = "none";

    }

    if (event.target == knightButton) {
        knightModal.style.display = "block";
    }

    if (event.target == knightModal) {

        knightModal.style.display = "none";

    }

    if (event.target == castleButton) {
        castleModal.style.display = "block";
    }

    if (event.target == castleModal) {

        castleModal.style.display = "none";

    }

    if (event.target == pawnButton) {
        pawnModal.style.display = "block";
    }

    if (event.target == pawnModal) {

        pawnModal.style.display = "none";

    }
 
}

