//-/*jslint plusplus: true, vars: true, white: true*/

  $(document).ready(function(){                  // DOCUMENT READY
//$(document).on('pagebeforeshow', '#index', function(){ 
// $( "#pageId1" ).on( "pagecreate", function( event)   {	
//$( ".selector" ).on( "listviewcreate", function( event, ui ) {} );

	
// ==============	

//  WEB WORKER API  -  SESSION STORAGE
// create a web worker to retrieve JSON data in the background
//	var worker = new Worker("getJSON.js");							 // CREATES WORKER FILE
//		  console.log(" main 1A worker = " +   worker );	
//	worker.postMessage("data/employees2.json");						 // PASSES THE URL OF THE JSON FILE
//	worker.onmessage = function(e) {                   				 // STORES THE DATA
//       // store the JSON data in session storage for later use
//	   sessionStorage.employeesSstor = JSON.stringify(e.data);   //CONVERT DATA TO STRING AND PUTS INTO SESSION STORAGE
	
//	  console.log(" main 1B sessionStorage.employeesSstor = " +   sessionStorage.employeesSstor );	
//	};
					
					
console.log("main 1C  ");
	
// ==============	
	
	var subCnt = 0;								// subbordinates counter
	
	 // get JSON data from the employees.json file in the foreground
	$.getJSON("data/employees2.json", function(data) {
		
		$.each(data, function(employees) { 
		var html = "";
		$.each(this, function(key, value) { 			
	//		$.each(this, function(i, name) {   
					console.log ("main 2A " );
		 html += '<li><a href=index.html#' + value.employeeId + ">"  + "<img src=" + value.imagepath + ">";
		 html += '<h3>' + value.name + '</h3>'; 
		 html += '<p>' + value.title + '<span class="ui-li-count">' + subCnt + '</span></p></a></li>';
				
	//			$("#employee").append(
	//		li +=	'<li><a href="#" + value.employeeId + ">" + '</li>';
	//		li += '<li><a href="#" id="' + i + '" class="info-go">' + name.name + '</a></li>';
//				"<img src=" + value.imagepath + ">" +
//				'<h3>' + value.name + '</h3>' +
//					'<p>' + 
//				value.title + '<span class="ui-li-count">' + subCnt + '</span>
//				  </p></a></li>';
//				);

			});	
				
//			console.log("  MAIN 2B   value.employeeId  = " + value.employeeId );
			
/*	
    //append list to ul
    $("#prof-list").append(html).promise().done(function () {
        //wait for append to finish - thats why you use a promise()
        //done() will run after append is done
        //add the click event for the redirection to happen to #details-page
        $(this).on("click", ".info-go", function (e) {
            e.preventDefault();
            //store the information in the next page's data
            $("#pageId2").data("info", info[this.id]);
            //change the page # to second page. 
            //Now the URL in the address bar will read index.html#details-page
            //where #details-page is the "id" of the second page
            //we're gonna redirect to that now using changePage() method
            $.mobile.changePage("#pageId2");
        });
			
    //refresh list to enhance its styling.
        $(this).listview("refresh");	
		
*/		
					console.log("main 3");
		$("#empId").html(html); 
		//	$("#empId").listview("refresh");
			$("#empId").listview().listview('refresh');
		});
//	});	
	});      // end of getJSON


 console.log("mAIN 4");
	
// ==============	
	
//   ON CLICK EVENT  - SESSION STORAGE
        // handle the click event of an employee
		$("#empId").on("click", "ul", function() {
            // retrieve the id for the selected employee id and save it in session storage
            var employeeId = $(this).attr("id");
            sessionStorage.employeeId = employeeId;
			console.log("on click    " );
			 console.log("session storage employeeId    " + sessionStorage.employeeId );
		});
	
// ==============  LINK TO NEXT PAGE
 //    $(function() {
 //       $("#container")
 //               .append('<ul id="list" data-role="listview"></ul>');
 //           $("#list")
 //               .append("<li><a href='#' id='1'>My Item 1</a></li>")
 //               .append("<li><a href='#' id='2'>My Item 2</a></li>")
  //              .append("<li><a href='#' id='3'>My Item 3</a></li>");
 //		    $("#list").listview();
 //	  });
	
            $(document).on("click", "a", function(e) {
                sessionStorage.setItem("id", e.currentTarget.id);
                $(':mobile-pagecontainer').pagecontainer('change', "#pageId2");
            });
			
            $(window).hashchange(function(e) {
                $("#page2container").html(sessionStorage.getItem("id"));
            });
	  
 //          $(document).on("click", "a", function(e) {
  //             sessionStorage.setItem("id", e.currentTarget.id);
 //              $(':mobile-pagecontainer').pagecontainer('change', "#pageId3");
  //         });
				  			
  //         $(window).hashchange(function(e) {
  //             $("#page3container").html(sessionStorage.getItem("id"));
  //          });
	  
            $(window).hashchange();

      
	
	
	
	
 	//	 });    		//  END pagecreate
  });   // End document.addEventListener("DOMContentLoaded)	
	
 
