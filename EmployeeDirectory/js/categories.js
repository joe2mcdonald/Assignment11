	$(document).ready(function(){
        // create a web worker to retrieve JSON data in the background
        var worker = new Worker("getJSON.js");
        worker.postMessage("data/books.json");
        worker.onmessage = function(e) {
            // store the JSON data in session storage for later use
            sessionStorage.books = JSON.stringify(e.data);
        };
        
        // get JSON data from the categories.js file in the foreground
        $.getJSON("data/categories.json", function(data) {
            $("#categories").html("");
            $.each(data, function() {
                $.each(this, function(key, value) {
                    $("#categories").append('<li><a href="books.html" id="' + 
                                            value.categoryid + '">' + 
                                            value.category + '</a></li>');             
                });
            });
        });
        
        // handle the click event of a category
		$("#categories").on("click", "a", function() {
            // retrieve the id for the selected category and save it in session storage
            var categoryID = $(this).attr("id");
            sessionStorage.categoryID = categoryID;
		});
	});