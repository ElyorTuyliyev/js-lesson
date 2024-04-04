var number = +prompt(`Enter number`);
var numberRandom = Math.floor(Math.random() * number);
var numberRandom1 = Math.floor(Math.random() * number);
var numberRandom2 = Math.floor(Math.random() * number);
var numberRandom3 = Math.floor(Math.random() * number);
var numberRandom4 = Math.floor(Math.random() * number);
var numberRandom5 = Math.floor(Math.random() * number);
console.log(
  numberRandom,
  numberRandom1,
  numberRandom2,
  numberRandom3,
  numberRandom4,
  numberRandom5
);
console.log(
  `max-number ` +
    Math.max(
      numberRandom,
      numberRandom1,
      numberRandom2,
      numberRandom3,
      numberRandom4,
      numberRandom5
    )
);
console.log(
  `min-number ` +
    Math.min(
      numberRandom,
      numberRandom1,
      numberRandom2,
      numberRandom3,
      numberRandom4,
      numberRandom5
    )
);
