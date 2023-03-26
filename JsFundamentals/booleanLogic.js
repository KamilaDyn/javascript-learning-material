// true && true = true
// true && false = false
//false && false = false
// false && false = false

//or
// true || true = true
// true || false = true
// false || false = false
// false || true = true

const age = 18;

const isGreater = age >= 30; //false
const isLess = age < 30; //true

!isGreater; // true
isGreater && isLess; //false

isGreater || isLess; //true
// negation / not operator !
!isGreater && isLess; //true
isGreater || !isLess; //false
