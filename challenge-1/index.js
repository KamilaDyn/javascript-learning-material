const mark = {
  height: 1.69,
  weight: 78,
};
const john = {
  height: 1.98,
  weight: 82,
};

const bmiMark = mark.weight / mark.height ** 2;
const bmiJohn = mark.weight / mark.height ** 2;
console.log(bmiMark);

const isHigherMark = bmiMark > bmiJohn;

console.log(isHigherMark);
