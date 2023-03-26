const arr = [23, 56, 11];

console.log(arr.at(-1));
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);

// if you want to get last element from array ,count from last element or do something with 'methiod chanining' use at,

// if get quick value use just bracket notation

// at method also works for string

console.log("kamila".at(-1));

//loop for each

const movements = [200, 459, -400, 3000, -600, 102, 10, -300];

for (const [i, movement] of movements.entries) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}:  You withdraw ${Math.abs(movement)}`);
  }
}

movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Movement ${index + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1}: You withdraw ${Math.abs(movement)}`);
  }
});

//sort
const sorting = movements.sort();
console.log("sort", sorting);
const desc = movements.sort(function (a, b) {
  return b - a;
});
console.log("desc", desc);

// we should use forEach , cannot brak out , always will loop over entires array
// when we need to break up loop , we should use for loop

//Map

const currencies = new Map(
  ["USED", "United State dollar"],
  ["EUR", "Euro", "GBP", "Pound Sterling"]
);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

//Set
//set doesnt have index
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR", "USD"]);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}:${value}`);
});
