$(document).ready(function() {

	$(document).on('click', '.venue-button', function(){
		$.get('/venue', {venueId: $(this).data('id')}, function(bands) {
			console.log(bands);
			// $('body').append('<img src='+ bands[0].image + '>');
		});
	});
	$(document).on('click', '.fav-button', function(){
		$.post('/venue', {venueId: $(this).data('id')}, function(data) {
			console.log(data);
		});
	});


})