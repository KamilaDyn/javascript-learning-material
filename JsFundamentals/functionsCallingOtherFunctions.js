function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apple, oranges) {
  const applePieces = cutFruitPieces(apple);
  const orangesPieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apples and ${orangesPieces} pieces of oranges`;
  return juice;
}

console.log(fruitProcessor(2, 3));

// why not simply multiply both of the input values by four and call it a day ?
// dry principle , do not change it in every places which can cause bugs , coding mistakes . Its better to put that functionality into its own function
