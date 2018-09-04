// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// FIRST SOLUTION using reverse method

// function reverse(str) {
//   return str
//     // turn str into array
//     .split('')
//     // call reverse method on array
//     .reverse()
//     // join the array back into a str and return the result
//     .join('');
// }

// module.exports = reverse;

// reverse('apple');

// SECOND SOLUTION using for loop


// declaring a temp var every time for loop called character
// iterable object is str
// function reverse(str) {
//   var reversed = '';
// // NEW SYNTAX for for loops
// for (let character of str) {
//   // take that char and add on str called reversed
//   reversed = character + reversed;
//   }
//   return reversed;
// }

// module.exports = reverse;

// reverse('apple');

// THIRD SOLUTION using array helper
function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;

reverse('apple');


// function reverse(str) {
//   return str.split('').reduce((reversed, character) => {
//     return character + reversed;
//   }, '');
// }

// module.exports = reverse;

// reverse('apple');




























