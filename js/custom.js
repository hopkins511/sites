$(document).ready(function(){
    
    $('#i-nav').click(function(){
        
        $(this).toggleClass('open');
        $('ul').slideToggle(200);
        $('ul').toggleClass('show');
        $('.hamburger-bar-top').toggleClass('hamburger-change-top');
        $('.hamburger-bar-middle').toggleClass('hamburger-change-middle');
        $('.hamburger-bar-bottom').toggleClass('hamburger-change-bottom');

    });
});


// Dropdown Menu Fade    
jQuery(document).ready(function(){
    $(".dropdown").hover(
        function() { $('.dropdown-menu', this).stop().fadeIn("fast");
        },
        function() { $('.dropdown-menu', this).stop().fadeOut("fast");
    });
});

/* More Tiles */
$( document ).ready(function() {

	$('.tiles-hidden').each(function(i, container) {

		var more 	= $('#more-button');		// all of the triggers
		var less 	= $('#less-button');		// all of the triggers
		var item     	= $('.tiles-hidden'); 		// the menu item


		$(more).on("click", function(){
			
			if ( $(item).css('display') === 'none' ){
				$(item).slideToggle(300);
				$( "#more-button" ).hide();
        $( "#less-button" ).show();
				
			}
			else {
				$(item).slideToggle(300);
				$( "#more-button" ).show();
        $( "#less-button" ).hide();
			}
			
		});

		$(less).on("click", function(){
			
			if ( $(item).css('display') === 'none' ){
				$(item).slideToggle(300);
				$( "#more-button" ).hide();
        $( "#less-button" ).show();
				
			}
			else {
				$(item).slideToggle(300);
				$( "#more-button" ).show();
        $( "#less-button" ).hide();
			}
			
		});

	});

});
