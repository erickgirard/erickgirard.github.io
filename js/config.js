window._skel_config = {
	preset: 'standard',
	prefix: '/css/style',
	resetCSS: true,
	grid: {
		gutters: 4
	}
};

window._skel_ui_config = {
	preset: 'standard'
};

jQuery(function() {

	var x;

	// Dropdowns
		$('#nav > ul').dropotron({ 
			offsetY: -18,
			offsetX: -1,
			mode: 'fade',
			noOpenerFade: true,
			speed: 300,
			alignment: 'center',
			detach: false
		});

	// Portfolio
	
		var settings = {
			selector: 'a.image',
			popupClass: 'poptrox-popup skel-ui-fixed',
			usePopupDefaultStyling: false,
			overlayColor: '#999',
			overlayOpacity: 0.8,
			windowMargin: 30,
			useBodyOverflow: false
		};
		
		x = $('#portfolio');
		
		if (x.length > 0)
		{
			x.poptrox(settings);

			x
				.selectorr({
					titleSelector: 'h3',
					speed: 300
				});
		}
		
		x = $('#portfolio-preview');

		if (x.length > 0)
			x.poptrox(settings);

});