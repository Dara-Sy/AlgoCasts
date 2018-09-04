// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// more DRY

function reverseInt(n) {
  const reversed = n.toString()
    .split('')
    .reverse()
    .join('');

    return parseInt(reversed) * Math.sign(n);
}

reverseInt(200);

module.exports = reverseInt;

// helper function: sign
// .sign returns 1 or -1, depending on whether an integer is positive or negative


// longer way to solve

// function reverseInt(n) {
//   const reversed = n
//     .toString()
//     .split('')
//     .reverse()
//     .join('');

//     if (n < 0) {
//       return parseInt(reversed) * -1;
//     }
//     return parseInt(reversed);
// }

// reverseInt(200);

// module.exports = reverseInt;
