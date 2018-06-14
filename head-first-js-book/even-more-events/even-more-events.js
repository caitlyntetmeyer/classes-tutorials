// Say you want your code to wait five seconds before doing something.
// Here's how you do that using setTimeout and a handler.

// First, we write an event handler. This is the handler that will be called when the time event has occurred.
function timerHandler() {
	alert("Hey, what are you doing just sitting there staring at a blank screen?");
}

// And here, we call setTimeout, which takes two arguments: the event handler and a time duration in milliseconds:
setTimeout(timerHandler, 5000);
// After 5000 milliseconds, it'll call timerHandler.

