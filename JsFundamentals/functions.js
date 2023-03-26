// functions : is simple a piece of code that we can reuse over and over again in ours code

// its like a variable, but variable hold value, and function can hold one or more complete line of code
//function declaration
function logger() {
  console.log('My name is Kamila');
}

//calling , running or invoking function
logger(); //My name is Kamila

// function can also receive data
// we need to use parameters , what it is a specific only to this function and they will get defined once we call th function

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

// this two values of parameters are called arguments
fruitProcessor(5, 2); // Juice with 5 apples and 2 oranges

// capture , save value in to variable
const myYear = calcAge(1990); // 37

// function declaration
function calcAge(birthYear) {
  return 2037 - birthYear;
}

//function expressions - essentially a function value stored in a variable
// expressions produce values

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}; // we assigned this value into variable calcAge2

const age2 = calcAge2(1990);

// differences between function declaration and expression

//1.We can call function declarations before they are defined in the code , in expression function cannot be call like that

//Arrow function

const calcAge3 = (birthYear) => 2037 - birthYear;

// return actually happens implicitly , we don't have to write it , simple one line function

//more than one line code, need return statement

const yearsUntilRetainment = (birthYear) => {
  const age = 2037 - birthYear;
  const retainment = 65 - age;
  return retainment;
};

// arrow function to not get a so-called keyword
