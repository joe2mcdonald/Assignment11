	$(document).ready(function(){
        // retrieve the book id from session storage
        var bookID = sessionStorage.bookID;
        
        // retrieve the book data from session storage
        var data = JSON.parse(sessionStorage.books)
        
        // loop through the data and display the book details
        $.each(data, function() {
            $.each(this, function(key, value) {
                if (value.bookid == bookID) {
                    $("h1").html(value.title);
                    $("#image").html("<img src=images/" + value.image + ">");
                    $("#details").html("By: " + value.author + "<br>" + 
                                       "ISBN: " + value.isbn + "<br>" + 
                                       "Chapter Count: " + value.chapter_count + "<br>" + 
                                       "Page Count: " + value.page_count);
                    $("#description").html(value.description);
                }
            });
        });
	});