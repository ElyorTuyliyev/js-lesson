var arrOfPhones = [];
var phonesAmount = prompt("Enter amout of phone numbers");
function generatePhoneNumber() {
  var phoneString = "+99891";
  for (var j = 0; j < 7; j++) {
    var generatedNum = Math.floor(Math.random() * 10);
    phoneString += generatedNum;
  }
  return phoneString;
}
function addPhone(generatedNum) {
  if (arrOfPhones.includes(generatedNum)) {
    var newGeneration = generatePhoneNumber();
    addPhone(newGeneration);
  } else {
    arrOfPhones.push(generatedNum);
  }
}
for (var i = 0; i < phonesAmount; i++) {
  var generatedNum = generatePhoneNumber();
  addPhone(generatedNum);
}
console.log(arrOfPhones);
