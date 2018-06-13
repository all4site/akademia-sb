$(document).ready(function () {
	$('.collapsible').collapsible();
});

$(document).ready(function () {
	var height = $(this).height() - 10;

	$(window).on('scroll', function () {
		var topOffset = $(this).scrollTop();
		var topTop = $(this).height();
		var element = $('#content').offset().top;
		if (topOffset >= element) {
			$('.robik').addClass('robik-fixed');
		}
		if (topOffset <= element) {
			$('.robik').removeClass('robik-fixed');
		}


	});

});