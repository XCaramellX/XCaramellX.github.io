
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
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var feeling = document.getElementById("feeling").value;
    document.getElementById("nameprompt").innerHTML = "Plum Rabbit welcomes you, " + fname + " " + lname + "!" + 
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




