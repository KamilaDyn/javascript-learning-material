// repeat until condition is true
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`lifting weight repetition ${rep}`);
// }

const friends = ['Anna', 'Jon', 'Elizabeth'];

for (let i = 0; i < friends.length; i++) {
  //   console.log(friends[i]);
}
const years = [1990, 1985, 1980];
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

//continue and break
const hasDrivingLicense = true;
const myInfo = [
  'Kamila',
  '1990',
  [1990, 1985, 1980],
  hasDrivingLicense,
  'Opole',
  ['Anna', 'Jon', 'Elizabeth'],
];
//only strings
for (let i = 0; i < myInfo.length; i++) {
  if (typeof myInfo[i] !== 'string') continue;

  //   console.log(myInfo[i], typeof myInfo[i]);
}

// break with number

for (let i = 0; i < myInfo.length; i++) {
  if (typeof myInfo[i] === 'string') break;

  //   console.log(myInfo[i]);
}

//looping backwards
//decrement

for (let i = myInfo.length - 1; i >= 0; i--) {
  console.log(myInfo[i]);
}
// loops inside loop

for (let exercise = 1; exercise < 4; exercise++) {
  //   console.log(`--starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    // console.log(`Lifting weight repetition ${rep}`);
  }
}

//while loop
// run while this condition is true
let rep = 1;
while (rep <= 10) {
  console.log(`Lofting weights repetition ${rep}`);
  rep++;
}
// the while loop is more versatile than for loop, which mean that it can be used  in a larger variety of situations . It does really need a counter, we put the counter here because we need it for this specific use case

// while loop need a condition to stay true for it to keep running, that can be any condition

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end ');
}

// while loop does really not have depends on any counter variable. So whenever you do need a loop without a counter , you can reach while loop, you don't know how many beforehand how many iterations the loop will have

// challenge

const bills = [22, 295, 176, 440, 37, 98, 768, 35];

const tips = [];
const totals = [];

const calcTips = (bill) => {
  return bill > -50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  const tip = calcTips(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
// console.log(tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage(totals));
