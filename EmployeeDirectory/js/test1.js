$(document).ready(function() {  		     				 // DOCUMENT READY
				
$.ajax({					// METHOD THAT PROVIDES OPTIONS THAT GIVE MORE CONTROL OVER THE WAY IT WORKS
    	var searchTerm;
    	$("#btnSearch").click(function() {
			
			// Set the search term
			searchTerm = "";
			if ($("#search").val() == "") { alert("You must enter one or more tags!"); }
			else {
				searchTerm = $("#search").val();
				// Build the URL based on the search term
				var url = "data/employee.jsonhttp://api.flickr.com/services/feeds/photos_public.gne?" +
	    			  	  "format=json&jsoncallback=?&tags=" + searchTerm + "&tagmode=all";
		
	
	
	
	
	
	
	type: "get",							             // STRING THAT SPECIFIES THE GET OR POST METHOD
	url: "data/employee.json",
	beforeSend: function() {									// EXECUTED BEFORE THE REQUEST IS SENT
		$("#employee").html("Loading...");
	},
	timeout: 10000,					 	      // MILLISECONDS AFTER WHICH REQUEST WILL TIMEOUT IN FAILURE
	error: function(xhr, status, error) {   		            // EXECUTES FUNCTION IF REQUESTS FAIL
		alert("Error: " + xhr.status + " - " + error);
	},
	dataType: "json",										    // STRING SPECIFIED TYPE OF DATA
	success: function(data) {									// EXECUTED IF REQUEST IF SUCCESSFUL 
		$("#result").html("");
		$.each(data, function() {							// PROCESS  COLLECTION
				$.each(this, function(key, value) {			// PROCESS EACH ITEM IN THE COLLECTION
				$("#employee").append("<h3>" +
					"Name: " + value.name + "<br>" + 
					"Title: " + value.title + "<br>" + 
					"Bio: " + value.bio + "<br><br>"
				);
			})		
		});
	}
});
				
});