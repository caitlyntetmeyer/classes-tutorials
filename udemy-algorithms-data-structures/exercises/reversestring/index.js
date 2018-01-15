// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, "");
}

module.exports = reverse;

/*

Debugger Steps:

1. Add a "debugger" statement in your function
2. Call the function manually
3. At the terminal, run "node inspect index.js"
4. To continue execution of the file, prese "c" then "enter"
5. To launch a "repl" session, type "repl" then "enter"
6. To exit the "repl", press Ctrl + C

*/

// function reverse(str) {
//   return str
//     .split('')
//     .reverse()
//     .join('');
// }

// function reverse(str) {
//   let reversed = '';
//
//   for (let character of str) {
//     reversed = character + reversed;
//   }
//
//   return reversed;
// }
