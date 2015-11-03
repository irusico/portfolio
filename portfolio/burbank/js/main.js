jQuery(function(){
	jQuery('#check-in').datepicker();
	jQuery('#check-out').datepicker();
	jQuery('#check-in-bottom').datepicker();
	jQuery('#check-out-bottom').datepicker();
	jQuery('#check-in-mob').datepicker();
	jQuery('#check-out-mob').datepicker();

// задержка выподающего блока .drop-booktrip при наведении на datepicker
	jQuery('#ui-datepicker-div').on('mouseenter', function(){
		jQuery('.drop-booktrip').addClass('hovered');
	});
	jQuery('#ui-datepicker-div').on('mouseleave', function(){
		jQuery('.drop-booktrip').removeClass('hovered');
	});
	jQuery( '#accordion' ).accordion({
    	collapsible: true
    });
    jQuery('.burger-btn').on('click', function(){
		if(!jQuery(this).hasClass('active')){
			jQuery(this).next().slideDown('fast');
			jQuery(this).addClass('active');
		} else {
			jQuery(this).next().slideUp('fast');
			jQuery(this).removeClass('active');
		}
	});
});

jQuery(window).on('load', function(){
	jQuery('.large-bxslider').bxSlider({
		mode:'fade',
		speed:800,
		nextSelector: '#slider-next',
		pagerSelector: '#slider-page',
		prevSelector: '#slider-prev',
	});
	smallslider = jQuery('.small-bxslider').bxSlider({
	  	mode:'fade',
	  	speed:500,
	  	nextSelector: '#small-slider-next',
	  	pagerSelector: '#small-slider-page',
	  	prevSelector: '#small-slider-prev',
	  	adaptiveHeight: 'true'
	});
	jQuery('.bottom-bxslider').bxSlider({
	  	mode:'fade',
	  	speed:800,
	  	nextSelector: '#bottom-slider-next',
	  	pagerSelector: '#bottom-slider-page',
	  	prevSelector: '#bottom-slider-prev',
	  	adaptiveHeight: 'true'
	});
});


//slider desrtoy
jQuery(window).on('resize', function(){
	if(jQuery(window).width()<932 && jQuery(window).width()>766){
		smallslider.destroySlider();
	} else {
		smallslider.reloadSlider();
	}
});

jQuery(window).on('load', function(){
	if(jQuery(window).width()<932 && jQuery(window).width()>767){
		smallslider.destroySlider();
	} else {
		smallslider.reloadSlider();
	}
});

// footer-fixed при скроле
jQuery(window).on('scroll', function(){
	var y = window.pageYOffset;
	console.log(y);
	//footer на половине body-> if(y>jQuery('body').height()/2){ 
	if(y>350){
		jQuery('.footer').addClass('fixed');
	} else {
		jQuery('.footer').removeClass('fixed');
	}
});

//вызов аккордиона
// jQuery(function() {
//     jQuery( '#accordion' ).accordion({
//     	collapsible: true
//     });
// });

//выпадающее меню при клике на burger-btn
// jQuery(function(){
// 	jQuery('.burger-btn').on('click', function(){
// 		if(!jQuery(this).hasClass('active')){
// 			jQuery(this).next().slideDown('fast');
// 			jQuery(this).addClass('active');
// 		} else {
// 			jQuery(this).next().slideUp('fast');
// 			jQuery(this).removeClass('active');
// 		}
// 	});
// });