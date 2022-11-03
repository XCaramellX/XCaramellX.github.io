let jsonFileURL = "toobin.json";
let jsonFileURL1 = "sorkin.json";
let jsonFileURL2 = "sampson.json";
let jsonFileURL3 = "chua.json";

$(document).ready(function() {
	$("a").click(function (){
		let title = $(this).attr("title");
		getJSON(title + ".json");
	});
}); // end ready

function getJSON(jsonFileURL){
	$.ajax({
		url: jsonFileURL,
		dataType: "text",
		success: function(jsonFileURL){
			let json = $.parseJSON(jsonFileURL);
			$("main > h2").html(json.speakers[0].month + "<br/>" + json.speakers[0].speaker);
			$("main > h1").html(json.speakers[0].title);
			$("main > img").attr("src", json.speakers[0].image);
			$("main > p").html(json.speakers[0].text);
		}
	});
}

function getJSON(jsonFileURL1){
	$.ajax({
		url: jsonFileURL1,
		dataType: "text",
		success: function(jsonFileURL1){
			let json = $.parseJSON(jsonFileURL1);
			$("main > h2").html(json.speakers[0].month + "<br/>" + json.speakers[0].speaker);
			$("main > h1").html(json.speakers[0].title);
			$("main > img").attr("src", json.speakers[0].image);
			$("main > p").html(json.speakers[0].text);
		}
	});
}

function getJSON(jsonFileURL2){
	$.ajax({
		url: jsonFileURL2,
		dataType: "text",
		success: function(jsonFileURL2){
			let json = $.parseJSON(jsonFileURL2);
			$("main > h2").html(json.speakers[0].month + "<br/>" + json.speakers[0].speaker);
			$("main > h1").html(json.speakers[0].title);
			$("main > img").attr("src", json.speakers[0].image);
			$("main > p").html(json.speakers[0].text);
		}
	});
}

function getJSON(jsonFileURL3){
	$.ajax({
		url: jsonFileURL3,
		dataType: "text",
		success: function(data){
			let json = $.parseJSON(data);
			$("main > h2").html(json.speakers[0].month + "<br/>" + json.speakers[0].speaker);
			$("main > h1").html(json.speakers[0].title);
			$("main > img").attr("src", json.speakers[0].image);
			$("main > p").html(json.speakers[0].text);
		}
	});
}