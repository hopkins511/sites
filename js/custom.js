$(document).ready(function(){
    
    $('#i-nav').click(function(){
        
        $(this).toggleClass('open');
        $('ul').slideToggle(600);
        $('ul').toggleClass('show');
        $('.hamburger-bar-top').toggleClass('hamburger-change-top');
        $('.hamburger-bar-middle').toggleClass('hamburger-change-middle');
        $('.hamburger-bar-bottom').toggleClass('hamburger-change-bottom');

    });
});


$(document).ready(function() {
	$(".loader").delay(2000).fadeOut("slow");
	$("#overlayer").delay(2000).fadeOut("slow");

	setTimeout(function() {
		$('body').addClass('loaded');
		
	  }, 2000);
});

$(document).ready(function() {
	const menuBtn = $('.menu-button');
	menuBtn.click(()=>{	
		setTimeout(()=>{
		removeHash();
		}, 5);
	});
	
	function removeHash(){
		history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search);
	}
});

var roles = ["Digital Designer.", "Web Developer.", "Graphic Designer.", "Front-End Developer."];

function rotateRoles() {
var ct = $(".role").data("role") || 0;
$(".role").data("role", ct == roles.length -1 ? 0 : ct + 1).text(roles[ct]).fadeIn()
	.delay(1500).fadeOut(500, rotateRoles);
}
$(rotateRoles);