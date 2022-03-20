
var kingButton = document.getElementById("king");
var kingModal = document.getElementById("kingmodal");


window.onclick = function(event)
{
    if (event.target == kingButton)
    {
        kingModal.style.display = "block";
    }

    if (event.target == kingModal)
    {
        kingModal.style.display = "none";
    }

    
}

