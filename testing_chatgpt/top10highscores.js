// Define an array of highscores
const highscores = [
    {name: "Alice", score: 98},
    {name: "Bob", score: 85},
    {name: "Charlie", score: 92},
    {name: "David", score: 67},
    {name: "Eve", score: 75},
    {name: "Frank", score: 88},
    {name: "Grace", score: 78},
    {name: "Heidi", score: 94},
    {name: "Igor", score: 80},
    {name: "Jackie", score: 72},
    {name: "Karl", score: 91},
    {name: "Liam", score: 83},
    {name: "Maggie", score: 76},
    {name: "Nate", score: 89},
    {name: "Olivia", score: 73},
    {name: "Peter", score: 68},
    {name: "Quincy", score: 90},
    {name: "Randy", score: 74},
    {name: "Steve", score: 71},
    {name: "Tina", score: 87},
    {name: "Uma", score: 79},
    {name: "Victor", score: 95},
    {name: "Wendy", score: 82},
    {name: "Xander", score: 96},
    {name: "Yara", score: 93},
    {name: "Zach", score: 99}
];

// Sort the highscores by score in descending order
highscores.sort((a, b) => b.score - a.score);

// Get the top 10 highscores
const top10 = highscores.slice(0, 10);

// Print the names of the top 10 highscores
console.log(top10.map(player => player.name));
