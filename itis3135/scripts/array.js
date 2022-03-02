var person = [];
var salaries = [];

function addSalary()
{
    
    for (var i = 0; i < 1; i++)
    {

        person.push(document.getElementById("employee").value);

        for (var j = 0; j < 1; j++)
        {

            salaries.push(document.getElementById("salaryamount").value);

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