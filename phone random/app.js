var number = prompt(`Enter your nomber`);
var arr = [];
for (let i = 1; i <= number; i++) {
  var phoneNumber0 = Math.floor(Math.random() * 9);
  var phoneNumber1 = Math.floor(Math.random() * 9);
  var phoneNumber2 = Math.floor(Math.random() * 9);
  var phoneNumber3 = Math.floor(Math.random() * 9);
  var phoneNumber4 = Math.floor(Math.random() * 9);
  var phoneNumber5 = Math.floor(Math.random() * 9);
  var phoneNumber6 = Math.floor(Math.random() * 9);
  var fullPhone = `+99891-${phoneNumber0}${phoneNumber1}${phoneNumber2}-${phoneNumber3}${phoneNumber4}-${phoneNumber5}${phoneNumber6}`;
  arr.push(fullPhone);
}
if (arr.includes(fullPhone)) {
  console.log(arr);
} else console.log(arr);
// console.time("test");
// console.timeEnd("test");
