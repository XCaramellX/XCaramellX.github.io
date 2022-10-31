/*
function runH2Text(){
    let text = "Hello";
    document.getElementById("practice").innerHTML = text;
}

window.onload = function(){
    runH2Text();
} 
*/

/* if(1 + 1 === 2) {
    console.log("Math still works!");
}
*/

/* let random = Math.floor(Math.random() * 10) + 1;
if(random < 5){
    console.log("Your Number is less than 5! it is " + random)
    console.log(random);
}
*/

//Example of nested if statements

/*
let isCarParked = prompt("Is your car parked?(yes or no)");

if(isCarParked === "yes"){
    let howIsCarParked = prompt("how is your car parked? (forward or backward)")
    if(howIsCarParked === "forward"){
        console.log("Your car is facing the front");
    }else if(howIsCarParked === "backward"){
        console.log("You car is facing the back");
    }else{
        console.log("Invalid direction!");
    }
}else if(isCarParked === "no"){
    console.log("Park Your Car!");
}else{
    console.log("Please Say yes or no");
} */


/*const candy = {
    type: 'chocolate',
    flavor: 'milk',
    size: 'medium',
    brand: 'Hershey'
}

console.log(candy);

candy.size = 'small';
candy.mixins = 'wafers';
*/

/*for(let i = 0; i <= 30; i++){
    console.log(i);
}*/


// let animals = [
//     ['dog', 'cat', 'rabbit'],
//     ['bear', 'Koala', 'lion'],


// ];

// for(let i = 0; i < animals.length; i++){
//     let numItems = animals[i]; // set animals index according to 'i'
//     for(let j = 0; j < numItems.length; j++){
//         console.log(numItems[j]);
//     }
// }

// for(let animal of animals){
//     for(let names of animal){
//         console.log(names);
//     }
// }

// const candy = {
//     type: 'chocolate',
//     flavor: 'milk',
//     size: 'medium',
//     brand: 'Hershey'
// }

// for(let items in candy){
//     console.log(candy[items]);
// }

// const numberOfCandy = {
//     chocolate: 20,
//     hardCandy: 12,
//     softCandy: 5
// }

// let total = 0;
// let candyAmount = Object.values(numberOfCandy);
// for(let average of candyAmount){
// total += average; 
// }
// console.log(`The average number of candy is ${total/candyAmount.length}`);