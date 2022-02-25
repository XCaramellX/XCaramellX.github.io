
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
    validateEntry(sides);
    switch(sides)
    {
        case "1":
            
            alert(text = "henagon");
             
            break;
        case "2":
            alert(text = "digon");
           
            break;
        case "3":
            alert(text = "trigon");
            
            break;
        case "4": 
            alert(text = "tetragon");
            
            break;
        case "5":
            alert(text = "pentagon");
            
            break;
        case "6":
            alert(text = "hexagon");
           
            break;
        case "7":
            alert(text = "heptagon");
            
            break;
        case "8":
            alert(text = "octagon");
            
            break;
        case "9":
            alert(text = "enneagon");
            
            break;
        case "10":
            alert(text = "decagon");
            
            break;
        default:
              break;

            

    }

}

function validateEntry(sides)
{


    while (isNaN(sides) || sides > 10 || sides % 1 != 0 || sides < 0)
    {
        
       sides = prompt("You've entered something other than a number, a decimal, or a number not 1-10");
    }


    return sides;
 
}



function showNum()
{
    var num0 = document.getElementById("0").innerHTML;
    var num1 = document.getElementById("1").innerHTML;
    var num2 = document.getElementById("2").innerHTML;
    var num3 = document.getElementById("3").innerHTML;
    var num4 = document.getElementById("4").innerHTML;
    var num5 = document.getElementById("5").innerHTML;
    var num6 = document.getElementById("6").innerHTML;
    var num7 = document.getElementById("7").innerHTML;
    var num8 = document.getElementById("8").innerHTML;
    var num9 = document.getElementById("9").innerHTML;
    var num10 = document.getElementById("10").innerHTML;

    if (num0)
    {
        alert("0");
    }
    if (num1)
    {
        alert("1")
    }
}


var person = [];
var salaries = [];

function addSalary()
{
    
    for (var i = 0; i <= 5; i++)
    {
        person[i] = document.getElementById("employee").value;
        for (var j = 0; j <= 3; j++)
        {
            if (person[i] == "Carter Ellis")
            {
                salaries[j] = " "  + '$4000';
               
                
            }
            if (person[i] == "David West")
            {
                salaries[j] = " " + '$4000';
                
            }
            if (person[i] == "Hope Bardot")
            {
                salaries[j] = " " + '$4000';
                
            }

            if (person[i] == "Jacob Lopez")
            {

                salaries[j] = " " + '$6000';
                
            }
            if (person[i] == "Jaden Adams")
            {
                salaries[j] = " " + '$7000';
                
            }
        }

        
    }
    

    
}

function displaySalary()
{
    var table = document.createElement("table")
    var tableRows = table.insertRow();
    var cell;
    var eachrow = 10;
   person.forEach((value) =>
    {
        cell = tableRows.insertCell();
        cell.innerHTML = value;
        var nextEntry = 1;
        if (nextEntry % eachrow == 1 && nextEntry != person.length)
        {

            tableRows = table.insertRow();
        }

   });
    salaries.forEach((value) => {
        cell = tableRows.insertCell();
        cell.innerHTML = value;
        var nextEntry =  1;
        if (nextEntry % eachrow == 1 && nextEntry != person.length) {

            tableRows = table.insertRow();
        }

    });
   
    document.getElementById("results_table").appendChild(table);
}

function displayAverage()
{
    for (i = 0; i <= 3; i++)
    
}

function displayHighest() {
    for (i = 0; i <= 3; i++) {
        addSalary();
        if (salaries[i] == 7000) {
            document.getElementById("results").innerHTML = salaries[i];

        }
    }
    document.getElementById("results").innerHTML = salaries[i];
}

window.onload = function () {
    document.getElementById("results_table").onclick = displaySalary;
    document.getElementById("salary").onclick = addSalary;
    document.getElementById("results").onclick = displayAverage;
    document.getElementById("results").onclick = displayHighest;
}














