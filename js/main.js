jQuery(function(){
    jQuery(".element").typed({
      	strings: ["Веб-дизайнер. ^500", "Верстальщик. ^300"],
      	// typing speed
      	typeSpeed: 50,
      	// time before typing starts
      	startDelay: 1000,
      	// loop
        loop: true,
    });
});

jQuery(function(){
	jQuery('.burger-btn').on('click', function(){
		if(!jQuery(this).hasClass('active')){
			jQuery(this).next().addClass('drop');
			jQuery(this).addClass('active');
		} else {
			jQuery(this).next().removeClass('drop');
			jQuery(this).removeClass('active');
		}
	});
});
