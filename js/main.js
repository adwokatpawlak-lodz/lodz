$('div.floating-menu a').click(function() {
  //alert( "Handler for .click() called." );
});

/*background image*/
// $(window).load(function() {    
	// var theWindow        = $(window),
	    // $bg              = $(".bg"),
	    // aspectRatio      = $bg.width() / $bg.height();		    		
	// function resizeBg() {
		// if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
		    // $bg
		    	// .removeClass()
		    	// .addClass('bgheight');
		// } else {
		    // $bg
		    	// .removeClass()
		    	// .addClass('bgwidth');
		// }		
	// }         			
	// theWindow.resize(resizeBg).trigger("resize");
// 
// });

$(document).ready(function() {
   $('.scroll-menu').localScroll({duration:1000});
});