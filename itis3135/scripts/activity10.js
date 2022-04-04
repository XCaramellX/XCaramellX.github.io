$(document).ready(function() {
        // get the image URL and caption for each image and animate the caption
        $("#image_list a").each(function () {
                
                let caption = $(this).attr("title");

                // preload the image for each link
                let beachGallery = new Image();
                beachGallery.src = $(this).attr("href");
        });
               

                // set up the event handlers for each link
                $("#image_list a").click(function(event){
                        let imageURL = $(this).attr("href");
                        $("#image").attr("src", imageURL);

                        let caption = $(this).attr("title");
                        $("#caption").text(caption);

                        // cancel the default action of each link
                        event.preventDefault();

                         });
                         
                         
                  // move the focus to the first link
        $("li:first-child a").focus();                                                                                                                                                                                 

        
}); // end ready