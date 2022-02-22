
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

function numkeys()
{
    const calculator = document.querySelector('.calculator');
    const keys = calculator.querySelector('.calculator_keys');
    var display = document.querySelector('.calculator_display');
    keys.addEventListener('click', e =>
    {
        if (e.target.matches('button'))
        {
            const key = e.target;
            const action = key.dataset.action;
            var keyContent = key.textContent;
            var displayedNum = display.textContent;
            const previousKeyType = calculator.dataset.previousKeyType;
            if (!action)
            {
                if (displayedNum === '0' || previousKeyType === 'operator') {
                    display.textContent = keyContent;
                } else if (displayedNum === keyContent)
                {
                    var temp = displayedNum;
                    temp = temp + keyContent;
                    display.textContent = temp;

                }else
                {
                    display.textContent = "" + displayedNum + keyContent;
                }
                console.log('number key!')
            }
            if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide')
            {
                key.classList.add('is-depressed');
                calculator.dataset.previousKeyType = 'operator';
                console.log('operator key!');
            }
            if (action === 'decimal')
            {

                display.textContent = displayedNum + '.';
                console.log('decimal key!');

            }
            if (action === 'clear')
            {
                console.log('clear key');

            }
            if (action === 'calculate')
            {
                
                console.log('equal key!');

            }

            Array.from(key.parentNode.children)
                .forEach(k => k.classList.remove('is-depressed'))
            
        }
    })
    

}

window.onload = function ()
{
    document.getElementById("addbutton").onclick = numkeys;
    document.getElementById("subtractbutton").onclick = numkeys;
    document.getElementById("multiplybutton").onclick = numkeys;
    document.getElementById("dividebutton").onclick = numkeys;
    document.getElementById("button7").onclick = numkeys;
    document.getElementById("button8").onclick = numkeys;
    document.getElementById("button9").onclick = numkeys;
    document.getElementById("button4").onclick = numkeys;
    document.getElementById("button5").onclick = numkeys;
    document.getElementById("button6").onclick = numkeys;
    document.getElementById("button1").onclick = numkeys;
    document.getElementById("button2").onclick = numkeys;
    document.getElementById("button3").onclick = numkeys;
    document.getElementById("button0").onclick = numkeys;
    document.getElementById("decimalbutton").onclick = numkeys;
    document.getElementById("clearbutton").onclick = numkeys;
    document.getElementById("calculatebutton").onclick = numkeys;

    //seperate statements for the arrays assignment
    document.getElementById("results_table").onclick = displaySalary;
    document.getElementById("salary").onclick = addSalary;

    // polygons
    //document.getElementById("numberofsides").onclick = getShape;

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
    var eachrow = 1;
   person.forEach((value) =>
    {
        cell = tableRows.insertCell();
        cell.innerHTML = value;
        var nextEntry = 1;
        if (nextEntry % eachrow == 0 && nextEntry != person.length)
        {

            tableRows = table.insertRow();
        }

   });
    salaries.forEach((value) => {
        cell = tableRows.insertCell();
        cell.innerHTML = value;
        var nextEntry =  1;
        if (nextEntry % eachrow == 0 && nextEntry != person.length) {

            tableRows = table.insertRow();
        }

    });
   
    document.getElementById("results_table").appendChild(table);
}














