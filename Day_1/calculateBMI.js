/*
 * Calculate BMI
 * Write function bmi that calculates body mass index (bmi = weight / height2).
 * if bmi <= 18.5 return "Underweight"
 * if bmi <= 25.0 return "Normal"
 * if bmi <= 30.0 return "Overweight"
 * if bmi > 30 return "Obese"
 * https://www.codewars.com/kata/57a429e253ba3381850000fb/train/javascript
 */

const bmi = (w, h) => {
  let count = w / (h * h);

  // if (count <= 18.5) {
  //   return "Underweight";
  // } else if (count <= 25.0) {
  //   return "Normal";
  // } else if (count <= 30.0) {
  //   return "Overweight";
  // } else {
  //   return "Obese";
  // }

  /*
   * Trying with switch case, but not return the right ones.
   */
  // switch (count) {
  //   case count <= 18.5:
  //     return "Underweight";
  //   case count <= 25.0:
  //     return "Normal";
  //   case count <= 30.0:
  //     return "Overweight";
  //   default:
  //     return "Obese";
  // }
};

/**
 * Best Practice
 function bmi(weight, height) {
  var formula = (weight / Math.pow(height, 2));
  switch (true) {
    case formula <=18.5:
    return 'Underweight';
    case formula <=25.0:
    return 'Normal';
    case formula <=30:
    return 'Overweight';
    default:
    return 'Obese';
    
  }
} 
**/

console.log(bmi(70, 1.7));
