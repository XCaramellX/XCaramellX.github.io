let maxPrompt = parseInt(prompt("Welecome to Guess That Number!, Please type a maximum number to begin!"));

while(!maxPrompt){
    maxPrompt = parseInt(prompt("Enter a valid number please!"));
}

const secretNumber = Math.floor(Math.random() * maxPrompt) + 1;

let guessNumber = parseInt(prompt("Enter Your First Guess!"));

let attempts = 1;
while(parseInt(guessNumber) !== secretNumber){
if(guessNumber === 'q') {
    break;
}
    attempts++;
if(guessNumber < secretNumber){
    guessNumber =  prompt("Number too low, Try again!"); 
}else{
    guessNumber = prompt("Number is too high, Try again!");
} 

}
if(guessNumber === 'q'){
    console.log("Quittng....");
}else{
console.log(`You got the secret number! the secret number was ${secretNumber}, Attempts: ${attempts}`);
}