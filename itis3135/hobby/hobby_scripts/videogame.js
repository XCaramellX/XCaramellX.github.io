/* get nav bar ids */
var homepage = document.getElementById("home");
var eventsDirects = document.getElementById("company-events");
var favoriteGames = document.getElementById("events");
var esportsEvents = document.getElementById("esport");
var aboutMe = document.getElementById("about");

/* get section ids */

var sectionHome = document.getElementById("section-home");
var sectionEventsDirects = document.getElementById("section-events-directs");
var sectionFavoriteGames = document.getElementById("section-favorite-games");
var sectionEsports = document.getElementById("esports-section");
var sectionAbout = document.getElementById("about-section");


// clicking the links on the nav bar shows a specfic section

window.onclick = function(event)
{
    
    if(event.target == homepage){
        
      sectionHome.style.display = "block"

    }else if(event.target == eventsDirects || event.target == favoriteGames ||  event.target == esportsEvents || event.target == aboutMe){
        sectionHome.style.display = "none";
    }

    if(event.target == eventsDirects){
        sectionEventsDirects.style.display = "block";

    }else if(event.target == homepage || event.target == favoriteGames ||  event.target == esportsEvents || event.target == aboutMe){
        sectionEventsDirects.style.display = "none"
    }

    if(event.target == favoriteGames){
        sectionFavoriteGames.style.display = "block";

    }else if(event.target == homepage || event.target == eventsDirects ||  event.target == esportsEvents || event.target == aboutMe){
        sectionFavoriteGames.style.display = "none"
    }

    if(event.target == esportsEvents){
        sectionEsports.style.display = "block";

    }else if(event.target == homepage || event.target == favoriteGames ||  event.target == eventsDirects|| event.target == aboutMe){
        sectionEsports.style.display = "none"
    }

    if(event.target == aboutMe){
       sectionAbout.style.display = "block";

    }else if(event.target == homepage || event.target == favoriteGames ||  event.target == esportsEvents || event.target == eventsDirects){
        sectionAbout.style.display = "none"
    }


}
