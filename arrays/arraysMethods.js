const account1 = {
  owner: "Kamila Dynysiuk",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2023-03-23T17:01:17.194Z",
    "2023-03-17T23:36:17.929Z",
    "2023-03-25T10:51:36.790Z",
  ],

  currency: "EUR",
  locale: "pt-PT",
};
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//  every
console.log(movements.every((mov) => mov > 0)); // false
console.log(account4.movements.every((mov) => mov > 0)); //true all elements in array has number above 0

const deposit = (mov) => mov > 0;

// flat
// remove nested array, goes one level deep
const arr = [1, 3, 3, 4, [4, 6, 7], [3, 4, 5], 5];

console.log(arr.flat());
const deepNesting = [1, 3, 3, 4, [4, 6, , [6, 0, 4], 7], [3, 4, 5], 5];

console.log(deepNesting.flat(2));

// const overalBalnce = accounts
//   .map((acc) => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);

// flat Map , combane map and flat method, it works just for one level deep nesting

const overalBalnce = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);

// sorting arrays
movements.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});

movements.sort((a, b) => a - b);
console.log("asc", movements);

movements.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
});
movements.sort((a, b) => b - a);
console.log(movements);

// wys to create arra

console.log(new Array(2, 3, 4, 5, 0, 7, 7)); // [2,3,4,5,0,7,7]

const x = new Array(7);
console.log(x); // [empty x7]
x.fill(1, 3); // [empty x 3, 1,1,1,1,1]

/// array.from

const y = Array.from({ length: 7 }, () => 1);
console.log(y); // [1,1,1,1,1,1]
const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z); //[1, 2, 3, 4, 5, 6, 7]

const concertTitleCase = function (title) {
  const capitalize = (str) => str[0].toUpperCase() + str.slice(1);
  const exceptions = ["a", "an", "at", "with", "but", "and", "or", "on", "in"];

  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map((word) => (exceptions.includes(word) ? word : capitalize(word)))
    .join(" ");
  return titleCase;
};
// console.log(concertTitleCase("This is a nice title with text"));
// console.log(concertTitleCase("tThis is not too long title but enaught for it"));

// / which array to use?
// 1. when mutate original array
// add .push or .unshift
// remove  .pop ,  .shift ,  .splice
// other  .reverse ,  .sort , .fill

// 2. a new array
// compute from original -> .map
// filter -> .filter.portion of original  -> .slice
// addig original to other -> .concat
// flattering the original -> .flat , .flatMap

// 3. ann array index based on value -> indexof
// base on test condition -> .findIndex

// 4. ann array element
// based on test condition .find

// 5. know if array includes
// based on value .includes

// based on test condition .some , .every

// 6. a new string
// based on separator string .join

// 7. to transform to value
// based on accumulator .reduce

// 8. to loop array
// based on callback .forEach , -> doesn not create a new array just loop over it
