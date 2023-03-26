'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     const output = `You are ${age}, born in ${birthYear}`;
//   }
//   return age;
// }

const firstName = 'Kamila';

// The this Keyword in Practice
// const calcAge = function (birthYear) {
// //   console.log(2037 - birthYear);
// //   console.log(this);
// };
// const calcAgeArrow = (birthYear) => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1980);
const kamila = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
kamila.calcAge();
const anna = {
  year: 2017,
};
anna.calcAge = kamila.calcAge;
anna.calcAge();
const f = kamila.calcAge;
f(); //undefined  NAN
