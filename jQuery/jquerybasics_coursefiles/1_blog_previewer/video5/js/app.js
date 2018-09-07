$('#flashMessage')
  .hide()
  .slideDown(1000)
  .delay(3000)
  .slideUp();

/* 
$('#element').html(); // getter
$('#element').html("<p>I am setting this HTML!</p>"); // setter 

Get:

$('.blogPage-title').text() // "New Blog Post"
$('.blogNewPost').html(); // (all the HTML in the element)

*/

const title = "My First Blog Post";
const content = "This is my <strong>first</strong> post!";

$("#blogTitlePreview").text(title);

$('#blogContentPreview').html(content); // must use .html() to render HTML
