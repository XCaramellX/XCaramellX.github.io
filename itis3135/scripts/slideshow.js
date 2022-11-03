
/***current slides variables***/
let myCircles = document.getElementsByClassName("slideshow-circle");
let count = 0;
/***previous and next***/

var previousButton = document.getElementById("previous-button");
var nextButton = document.getElementById("next-button");



    let slideIndex = 1;

    function plusSlides(n){
        showSlides(slideIndex += n);
    }

    function currentSlide(n){
        showSlides(slideIndex = n);
    }

    function showSlides(n){
        let i;
        let slides = document.getElementsByClassName("my-beach-slides");
        let circles = document.getElementsByClassName("slideshow-circle");
        if(n > slides.length) {slideIndex = 1}
        if(n < 1) {slideIndex = slides.length}
        for(i = 0; i < slides.length; i++){
            slides[i].style.display = "none";
        }


        for(i = 0; i < circles.length; i++){
            circles[i].className = circles[i].className.replace(" active", "");
        }

        slides[slideIndex-1].style.display = "block";
        circles[slideIndex-1].className += " active";
    }

    /*for(var i = 0; i < myCircles.length; i++){
        if(myCircles[i].onclick == plusSlides(i)){
            plusSlides(count);
            
        }
        
        count++;
    }*/

    


/*var $ = function (id) {
    return document.getElementById(id);
};

window.onload = function () {
    var listNode = $("beach_image_list");     //the ul element
    var captionNode = $("beach_caption");     // the h2 element for the caption
    var imageNode = $("beach_image_1");         // the img element for the show

    var links = listNode.getElementsByTagName("a");

    //Process image links
    var i, linkNode, image;
    var imageCache = [];
    for (i = 0; i < links.length; i++) {
        linkNode = links[i];

        // Preload image and copy title properties
        image = new Image();
        image.src = linkNode.getAttribute("href");
        image.title = linkNode.getAttribute("title");
        imageCache[imageCache.length] = image;
    }

    //Start slide show
    var imageCounter = 0;
    var timer = setInterval(
        function () {
            imageCounter = (imageCounter + 1) % imageCache.length;
            image = imageCache[imageCounter];
            imageNode.src = image.src;
            captionNode.firstChild.nodeValue = image.title;
        },
        2000);
};*/