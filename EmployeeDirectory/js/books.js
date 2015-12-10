	$(document).ready(function(){
		// retrieve the category id from session storage
		var categoryID = sessionStorage.categoryID;

        // retrieve the book data from session storage
        var data = JSON.parse(sessionStorage.books)
        
        // loop through the data and display the book titles
        $.each(data, function() {
            $.each(this, function(key, value) {
                if (value.categoryid == categoryID) {
                    $("#books").append('<li><a href="book.html" id="' + 
                                       value.bookid + '">' + 
                                       value.title + '</a></li>');
                }
            });
        });
            
        // handle the click event of a book
		$("#books").on("click", "a", function() {
            // retrieve the id for the selected book and save it in session storage
            var bookID = $(this).attr("id");
            sessionStorage.bookID = bookID;
		});
	});