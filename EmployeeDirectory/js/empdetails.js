//  -/*jslint plusplus: true, vars: true, white: true*/

// $(document).ready(function(){                  // DOCUMENT READY
$(document).on('pagebeforeshow', '#index', function(){ 	 
// jQuery( ".selector" ).on( "pagecreate", function( event ) { ... } )
//$( "#pageId2" ).on( "pagecreate", function( event)   {	
//$( ".selector" ).on( "listviewcreate", function( event, ui ) {} );

	
//   ===============================	
	

	var subCnt = 0;  
 
	
	
	
//		$.getJSON("data/employee.json", function(data) {   
//			$.each(data, function(employees) {
//				var html = "";		
//				$.each(this, function(key, value) {   console.log ("EMPDETAILS 1" );
//			        html += '<li><a href=index.html#' + value.employeeId + ">"  + "<img src=" + value.imagepath + ">";
//					html += '<h3>' + value.name + '</h3>'; 
//				   	html += '<p>' + value.title + '<span class="ui-li-count">' + subCnt + '</span></p></a></li>';  
//				});  
			
//			 console.log("3");
//				$("#empId").html(html); 
//		    	$("#empId").listview("refresh");
//			});
			
//	 	});     // end of getJSON
	
	
		 
 console.log("  empdetails 1");

//   ===============================	
	
	
	
// retrieve the employee id from session storage
	var employeeId = sessionStorage.employeeId;
console.log(" empdetails 2 sessionStorage.employeeId = " +  sessionStorage.employeeId ); 
    console.log(" empdetails 3  "  + employeeId + " " + data);    
    // retrieve the employees session storage data from session storage
    var data = JSON.parse(sessionStorage.employeesSstor);
	console.log("  empdetails 4  data  "+ " " + data);
	 console.log(" empdetails 5 sessionStorage.employeesSstor  " +   sessionStorage.employeesSstor );
	
   
	 
    // loop through the data and display the book details
    $.each(data, function() {
		var html = ""
        $.each(this, function(key, value) { 
			console.log("  empdetails 6 "  + key + " " + value);							   
										   
            if (value.employeeId == employeeId) {
				console.log("  empdetails 7  " + value.employeeId + "   " + employeeId );
				
		        html += '<li><a href=index.html#' + value.employeeId + ">"  + "<img src=" + value.imagepath + ">";
				html += '<h3>' + value.name + '</h3>'; 
			   	html += '<p>' + value.title + '<span class="ui-li-count">' + subCnt + '</span></p></a></li>';  
				
			}
        });
			 console.log(" empId 8 ");
			$("#empId2").html(html); 
	    	$("#empId2").listview("refresh");	
			
    });	
	
// ==============  LINK TO NEXT PAGE	
 //       $(function() {
//            $("#container")
//                .append('<ul id="list" data-role="listview"></ul>');
 //           $("#list")
 //               .append("<li><a href='#' id='1'>Item 1</a></li>")
 //               .append("<li><a href='#' id='2'>Item 2</a></li>")
 //               .append("<li><a href='#' id='3'>Item 3</a></li>");
 //           $("#list").listview();
 //           $(document).on("click", "a", function(e) {
 //               sessionStorage.setItem("id", e.currentTarget.id);
  //              $(':mobile-pagecontainer').pagecontainer('change', "#page2Id");
  //          });
  //          $(window).hashchange(function(e) {
  //              $("#page2container").html(sessionStorage.getItem("id"));
 //           });
  //          $(window).hashchange();
 //       });	
// ==============	

          $(document).on("click", "a", function(e) {
             sessionStorage.setItem("id", e.currentTarget.id);
               $(':mobile-pagecontainer').pagecontainer('change', "#pageId3");
		  });
				  			
           $(window).hashchange(function(e) {
               $("#page3container").html(sessionStorage.getItem("id"));
            });	 
	 
	 		$(window).hashchange();
	 
		// });    		//  END pagecreate
  });   // End document.addEventListener("DOMContentLoaded)	
	
 