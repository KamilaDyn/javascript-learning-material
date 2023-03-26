console.log(Number("23")); // change to number 23
console.log(+"23"); // the same as number 23

// parsing
Number.parseInt("30px", 0); // 30
Number.parseInt("e23", 10); //23

// check read if is a number from string
Number.parseFloat("   2.5rem  "); //2.5

// check if number is not a number
Number.isNaN(20); // false
Number.isNaN("20"); // false
Number.isNaN(+"20X"); // true
Number.isNaN(23 / 0); // false

// if value is number, better option

Number.isFinite(20); // false
Number.isFinite("20"); //false
Number.isFinite(+"20X"); //false

// check if number is integer

Number.isInteger(23); //true

Number.isInteger(23 / 0); //false

Math.sqrt(25); //5

Math.max(5, 18, 11, 23, 2); // 23

Math.min(5, 18, 11, 2); // 2

const numb = Math.PI * Number.parseFloat("10px") ** 2;

// Mathh random  number bettween 0 ...1

const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1) + min;
/// 0...1=>0...(max-min)=>min...max

//raunding integers
Math.round(23.3); //23

Math.ceil(23.3); //23

Math.floor(23.3); //23
Math.floor("23.9");

Math.trunc(23.3); //23

Math.trunc(-23.3); // -23
Math.floor(-23.3); // -24

// Rounding decimals

console.log((2.7).toFixed(2)); //2.7
console.log((2.345).toFixed(3)); //2.345
console.log((2.345).toFixed(2)); //2.35

//remainder operator

console.log(5 % 2);
console.log(5 / 2);

console.log(8 % 3); // 2
console.log(8 / 3); // 8 = 2*3+2
const isEven = (n) => n % 2 === 0;
console.log(isEven(8)); //true
