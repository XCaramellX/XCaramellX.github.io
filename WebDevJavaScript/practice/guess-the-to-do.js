const todoArray = ["Dog Walk!", "Go Shopping!", "Fix fence!","Do laundry!","Rest :)"];

let randomTodo = todoArray[Math.floor(Math.random() * todoArray.length)];
let guessedTodo = todoArray[document.getElementById("guess").value - 1];
const button = document.getElementById("guessButton");



function todoGame(){
    if(guessedTodo !== randomTodo || Number.isNaN(guessedTodo) || guessedTodo > 4){
        return document.getElementById("result").innerHTML = `Oops! Try again! ${guessedTodo}`;
    }

   return document.getElementById("result").innerHTML = `Congrats, it was ${randomTodo}`;

  
}


button.addEventListener('click', todoGame);

