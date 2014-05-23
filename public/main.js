$(document).ready(function() {
	// $('.favs').hide();
	// $('.all').show();

	$(document).on('click', '.venue-button', function(){
		$.get('/venue', {venueId: $(this).data('id')}, function(bands) {
			console.log(bands);
			$('#front').css('background-image', 'url('+ bands[0].image + ')');
			$('#right').css('background-image', 'url('+ bands[1].image + ')');
			$('#back').css('background-image', 'url('+ bands[2].image + ')');
			$('#left').css('background-image', 'url('+ bands[3].image + ')');
		});
	});

	$(document).on('click', '.fav-button', function(){
		$.post('/venue', {venueId: $(this).data('id')}, function(data) {
			console.log(data);
		});
	});

	// $(document).on('click', '.show-favs', function() {
	// 	$('.all-venues').toggle();
	// 	$('.fav-venues').toggle();
	// });


})