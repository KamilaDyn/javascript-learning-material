//  operations on date

const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const date1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 4));

console.log(date1);

const options = {
  hour: "numeric",
  minute: "numeric",
  day: "numeric",
  month: "long",
  year: "numeric",
  weekday: "long",
};
const locale = navigator.language;

const labelDate = new Intl.DateTimeFormat(locale, options).format(now);

console.log(labelDate);

/// timout

const ingredients = ["olives", "spinach"];
const pizzzatimer = setTimeout(
  (ing1, ing2) => {
    console.log(`Here is your pizza with ${ing1} and ${ing2}`);
  },
  3000,
  ...ingredients
);
if (ingredients.includes(spinach)) clearTimeout(pizzzatimer);

//// executing every sec
setInterval(() => {
  const now = new Date();
}, 1000);
