"use strict";

const bookings = [];

const createBooking = function (flightName, numPassengers, price) {
  numPassengers = numPassengers || 1;
  price = 199 + numPassengers;

  const booking = {
    flightName,
    numPassengers,
    price,
  };
  bookings.push(booking);
  // console.log(booking)
};
createBooking("LH123", 2, 800);
createBooking("LH123", undefined, 800);

const flight = "LA123";
const passenger = {
  name: "Kamila Dynysiuk",
  passport: "12536478995",
};

const checkIn = function (flightNumber, passenger) {
  flightNumber = "CH123";

  passenger.name = `Mrs ${passenger.name}`;

  if (passenger.passport === "12536478995") {
    console.log("Checked in");
  } else {
    console.log("Wrong passport");
  }
};

// checkIn(flight, passenger);

const newPassword = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};

// odnosimy się do obiektu pasażera, numer paszporu jest zmieniony, przekazujemy wartość obiektu, który zawiera pamięć adresu , przekazujemy referencje do funkcji

newPassword(passenger);

checkIn(flight, passenger);

/// HOC higher order functions
// function that recives another function as an argument that returns a new function , or both
// it is possible because functions are first class function

//1. function that recivers another function
// const greet = ()=> console.log('Hey there ')
// btnClose.addEventListener('click', greet) //greet calback

//2. Function that returns new functions
function count() {
  let counter = 0;
  return function () {
    counter++;
  };
}

// create own higher order function

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");

  return [first.toUpperCase(), ...others].join(" ");
};

const transformer = function (str, fn) {
  console.log("Transfored string: " + fn(str));
};

transformer("JavaScript is the best!", upperFirstWord);

// create function which return new function

const greeting = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greeting("Hey");
// this is clousers usfull fo functional programming
greeterHey("Kamila");
//v2
const greeting2 = (greeting) => (name) =>
  console.log("greeting2", `${greeting} ${name}`);

greeting2("HI!")("Kamila");

//call methods

const airline = {
  airline: "Lot",
  iataCode: "LOT",
  bookings: [],
  book(flightNumber, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNumber}`
    );

    this.bookings.push({ flight: `${this.iataCode}${flightNumber}`, name });
  },
};

airline.book(123, "Kamila Dynysiuk");

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = airline.book;

const swiss = {
  airline: "Swiss airline",
  iataCode: "LX",
  bookings: [],
};
// book.call(eurowings, 23, "Anna Nowak");

// console.log(eurowings);

// apply method

const flightData = [567, "Kamila Dynysiuk"];
book.apply(eurowings, flightData);

console.log(eurowings);

// the best method
book.call(swiss, ...flightData);

//bind
// bind create new function

const bookEw = book.bind(eurowings);

bookEw(5, "Anna Nowak");

const bookEW23 = book.bind(eurowings, 23);

bookEW23("Kmila Dynysiuk");

eurowings.planes = 100;
eurowings.buyPlane = function () {
  console.log(this); // this point to eurowings
  this.planes++;

  console.log(this.planes);
};

document
  .querySelector(".buy")
  .addEventListener("click", eurowings.buyPlane.bind(eurowings));

//partial application we can preset parameters

const addTax = (rate, value) => value + value * rate;

console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

console.log("ADDvat", addVAT(100));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);

// console.log(addVAT2(23));

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.
Here are your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
HINT: Use many of the tools you learned about in this and the last section 😉
BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?
BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
GOOD LUCK 😀
*/

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer: function () {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n (Write option number)`
      )
    );
    console.log(answer);

    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults("string");
  },
  displayResults(type = "array") {
    if (type === "array") {
    } else if (type === "string") {
      // pool results  12, 2 , 5, 23

      console.log("Pool results are " + this.answers.join(", "));
    }
  },
};

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

// Immediately Invoke Function Expressions (IIFE)
//   function executed one , disappear after

const runOnce = function () {
  console.log("Thi run one , not more ");
};
//IIFE
(function () {
  console.log("this  will never run again ");
})();

(() => console.log("just run once , never again"))();

//Closures, happens automatically

//is the closed over variable env of the execution context in which a function was created , even after that execution context is gone.

// a closure makes sure that a function doesn't loose connection to variables that existed at the functions birth place

const secureBooking = function () {
  let passengersCount = 0;

  return function () {
    passengersCount++;
    console.log(`${passengersCount} passengers`);
  };
};

const booker = secureBooking();

booker();

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`Will start boarding in ${wait} seconds`);
};
const perGroup = 1000;
boardPassengers(180, 3);

//clousers challange
// This is more of a thinking challenge than a coding challenge 🤓
// Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!
// And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.
// GOOD LUCK 😀

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  document.querySelector("body").addEventListener("click", () => {
    header.style.color = "blue";
  });
})();
