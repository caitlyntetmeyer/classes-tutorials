/*

Playing around in the console:

let name = 'Gary'
`Hello, ${name}` // Hello, Gary

`I'll be there at ${2 * 3} o'clock` // I'll be there at 6 o'clock

*/

function like(thing) {
  return `I like ${thing}`;
}

function love(thing) {
  return `I love ${thing}`;
}

const sentence = `<p>${like('apples')}, but ${love('oranges')}.</p>`;
// I like apples, but I love oranges.

document.querySelector('.interpolation').innerHTML = sentence;
