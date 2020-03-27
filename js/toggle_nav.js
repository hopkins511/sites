/* Menu Toggle */
$( document ).ready(function() {

	$('.accordion').each(function(i, container) {

		var triggers 	= $('#i-nav');		// all of the triggers
		var item     	= $('.accordion'); 		// the menu item


		$(triggers).on("click", function(){
			
			if ( $(item).css('display') === 'none' ){
				$(item).show(); 
				
			}
			else {
				$(item).hide();
				
			}
			
		});

	});

});

$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('.accordion'), false);
});




/* Menu Toggle */
$( document ).ready(function() {

	$('.sidebar-mobile-nav ul').each(function(i, container) {

		var triggers 	= $('#sidebar-i-nav');		// all of the triggers
		var item     	= $('.sidebar-mobile-nav ul'); 		// the menu item


		$(triggers).on("click", function(){
			
			if ( $(item).css('display') === 'none' ){
				$(item).show(); 
				
			}
			else {
				$(item).hide();
				
			}
			
		});

	});

});
