var enterNumber = prompt(`Enter number`);
var match = false;
for (let i = 0; i < 6; i++) {
  var numberRandom = Math.floor(Math.random() * 20);
  console.log(numberRandom);
  if (enterNumber == numberRandom) {
    match = true;
  }
}

if (match) {
  console.log(`you win`);
} else {
  console.log(`you lose`);
}
