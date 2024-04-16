// Temperature is always 293
const kelvin = 0;
// Temperature in celsius
const celsius = kelvin - 273;
// Converting celsius to fahrenheit
let fahrenheit = celsius * (9/5) + 32;
// Rounding fahrenheit to a whole number
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
console.log(`The temperature is ${kelvin} degrees Kelvin`);
console.log(`The temperature is ${celsius} degrees Celcius`);
