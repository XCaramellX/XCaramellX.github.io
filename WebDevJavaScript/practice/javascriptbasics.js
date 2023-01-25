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

// const characters = [ 
//     {
//     characterName: 'Wolverine',
//     characterType: 'Hero',
//     catchphrase: "Let's go bub!"
//     },
//     {
//     characterName: 'Storm',
//     characterType: 'Hero',
//     catchphrase: "I am Arakko's Regent!"
//     },
//     {
//     characterName: 'Kurt Wagner',
//     characterType: 'Hero',
//     catchphrase: "Guten tag fraulein!"
//     },
//     {
//     characterName: 'Apocolypse',
//     characterType: 'Villan',
//     catchphrase: "Mortals trespass on tenebrian sanctury!"
//     },
//     {
//     characterName: 'Exodus',
//     characterType: 'Villan',
//     catchphrase: "Do you not belive in the Dark!?"
//     }


// ]

// let heroes = characters.map(function(hero){
//     return `Name: ${hero.characterName}, type: ${hero.characterType}, and their catchphrase: ${hero.catchphrase}`;
// });

// let heroes = characters.map(hero => {
// return `Name: ${hero.characterName}, type: ${hero.characterType}, and their catchphrase: ${hero.catchphrase}`
// })

// let goodHeroes = characters.filter(h => h.characterType.length === 6).map(n => n.catchphrase);

// let goodHeroes = characters.filter(h => {
//     return h.characterType.length === 6;
// }).map(n => {
//     return n.characterName;
// })

const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

// const testMass = [
//     {
//         mass: '100'
//     },
//     {
//         mass: '50'
//     },
//     {
//         mass: '150'
//     }
// ]


//map

// Get an array of all names
let names = characters.map(charactersNames => charactersNames.name);
// Get an array of all heights
let heights = characters.map(charactersHeights => `${charactersHeights.height}cm`);
// Get an array of objects with just name and height properties
let namesAndHeights = characters.map(cNamesAndHeights => ({name: cNamesAndHeights.name, 
    height: cNamesAndHeights.height})); // To make an array of objects using map. Make it
    // the same way you would make a normal object but put parenthsies around.
// Get an array of all first names
let firstNames = characters.map(firstName => firstName.name.split(" ")[0]);

//filter

//get characters with a mass greater than 100
let massGreaterThan100 = characters.filter(over100Mass => over100Mass.mass > 100);

//get characters with a heigh less than 200
let heightLessThan200 = characters.filter(under200 => under200.height < 200);

//get all male characters
let allMale = characters.filter(mGender => mGender.gender === 'male');

//get all female characters 
let allFemale  = characters.filter(fGender => fGender.gender === 'female');


//reduce

//get total mass of all characters
let totalMass = characters.reduce((total, charMass) => total += parseInt(charMass.mass), 0);

//get total height of all the characters
let totalHeight = characters.reduce((total, charHeight) => total += parseInt(charHeight.height), 0);

//get the total number of characters by eye color
let totalCharacterByEyeColor = characters.reduce((total, curEye) => {
   if(total[curEye.eye_color]){
        total[curEye.eye_color]++;
   }else{
      total[curEye.eye_color] = 1;
   }
   return total;
}, {}); // I think I need to understand this more

//Get total number of characters in all the character names
let totalCharactersInNames = characters.reduce((total, charNames) => {
    return total += parseInt(charNames.name.length);
}, 0);

// let massArray = [];

// function newMassArray(someObjectWithMass){
//     let cMass = someObjectWithMass.reduce((total, charMass) => total += parseInt(charMass.mass), 0);
//     massArray.push(cMass);
//     return massArray;
// }



// const priceTest = [9.99, 1.51, 1.50, 7.00];

// const minPriceResult = priceTest.reduce((min, price) => {
//     if(price < min){
//         return price;
//     }

//     return min;
// });


/*****************************************Async Functions*******************/

// const login = async(goodUserName, goodPass) => {
//     if(!goodUserName || !goodPass) {
//         throw "Input Credentials!"
//     }
//     if(goodUserName.length <= 5 && goodPass.length <= 10){
//         return "Accepted Name! and Accepted Pass!";
//     } else {throw "Name length longer than 5 and pass length longer than 10"};
// };

// login("dia", "blader6")
//     .then((resolvedData) => {
//         console.log("Welcome!");
//         console.log(resolvedData);
//     })
//     .catch((errData) => {
//         console.log("Error in logging in!");
//         console.log(errData);
//     })

// const delayedListItemColorChange = (color, delay) => {
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//        let listItem = document.querySelector("ol");
//        listItem.style.color = color;
//        resolve();
//         }, delay)
//     })
// };

// async function colorChange(){
//     await delayedListItemColorChange('blue', 1000)
//     await delayedListItemColorChange('orange', 1000)
//     await delayedListItemColorChange('green', 1000)
//     await delayedListItemColorChange('red', 1000)
//     await delayedListItemColorChange('indigo', 1000)
//     return "Color Change Done!"
// }

