////// factory function

// function diffrentPhrase () {
//     const phraseObject = {};

//     phraseObject.phraseWithGo = 
//     "Kratos: I will never let them go...the darkness consumes all...";

//     phraseObject.phraseWithTakeMe =
//     "Kratos: Good...come with me...";

//     phraseObject.phraseWithResist =
//     "Kratos: Your mind and heart say otherwise, my dear";

//     phraseObject.phraseFunction = function (str = "") {
//         const {phraseWithGo, phraseWithTakeMe, phraseWithResist} = this;
//         const newStr = str.toLowerCase();
//         if(newStr === ""){
//             return "Kratos: Do not fear me my dear...you can speak";
//         }

//         if(newStr.includes("go", 0)){
//            return phraseWithGo;
//         }
//         if(newStr.includes("me", 0) || newStr.includes("have", 0) || newStr.includes("take", 0)){
//             return phraseWithTakeMe;
//          }

//          if(newStr.includes("fight", 0) || newStr.includes("resist", 0)){
//             return phraseWithResist;
//          }
//         return "Kratos: Speak clearly";
//     };

//     return phraseObject;
// }

// let createPhrase = new diffrentPhrase();

// //Constructor Function

// function RandomGivenNumber(num) {
//     this.num = num;
// }

// RandomGivenNumber.prototype.generateNumber = function () {
//     const {num} = this;
//     return Math.floor(Math.random() * num) + 1;
// };

// let myNum = new RandomGivenNumber(9);

// class diffrentPhrase {
//     constructor(str = ""){
//      this.str = str;

//      this.phraseWithGo = 
//         "Kratos: I will never let them go...the darkness consumes all...";
    
//      this.phraseWithTakeMe =
//          "Kratos: Good...come with me...";

//      this.phraseWithResist =
//          "Kratos: Your mind and heart say otherwise, my dear";
//     }
    
    
//     phraseFunction () {
//         const {phraseWithGo, phraseWithTakeMe, phraseWithResist} = this;

//         const newStr = this.str.toLowerCase();
//         if(newStr === ""){
//             return "Kratos: Do not fear me my dear...you can speak";
//         }

//         if(newStr.includes("go", 0)){
//            return phraseWithGo;
//         }
//         if(newStr.includes("me", 0) || newStr.includes("have", 0) || newStr.includes("take", 0)){
//             return phraseWithTakeMe;
//          }

//          if(newStr.includes("fight", 0) || newStr.includes("resist", 0)){
//             return phraseWithResist;
//          }
//         return "Kratos: Speak clearly";

//     }
// }

// let phrase = new diffrentPhrase("Let me go!");

// class extends

// class DesertAnimal {
//     constructor(name, age, habitat){
//         this.name = name;
//         this.age = age;
//         this.habitat = habitat;
//     }

//     nameOfPet(){
//         return `This animal's name is ${this.name}.`;
//     }
// }

// class iguana extends DesertAnimal {
//     constructor(name, age, habitat, food){
//         super(name, age, habitat);
//         this.food = food; 
//     }

//     eat() {
//         return `An iguna eats ${this.food}.`;
//     }
// }

// let petIguana = new iguana("Maggie", 2, "desert", "bugs");


// given a set of users, each with a certain number of points. return the top 10 users by points

let topTenUsers = () => {

    let userObject = [
        {user: "Alex", points: 45},
        {user: "klem", points: 86},
        {user: "r", points: 90},
        {user: "t", points: 40},
        {user: "l", points: 62},
        {user: "n", points: 56},
        {user: "d", points: 39},
        {user: "f", points: 67},
        {user: "w", points: 23},
        {user: "q", points: 70},
        {user: "u", points: 10},
        {user: "p", points: 37},
        {user: "e", points: 94},
        {user: "k", points: 80},
        {user: "z", points: 49}
    ]

    userObject.sort((a,b) => b.points - a.points);

    let userScores = userObject.slice(0, 10);

   

    console.log(userScores.map(users => users.user));
        
    
    
}

// class chess {
//     constructor(king, queen, pawn) {
//         this.king = king;
//         this.queen = queen;
//         this.pawn = pawn;
//     }

//     chessBoard() {
//         console.log("This chess board only has ${this.king}, ${this.queen}, ${this.pawn}. Use them wisely")
//     }
// }

// class queen extends chess {
//     constructor(queen, diagonal, left, right, up, down) {
//     super(queen)
//     this.diagonal = diagonal;
//     this.left = left;
//     this.right = right;
//     this.up = up;
//     this.down = down;
//     }

//     moveDiagonal() {
        
//     }
// }