// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!
TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀
*/

const calcAverageHumanAge = function (dogs) {
  //1
  const average = dogs
    .map((dog) => (dog < 2 ? 2 * dog : 16 + dog * 4))
    .filter((age) => age >= 18)
    .reduce((acc, curr, i, arr) => acc + curr / arr.length, 0);
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