// let pinArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// let randomArray = [
//     pinArray[Math.floor(Math.random() * pinArray.length)],
//     pinArray[Math.floor(Math.random() * pinArray.length)],
//     pinArray[Math.floor(Math.random() * pinArray.length)],
//     pinArray[Math.floor(Math.random() * pinArray.length)],
//     pinArray[Math.floor(Math.random() * pinArray.length)],
//     pinArray[Math.floor(Math.random() * pinArray.length)]

// ];
// const idObject = {};

// function idToPin(id){
//     if(id < 1 || id > 6){
//         return "id must be 1-6 inclusive!";
//     }
//     if(idObject[id] === idObject[id]){
//         randomArray = [
//             pinArray[Math.floor(Math.random() * pinArray.length)],
//             pinArray[Math.floor(Math.random() * pinArray.length)],
//             pinArray[Math.floor(Math.random() * pinArray.length)],
//             pinArray[Math.floor(Math.random() * pinArray.length)],
//             pinArray[Math.floor(Math.random() * pinArray.length)],
//             pinArray[Math.floor(Math.random() * pinArray.length)]
        
//         ];
//         idObject[id] = randomArray.join(' ');
//     }
    
//     console.log(idObject);
//     return `The ID is ${id} and your PIN is ${idObject[id]}`;
// }

// const golfNames = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

// let golf = {};

// function golfScore(par, strokes){
    
//     golf[par] = golfNames[strokes-1];
    

//     return golf;
// }

// let numberArray = [3, 2, 4];


// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */


// let twoSum = function(nums, target) {
//     let newArray = [];
//     for(let i = 0; i < nums.length; i++){
//         console.log(`this is i: ${i}`);
//         for(let j = i + 1; j < nums.length; j++){
//             console.log(`this is j: ${j}`);
//         if(nums[i] + nums[j] === target){
//             newArray.push(i, j);
//         }
//         }
//     }
//     return newArray;
// };

// two sum redone

let numberArray = [6,9,5,7,8,3];

const newObject = {};
let twoSum = (nums, target) => {


    nums.forEach((value, index) => newObject[value] = index); // put each value as a key 
    //and the index as a value

    for(let i = 0; i < nums.length; i++){
        
       const key = target - nums[i];
        if(newObject[key] !== undefined && newObject[key] !== i){
            return[i, newObject[key]];
        }
        
    }
    
};


// function reverseString(str) {
//     let newString = "";
//     for(let i = str.length - 1; i >= 0; i--){
//      newString += str[i];
//     }
//     return newString;
//   }
  
  // remeber you can get the index of a string
  // you can also make a new string to put the reversed string in there.

//   function truncateString(str, num) { // removes parts of a string accourding to the number
//     if(str.length > num){
//         return str.slice(0, num).concat("...");
//     }
//     return str;
//   }
  
// function remainder (num) {
//     return num % 2 === 0;
// }

// function findElement(arr, func) {
//     let num = 0;
//     for(let i = 0; i < arr.length; i++){
//       num = arr[i];
//       if(func(num)){
//         return arr[i];
//       }
//     }
//     return undefined;
//   } // when passing a function with a parameter to another function, as long as
  // you have something to give as a parameter it will work.

// /**
//  * @param {number} x
//  * @return {boolean}
//  */
//  let isPalindrome = function(x) {
//     let paliString = x.toString();
//     let paliStringReverse = paliString.split("").reverse().join('');

//         if(paliString === paliStringReverse){
//             return true;
//         }
            

//     return false;
// };





/************************************************************************************/


// const isPrime = (n) => {
//     for(let i = 2; i < n; i++){
//         console.log(`This is ${i}`);
//         if(n%i === 0){
//             return false;
//         }
//     }
    
//     return true;
// }

// let primesUpToNum = (n) => {
//     let primeArray = [];
//     for(let i = 2; i < n; i++){
//         if(isPrime(i)){
//         primeArray.push(i);
//         };   
//     }
//     return primeArray;
// }



// function factorialize(num) {
//     let factorial = 0;
//     if(num === 0){
//       return 1;
//     }
    
//       factorial = num * factorialize(num - 1);
//     return factorial;
//   }
  
//   factorialize(5);

  let numArray = [9,35,78,90,40,49,30,20];

  let keyValueArray = [];
  const numMap = new Map();

  let mapMatchValue = (arrayOfNum) => { //using map to match the elements of a passed in array to a
    //given array

  
    numArray.forEach((num, index) => {// use for each on the given array to gives the map it's
        //elements as keys and it's index as values
    numMap.set(num, index);
    
    })

    for(let i = 0; i < arrayOfNum.length; i++){ //loop through passed in array
    if(numMap.has(arrayOfNum[i])){// 
        keyValueArray.push(numMap.get(arrayOfNum[i]), arrayOfNum[i]);
        
        }
    }
  return keyValueArray;
}


//how many words appear in this array:

let wordArray = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";

const wordMap = new Map;

let splitWord = wordArray.split(" ");

let countWord = () => {
    splitWord.forEach((word) => {
    let count = 0;
    if(wordMap.has(word)){
      count = wordMap.get(word)
    }
    wordMap.set(word, count + 1);
    
    })
    return wordMap;
};

function findLongestWordLength(str) {
    let words = str.split(' ');
    let maxLength = 0;
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
      }
    }
  
    return maxLength;
  }

  let sortingArray = [8,0,9,4,3];

  sortingArray.sort((a,b) => a - b);