
function scriptTest()
{
    alert("Hey my script is running!");
}

function textValues()
{
    var a = document.getElementById("formvalues");
    var text = "";
    var i;
    for (i = 0; i < a.length; i++) {
        text += a.elements[i].value + "<br>";
    }
    document.getElementById("tvalues").innerHTML = text;

}

function myTime() {
    const date = new Date();
    document.getElementById("datetime").innerHTML = date;
}

function greetings()
{
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var feeling = document.getElementById("feeling").value;
    document.getElementById("greeting").innerHTML = "Plum Rabbit welcomes you, " + firstname + " " + lastname + "!" + 
    " it seems your feeling " + feeling;
   
}

function add1to5Numbers()
{
    var sumOfNumbers = 0;
    var numberOfLoops = 5;
    for(var i = 0; i <= numberOfLoops; i++){
        sumOfNumbers += i;
    }
    document.getElementById("1to5").innerHTML = sumOfNumbers + " Rabbits";
}

function repeatString()
{
    var a = "Plum Rabbit!" + "<br>";
 
   document.getElementById("rstring").innerHTML = a.repeat(50) ;
 
}

function rabbits()
{
    var firstname = document.getElementById("firstname1").value;
    var lastname = document.getElementById("lastname1").value;
    document.getElementById("rabbit").innerHTML = "Welcome our new rabbit, " + firstname + " " + lastname + "!";

}

function addRabbits()
{
    var number = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;

    var sumNumber = parseInt(number) + parseInt(number2);

    document.getElementById("sumofrabbits").innerHTML = "Total number of rabbits " + sumNumber;
}

function multiplyRabbits()
{
    var number = document.getElementById("number3").value;
    var number2 = document.getElementById("number4").value;

    var multiplyNumber = parseInt(number) * parseInt(number2);


    document.getElementById("multirabbits").innerHTML = "Multiplied Rabbits: " + multiplyNumber;
    
}

function getShape()
{
    var text;
    var sides = prompt("Plum Rabbit would like to know how many sides the shape is", "1");
    validateEntry(sides)
    switch(sides)
    {
        case "1":
            text = "henagon";
            break;
        case "2":
            text = "digon";
            break;
        case "3":
            text = "trigon";
            break;
        case "4": 
            text = "tetragon";
            break;
        case "5":
            text = "pentagon";
            break;
        case "6":
            text = "hexagon";
            break;
        case "7":
            text = "heptagon";
            break;
        case "8":
            text = "octagon";
            break;
        case "9":
            text = "enneagon";
            break;
        case "10":
            text = "decagon";
            break;
        default:
            if (sides > 10) {
                text = "Your number is too high!";
            }

    }
    document.getElementById("numberofsides").innerHTML = text;

}

function validateEntry(sides) {

    if (sides < 1)
    {
        alert("The number of sides is invalid. Please try again");
    }
    
}




