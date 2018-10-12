//1. Add a "featured" tag to the second item in the list: 
$secondItem = $('li a[href*="portofcallnola"]');
$secondItem.addClass("featured");

  //  Append a new span element containing the word "Featured" to the list item
  $featuredSpan = $secondItem.append(' <span>Featured</span>');
  //  Add a class of "featured" to the new span element. 
  $featuredSpan.addClass('featured');
//2. Add a class of "new" to the last item in the list. You can traverse to the last item or find a jQuery method that helps you select the last item in the list. 
$("li").last().addClass("new");

//3. Add an attribute to each link so that all anchor tags open in a new tab. 
$("a").attr("target", "_blank");

//4. Select and print the index and text of each anchor tag to the console
$("a").each(function( index ) {
	console.log( index + ": " + $(this).text() )
});

//5. Refactor question #4 using the 'this' keyword. 

