
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
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let feeling = document.getElementById("feeling").value;
    document.getElementById("nameprompt").innerHTML = "Plum Rabbit welcomes you, " + fname + " " + lname + "!" + 
    " it seems your feeling " + feeling;
   
}




