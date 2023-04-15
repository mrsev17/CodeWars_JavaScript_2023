// Write function bmi that calculates
// body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

"use strict";

const bmi = (weight, height) => {
    const calcBMI = weight / Math.pow(height, 2);
    if (calcBMI <= 18.5) return "Underweight";
    if (calcBMI <= 25) return "Normal";
    if (calcBMI <= 30) return "Overweight";
    if (calcBMI > 30) return "Obese";
};
