//1. Add a "featured" tag to the second item in the list: 
$secondItem = $('li a[href*="portofcallnola"]');
  //  Append a new span element containing the word "Featured" to the list item
  $featuredSpan = $secondItem.append('<span>Featured</span>');
  //  Add a class of "featured" to the new span element. 
  $featuredSpan.addClass('featured');
//2. Add a class of "new" to the last item in the list. You can traverse to the last item or find a jQuery method that helps you select the last item in the list. 


//3. Add an attribute to each link so that all anchor tags open in a new tab. 

//4. Select and print the index and text of each anchor tag to the console


//5. Refactor question #4 using the 'this' keyword. 

