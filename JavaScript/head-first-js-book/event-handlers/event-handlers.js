/*

Event Handlers

Whenever there's an event, there's an opportunity for your code to handle it.

We write handlers to handle events. Handlers are typically small pieces of code that know what to do when an event occurs.

In terms of code, a handler is a function. When an event occurs, its handler function is called. (You might also hear handlers called "callbacks" or "listeners.")

A handler function that can handle a page load event when it occurs:
*/
function pageLoadedHandler() {
	alert("I'm alive!");
}

window.onload = pageLoadedHandler;