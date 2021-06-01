/*
 * Gravity Flip
 * Link:
 * https://www.codewars.com/kata/5f70c883e10f9e0001c89673/train/javascript
 */

const flip = (d, a) => {
  if (d === "R") {
    return a.sort((a, b) => a - b);
  } else {
    return a.sort((a, b) => b - a);
  }
};

const arr = [3, 2, 1, 2];

console.log(flip("L", arr));

// Best Practice
/*
1. const flip = (d, a) => a.sort((x, y) => d === 'R' ? x - y : y - x);

2. const flip = (d, a) => d === 'R' ? a.sort((a, b) => a - b) : a.sort((a, b) => b - a)

*/
