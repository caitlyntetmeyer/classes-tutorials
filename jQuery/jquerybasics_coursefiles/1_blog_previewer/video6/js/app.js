

// const title = "My First Blog Post";
// const content = "This is my <strong>first</strong> post!";

$('#flashMessage').hide();

$("#previewButton").click(function() {
	const title = $("#blogTitleInput").val(); // retrieve what the user entered
	const content = $("#blogContentInput").val();

	$("#blogTitlePreview").text(title);
	$("#blogContentPreview").html(content);

	$('#flashMessage')
	  .slideDown(1000)
	  .delay(3000)
	  .slideUp();
});
