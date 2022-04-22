$(document).ready(function(){
    $.getJSON("facultyList.json", function(data){
        $.each(data, function() {
            $.each(this, function(value){
                $("#faculty").append(
                    value.full_name + "<br>" +
                    value.first_name + "<br>" +
                    value.image + "<br>" +
                    value.department + "<br>" +
                    value.bio + "<br>"
                );
            })
        })
    });
});
