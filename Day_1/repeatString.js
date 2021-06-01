/*
 * String Repeat
 * Write a function called repeatStr which repeats the given string string exactly n times.
 * https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/solutions/javascript
 */

repeatString = (n, s) => {
  var text = "";
  for (var i = 0; i < n; i++) {
    text += s;
  }
  return text;
};

console.log(repeatString(5, "ha"));

// Best Practice
/* function repeatStr (n, s) {
     return s.repeat(n);
}
*/
