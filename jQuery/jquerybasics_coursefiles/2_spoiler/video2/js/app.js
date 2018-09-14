// Hide the spoiler on page load
$(".spoiler span").hide();
//When button's pressed
$(".spoiler button").click(function() {
	// Show spoiler text
	$(".spoiler span").show();
	// Hide "Reveal Spoiler" button
	$(".spoiler button").hide();
});




