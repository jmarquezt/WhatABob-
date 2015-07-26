$(function() {

	$('#success').hide();
	$('#startover').addClass('hoverOut');
	var score = 0;

	$('#bobhead').click(function() {
		score++;
		$('#score').text(score); 
		$('#startover').removeClass('hoverIn');
		if(!$('#startover').hasClass('hoverOut')){
			$('#startover').addClass('hoverOut');
		}
		$('#success').show('slow').fadeOut(2000);     
	});

	$('#startover').click(function(e) {
		e.preventDefault();
		score = 0;
		$('#score').text(score); 
		$('#startover').addClass('hoverIn').removeClass('hoverOut');
	});
});