// let fullname = prompt(`Enter your nanme`);
// let fullnameSplite = fullname.split(" ");
// let firstName = fullnameSplite[0];
// let lastname = fullnameSplite[1];
// let lastnameToupper = lastname.toUpperCase();
// if (lastname.endsWith("a")) {
//   console.log(`Mis/Mrs. ${firstName} ${lastnameToupper[0]} `);
// } else {
//   console.log(`Mr. ${firstName} ${lastnameToupper[0]} `);
// }

var number = +prompt("enter number");
var gamePlayerground = [
  [0, 0, 1],
  [0, 1, 0],
  [0, 1, 0],
];
var numberCheck =
  gamePlayerground[0][number - 1] ||
  gamePlayerground[1][number - 4] ||
  gamePlayerground[2][number - 7];

if (numberCheck) {
  console.log(`siz g'olib bo'ldingiz`);
} else {
  console.log("Siz mag'lubiyatga uchradingiz");
}
