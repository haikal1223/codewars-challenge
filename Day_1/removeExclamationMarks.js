// Remove exclamation marks
/* 
* Task:
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
* Link:
https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript
*/

const removeExclamationMarks = (s) => {
  return s.replace(/!/g, "");
};

console.log(removeExclamationMarks("Hello World ! !"));

// console.log(string.split(""));
