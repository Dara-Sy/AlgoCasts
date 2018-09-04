// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// most straightforward solution for palindrome

// function palindrome(str) {
//   // reverse the str
//   const reversed = str
//     .split('')
//     .reverse()
//     .join('');

//   return str === reversed;

// }


// example of array helper called every function

// arr = [0, 10, 14];

// arr.every((val) => val > 5);

// one solution though not ideal
// advanced array helper - EVERY
// compares index 0 to the last
// compares index 1 to the second last
// compares index 2 to the third last
// doing TWICE as much work it needs to do


function palindrome(str) {
  // change str into array to use array helper
  // return the result of the every function call
  // first arg is the each char of the array
  // second arg is the index of element we are iterating
  // first time funct is called, i is 0
  return str.split('').every((char, i) => {
    //  return comparison between current element & mirrored element at end of array
    // FIVE elements in array, FOUR indices
    // str.length - i , increments every step of the loop
    // minus 1 is the overall length but we are zero indexed with JS arrays
    return char === str[str.length - i - 1];
  });
}

module.exports = palindrome;

palindrome('abba');
