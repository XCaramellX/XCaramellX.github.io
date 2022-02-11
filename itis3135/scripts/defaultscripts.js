
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




