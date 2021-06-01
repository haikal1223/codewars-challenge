// Odd or Even?\
/* 
* Task:
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).
* Link:
https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript
*/

const oddOrEven = (array) => {
  // const count = (total, num) => {
  //   return total + num;
  // };
  let arr = array.reduce((a, b) => a + b, 0);

  if (arr % 2 === 0) {
    return "Odd";
  } else {
    return "Even";
  }
};

const arr = [0, 2, 4];

console.log(oddOrEven(arr));

// Best Practice
/*
1. function oddOrEven(arr) {
  return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
}

2. function oddOrEven(array) {
  var result = 0;
  for (var i = 0; i < array.length; i++)
  {result+=array[i];}
  if (result%2 == 0)
  {return "even";}
  else{return "odd";}
}
*/
