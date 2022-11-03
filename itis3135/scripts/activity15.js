$(document).ready(function() {
    $.getJSON("facultyList.json", function(data){
        $.each(data, function() {
            $.each(this, function(key, value){
                $("#faculty").append(
                    "<img src="+ "'" + value.image+"'><br>" +
                    "<h2>" + value.full_name + "<br>" +
                   "<h3>" +  value.department + "<br>" +
                    "<p><i>" + value.bio + "<br>"
                );
            })
        })
    });
});
