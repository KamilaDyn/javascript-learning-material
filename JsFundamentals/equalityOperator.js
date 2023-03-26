const age = '18';

if (age === 18) {
  console.log('You are adult, strick operator');
}
if (age == '18') {
  console.log('You are adult, loose operato');
}

//The triple equals doesn't perform type coercion.
// Double equal do coercion
//string is converted to number
//tip is better to convert the value manualy and compere, to avoid using double operator
