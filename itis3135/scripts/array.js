var person = [];
var salaries = [];

function addSalary()
{

    

    person.push("Carter Ellis");
    person.push("David West");
    person.push("Hope Bardot");
    person.push("Jacob Lopez");
    person.push("Jaden Adams");

    salaries.push("4000");
    salaries.push("5000");
    salaries.push("6000");
    salaries.push("7000");
    salaries.push("8000");
        
    
    
}

function displaySalary()
{
    var table = '<table>';

    for (var i = 0; i < person.length; i++) {

        table += "<tr><td>" + person[i] + "</td><td>" + "$" + salaries[i] + "</td></tr>";

    }
    table += "</table>";

    document.getElementById("display").innerHTML = table;
}

function displayAverage()
{
    var number = 0;
    var x = salaries.length;
   

    for (i = 0; i <= x; i++)
    {
        number += salaries[i];
        

        return document.getElementById("average").innerHTML = "The average is $" + parseInt(number / x);
        
    }
    

   
}

function displayHighest() {

    var maximum = salaries[0];

    for (i = 0; i <= salaries.length; i++)
    {

        if (salaries[i] > maximum) {
            maximum = salaries[i];

        }
    }
    return document.getElementById("highest").innerHTML = "The highest is $"  + maximum;
}

window.onload = function () {
    document.getElementById("results_table").onclick = displaySalary;
    document.getElementById("salary").onclick = addSalary;
    document.getElementById("resultaverage").onclick = displayAverage;
    document.getElementById("resulthighest").onclick = displayHighest;
}