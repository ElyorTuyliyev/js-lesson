var roomFullLength = prompt(`Enter  room length`);
var roomHeight = prompt(`Enter room height`);
var roomLengthSplit = roomFullLength.split(`x`);
var roomFullSquare =
  2 * (roomLengthSplit[0] * roomHeight + roomLengthSplit[1] * roomHeight);
var doorLength = prompt(`Enter  door length `);
var doorNumber = prompt(`Enter  door number `);
var doorLengthSplit = doorLength.split(`x`);
var doorSquare = doorLengthSplit[0] * doorLengthSplit[1] * doorNumber;
var windowLength = prompt(`Enter  window length `);
var windowNumber = prompt(`Enter  window number `);
var windowLengthSplit = windowLength.split(`x`);
var windowSquare = windowLengthSplit[0] * windowLengthSplit[1] * windowNumber;
var windowAndDoorSquare = doorSquare + windowSquare;
var roomRemainingSquare = roomFullSquare - windowAndDoorSquare;
var paintOneSquare = 300;
console.log("Room is square " + roomRemainingSquare + " m/2");
console.log(
  "how much paint goes " +
    (roomRemainingSquare * paintOneSquare) / 3.3 +
    " litr"
);

//1 metr kvadratga 200gr kraska
