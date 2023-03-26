const age = 19;

const isOldEnoughs = age >= 18;
if (isOldEnoughs) {
  console.log('Sarah can do riving license ');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah need to wait ${yearsLeft}`);
}

// conditional terms (ternary operator)

const drinkingAlc = age >= 18 ? 'can drink wine' : 'drink just water';
