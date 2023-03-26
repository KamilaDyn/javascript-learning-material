// convertion is when we manually convert  from one type to other

const inputYear = '1990';
// convert to Number
const convertToNumber = Number(inputYear);

// trying convert string (not number)
const myName = 'Kamila';
const convertName = Number(myName); // NaN not a number , it's mean it is invalid number

// convert to string

const convertToString = String(30); //'30'

//we cannot convert something to undefined or null, make not sense

// type coercion
// coercion is when JavaScript automatically converts types behind scene for us

const sentence = 'I am ' + 30 + ' years old';
// plus operator  is used to trigger a coercion to string
// whenever there is an operation between a string and a number will be converted to string

// not all types do coercion
const coercionNumber = '23' - '10' - 3; //10
// minus operator triggers the opposite conversion , strings are converted to number

const multiplyNumber = '23' * '2'; // 46
// multipler and devided operations convert to number

let n = '1' + 1; //11 , to string
n = n - 1; //10 , to number
// 10
const otherPlus = 2 + 3 + 4 + '5'; //'95'
console.log('10' - '4' - '3' - 2 + '5'); //15
