// var roomFullLength = prompt(`Enter  room length`);
// var roomHeight = prompt(`Enter room height`);
// var roomLengthSplit = roomFullLength.split(`x`);
// var roomFullSquare =
//   2 * (roomLengthSplit[0] * roomHeight + roomLengthSplit[1] * roomHeight);
// var doorLength = prompt(`Enter  door length `);
// var doorNumber = prompt(`Enter  door number `);
// var doorLengthSplit = doorLength.split(`x`);
// var doorSquare = doorLengthSplit[0] * doorLengthSplit[1] * doorNumber;
// var windowLength = prompt(`Enter  window length `);
// var windowNumber = prompt(`Enter  window number `);
// var windowLengthSplit = windowLength.split(`x`);
// var windowSquare = windowLengthSplit[0] * windowLengthSplit[1] * windowNumber;
// var windowAndDoorSquare = doorSquare + windowSquare;
// var roomRemainingSquare = roomFullSquare - windowAndDoorSquare;
// var paintOneSquare = 200;
// console.log("Room is square " + roomRemainingSquare + " m/2");
// console.log(
//   "how much paint goes " + (roomRemainingSquare * paintOneSquare) / 5 + " litr"
// );

var roomSize = prompt("Enter  room length");
var roomHeight = prompt("Enter room height");
var doorSize = prompt("Enter  door length");
var doorsAmount = prompt("Enter  door number");
var windowSize = prompt("Enter  window length");
var windowsAmount = prompt("Enter  window number");
var PAINT_ONE_SQUARE = 200;
var PAINT_ONE_IN_LITER = 5;

function calcSquare(width, height, length) {
  return 2 * (width * height + length * height);
}

function calcUnitsSquare(width, height, amount) {
  return width * height * amount;
}

function formatToSize(text) {
  var splittedSize = text.split("x");
  var width = splittedSize[0];
  var length = splittedSize[1];
  return { width, length };
}

function calcSpentPaints(roomSquare) {
  return (roomSquare * PAINT_ONE_SQUARE) / PAINT_ONE_IN_LITER;
}

function calcSquare(size) {
  var splittedSize = formatToSize(size);
  var square = calcSquare(splittedSize.width, roomHeight, splittedSize.length);
  return square;
}

var splittedDoorSize = calcSquare(doorSize);

var splittedWindowSize = formatToSize(windowSize);
var windowSquare = calcUnitsSquare(
  splittedWindowSize.width,
  splittedWindowSize.length,
  windowsAmount
);

var windowAndDoorSquare = doorSquare + windowSquare;
var roomRemainingSquare = roomFullSquare - windowAndDoorSquare;

console.log("Room is square " + roomRemainingSquare + " m/2");
console.log(
  "how much paint goes " + calcSpentPaints(roomRemainingSquare) + " litr"
);
