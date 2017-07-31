(function(cash) { "use strict";	
				 		 
	

	/*SLIP HOVER PLUGIN*/
	/**********************************/
				 
	if ($(window).width()>992){			 
	if ($('.sliphover').length){			 
		 $('.sliphover').sliphover({
			 target: '.ellem',
			 caption: 'data-caption',
			 fontColor: '#fff',
			 backgroundColor : 'rgba(255,255,255,0.85)'
		 });
	}
	}
				 
	/***********************************/



	/*WINDOW LOAD*/
	/**********************************/
 
    $(window).load(function() {
		if($('#map-canvas-contact').length==1){
		   initialize('map-canvas-contact');}
		
	    if ($('.izotope-container').length) { 
			 var $container = $('.izotope-container');
              $container.isotope({
                itemSelector: '.item',
                layoutMode: 'masonry',
                masonry: {
                  columnWidth: '.grid-sizer'
                }
              });
			  $('#filters').on('click', '.but', function() {
				$('.izotope-container').each(function(){
				   $(this).find('.item').removeClass('animated');
				});
				$('#filters .but').removeClass('activbut');
				  $(this).addClass('activbut');
					 var filterValue = $(this).attr('data-filter');
						$container.isotope({filter: filterValue});
						  });
           }
	 });
				  
})(jQuery); 