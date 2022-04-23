
/*Chess image buttons and modals */




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

/*Chess close buttons*/

var kingCloseButton = document.getElementById("king-close");
var queenCloseButton = document.getElementById("queen-close");
var bishopCloseButton = document.getElementById("bishop-close");
var knightCloseButton = document.getElementById("knight-close");
var castleCloseButton = document.getElementById("castle-close");
var pawnCloseButton = document.getElementById("pawn-close");







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

    if (event.target == kingCloseButton)
    {
        kingModal.style.display = "none";
    }

    /*queen*/

    if (event.target == queenButton) {
        queenModal.style.display = "block";
    }

    if (event.target == queenModal) {

        queenModal.style.display = "none";

    }

    if (event.target == queenCloseButton)
    {
        queenModal.style.display = "none";
    }

    /*bishop*/

    if (event.target == bishopButton) {
        bishopModal.style.display = "block";
    }

    if (event.target == bishopModal) {

        bishopModal.style.display = "none";

    }

    if (event.target == bishopCloseButton)
    {
        bishopModal.style.display = "none";
    }

    /*knight*/

    if (event.target == knightButton) {
        knightModal.style.display = "block";
    }

    if (event.target == knightModal) {

        knightModal.style.display = "none";

    }

    if (event.target == knightCloseButton)
    {
        knightModal.style.display = "none";
    }

    /*castle*/

    if (event.target == castleButton) {
        castleModal.style.display = "block";
    }

    if (event.target == castleModal) {

        castleModal.style.display = "none";

    }

    if (event.target == castleCloseButton)
    {
        castleModal.style.display = "none";
    }

    /*pawn*/

    if (event.target == pawnButton) {
        pawnModal.style.display = "block";
    }

    if (event.target == pawnModal) {

        pawnModal.style.display = "none";

    }

    if (event.target == pawnCloseButton)
    {
        pawnModal.style.display = "none";
    }


   

}


