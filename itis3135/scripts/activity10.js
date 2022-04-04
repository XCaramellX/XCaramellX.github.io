$(document).ready(function() {
        // get the image URL and caption for each image and animate the caption
        $("image_list a").each(function () {
                
                let caption = $(this).attr("title");

                // preload the image for each link
                let beachGallery = new Image();
               

                // set up the event handlers for each link
                $(this).click(function(event){
                        $("caption, #image").slideUp(2000,
                        function() {
                        $("#image").attr("src");
                        $("#caption").text(caption);
                        $("#caption, #image").slideDown(2000);

                         });
                         // cancel the default action of each link
                         event.preventDefault();
                });

        
        });
        // move the focus to the first link
        $("li:first-child a").focus();                                                                                                                                                                                 

        
}); // end ready