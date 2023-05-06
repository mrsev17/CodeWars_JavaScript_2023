// https://www.codewars.com/kata/55cb854deb36f11f130000e1/train/javascript

"use strict";

const weatherInfo = (temp) => {
    const convFahrToCelsi = (temp - 32) * (5 / 9);
    if (convFahrToCelsi > 0)
        return `${convFahrToCelsi} is above freezing temperature`;
    if (convFahrToCelsi < 0)
        return `${convFahrToCelsi} is freezing temperature`;
};
