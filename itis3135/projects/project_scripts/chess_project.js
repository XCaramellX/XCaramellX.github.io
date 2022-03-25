
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


/* Chess Stratagy spans*/

var materialSpan = document.getElementById("material-click");
var materialBox = document.getElementById("material-count-box");

var pieceSpan = document.getElementById("piece-activity-click");
var pieceBox = document.getElementById("piece-activity-box");

var pawnSpan = document.getElementById("pawn-structure-click");
var pawnBox = document.getElementById("pawn-structure-box");

var spaceSpan = document.getElementById("space-hover-click");
var spaceBox = document.getElementById("space-box");

var kingSafetySpan = document.getElementById("king-safety-click");
var kingSafetyBox = document.getElementById("king-safety-box");

var sicilianSpan = document.getElementById("sicilian-defense-click");
var sicilianBox = document.getElementById("sicillian-box");

var frenchSpan = document.getElementById("french-defense-click");
var frenchBox = document.getElementById("french-box");

var ruylopezSpan = document.getElementById("ruy-lopez-opening-click");
var ruylopezBox = document.getElementById("ruy-lopez-box");

var carokannSpan = document.getElementById("caro-kann-defense-click");
var carokannBox = document.getElementById("caro-kann-box");

/*Chess Stratagy Close buttons*/
var materialCloseButton = document.getElementById("material-close-button");
var pieceCloseButton = document.getElementById("piece-close-button");
var pawnStructureCloseButton = document.getElementById("pawn-structure-close-button");
var spaceCloseButton = document.getElementById("space-close-button");
var kingSafetyCloseButton = document.getElementById("king-safety-close-button");

var sicillianCloseButton = document.getElementById("sicillian-close-button");
var frenchCloseButton = document.getElementById("french-close-button");
var ruylopezCloseButton = document.getElementById("ruy-close-button");
var caroCloseButton = document.getElementById("caro-close-button");



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
 
    /*******Basic Concept Boxes********/

    /* material count */

    if(event.target == materialSpan){
        materialBox.style.display = "block";
    }else{
        materialBox.style.display = "none";
    }

    if(event.target == materialCloseButton){
        materialBox.style.display = "none";
    }

    /* piece activity */

    if(event.target == pieceSpan){
        pieceBox.style.display = "block";
    }else{
        pieceBox.style.display = "none";
    }

    if(event.target == pieceCloseButton){
        pieceBox.style.display = "none";
    }

    /* pawn structure*/

    if(event.target == pawnSpan){
        pawnBox.style.display = "block";
    }else{
        pawnBox.style.display = "none";
    }

    if(event.target == pawnStructureCloseButton){
        pawnBox.style.display = "none";
    }

    /* space */
    if(event.target == spaceSpan){
        spaceBox.style.display = "block";
    }else{
        spaceBox.style.display = "none";
    }

    if(event.target == spaceCloseButton){
        spaceBox.style.display = "none";
    }

    /* king safety*/
    if(event.target == kingSafetySpan){
        kingSafetyBox.style.display = "block";
    }else{
        kingSafetyBox.style.display = "none";
    }

    if(event.target == kingSafetyCloseButton){
        kingSafetyBox.style.display = "none";
    }

    /*******Openings*******/

    /* sicilian defense */

    if(event.target == sicilianSpan){
        sicilianBox.style.display = "block";
    }else{
        sicilianBox.style.display = "none";
    }

    if(event.target == sicillianCloseButton){
        sicilianBox.style.display = "none";
    }

    /* french defense */

    if(event.target == frenchSpan){
        frenchBox.style.display = "block";
    }else{
        frenchBox.style.display = "none";
    }

    if(event.target == frenchCloseButton){
        frenchBox.style.display = "none";
    }

    /* Ruy Lopez */

    if(event.target == ruylopezSpan){
        ruylopezBox.style.display = "block";
    }else{
        ruylopezBox.style.display = "none";
    }

    if(event.target == ruylopezCloseButton){
        ruylopezBox.style.display = "none";
    }

     /* Caro Kann */

     if(event.target == carokannSpan){
        carokannBox.style.display = "block";
    }else{
        carokannBox.style.display = "none";
    }

    if(event.target == caroCloseButton){
        carokannBox.style.display = "none";
    }


}


