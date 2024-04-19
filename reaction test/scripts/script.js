/* Elements Animation */
let slideInLeft = $('.slide-in-left-target');
let slideInBottom = $('.slide-in-bottom-target');
let slideInRight = $('.slide-in-right-target');
let windowPosition = $(window);

function check_if_in_view() {
	let windowHeight = windowPosition.height();
	let windowTopPosition = windowPosition.scrollTop();
	let windowBottomPosition = (windowTopPosition + windowHeight);

	$.each(slideInLeft, function() {
		let element = $(this);
		let elementHeight = element.outerHeight();
		let elementTopPosition = element.offset().top;
		let elementBottomPosition = (elementTopPosition + elementHeight);

		if ((elementBottomPosition >= windowTopPosition) &&
			(elementTopPosition <= windowBottomPosition)) {
			element.addClass('slide-in-left');
		}
	});
	$.each(slideInBottom, function() {
		let element = $(this);
		let elementHeight = element.outerHeight();
		let elementTopPosition = element.offset().top;
		let elementBottomPosition = (elementTopPosition + elementHeight);

		if ((elementBottomPosition >= windowTopPosition) &&
			(elementTopPosition <= windowBottomPosition)) {
			element.addClass('slide-in-bottom');
		}
	});
	$.each(slideInRight, function() {
		let element = $(this);
		let elementHeight = element.outerHeight();
		let elementTopPosition = element.offset().top;
		let elementBottomPosition = (elementTopPosition + elementHeight);

		if ((elementBottomPosition >= windowTopPosition) &&
			(elementTopPosition <= windowBottomPosition)) {
			element.addClass('slide-in-right');
		}
	});
}
windowPosition.on('scroll resize', check_if_in_view);
windowPosition.trigger('scroll');
/* /Elements Animation */