//async javascript

// const sendData = (url) => {
//     let randomDelay = Math.floor(Math.random() * 4000) + 500;
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(randomDelay > 3000) {
//                 reject('Error timeout');
//             }
//             resolve('data received!');
//         },randomDelay)
//     })
// }

// sendData("/dog/theme")
//     .then((data) => {
//         console.log("it worked!");
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log("it failed!");
//         console.log(err);
//     })

    //how many keys will appear in this array of objects

const manykeys = [
    {
        eyes: "brown",
        hair: "brown",
    },
    {
        eyes: "blue",
        hair: "red",
    },
    {
        eyes: "green",
        hair: "blonde",
    },
    {
        eyes: "brown",
        hair: "black",
    },
    {
        eyes: "hazel",
        hair: "blonde",
    },
    {
        eyes: "blue",
        hair: "black",
    },
    {
        eyes: "green",
        hair: "blonde",
    }
];




    let objectHairColor = manykeys.reduce((total, currHair) => {
        let count = 0;
        if(total.has(currHair.hair)){
            count = total.get(currHair.hair);
        }
        total.set(currHair.hair, count + 1);
        return total;
    }, new Map)
    


    let objectHairColor1 = manykeys.reduce((total, currHair) => {
        if(total[currHair.hair]){
            total[currHair.hair]++;
        }else{
        total[currHair.hair] = 1;
        }
        return total;
    }, {})

    // make a function that gets the indexs of two numbers from an array that adds up to a given number

    let twoSum1 = (array, sum) => {
        let sumMap = new Map();

        array.forEach((element, index) => {
            sumMap.set(element, index)
        });

        for(let i = 0; i < array.length; i++){
            let firstKey = sum - array[i];
            if(sumMap.get(firstKey) !== undefined && sumMap.get(firstKey) !== i){
                return [i, sumMap.get(firstKey)];
            }
        }
    }

    // let threeSum = (array, sum) => {
    //     let sumMap = new Map();

    //     array.forEach((element, index)=> {
    //         sumMap.set(element, index);
    //     });

    //     for(let i = 0; i < array.length; i++){
    //         for(let j = 1; j < array.length; j++){
    //             firstKey = sum - array[i];
    //             secondKey = sum - array[j];
    //             if(firstKey !== undefined && secondKey !== undefined && firstKey !== i &&
    //                 secondKey !== i){
    //                     return [j, sumMap.get(firstKey), sumMap.get(secondKey)];
    //             }
    //         }
    //     }
    // }


//trunicate string

const trunicate = (str, num) => {
    if(str.length == 0){
        return 0;
    }
    if(str.length > num){
      return str.slice(0, num);
    }
    return str;
}


//trunicate array
const trunicateArray = (numArray, maxNum) => {
    if(numArray.length == 0){
        return 0;
    }
    if(numArray.length > maxNum){
        return numArray.slice(0, maxNum);
    }

    return numArray;
}

//find the longest word in a string


function findLongestWord(word) {
let splitArray = word.split(" "); // split the word by spaces and put into an array
let maxWord = 0; // . keep track globally of the word length
let actualWord = "" // the actual word

for(let i = 0; i < splitArray.length; i++){ // loop through the split array
    if(splitArray[i].length > maxWord){ // if the word length in the array is greater than max word
        maxWord = splitArray[i].length; // set max word to the splitArray[i].length
        actualWord = splitArray[i]; // set actualWord to the element
        }
    }
    return `The biggest word is ${actualWord} and the length is: ${maxWord}`;
}

//split can only be use done strings

