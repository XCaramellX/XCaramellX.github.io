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