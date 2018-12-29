$ = jQuery.noConflict();

$(document).ready(function(){
	
	// Left menu active js
	var windowUrl = window.location.href;
	$('#main-menu li a').each(function(){		
		if($(this).attr('href') == windowUrl){
			$(this).addClass('active');
			$(this).parent('li.gui-folder').addClass('active');
		}		
	});
	
	// For tooltip change js
	$('body').tooltip({
        selector: "[data-tooltip=tooltip]",
        container: "body"
    });
});

/*$(document).ready(function () {
  $('#dtBasicExample').DataTable({
    "paging": false // false to disable pagination (or any other option)
  });
  $('.dataTables_length').addClass('bs-select');
});*/
