var number = prompt(`Enter your nomber`);
for (let i = 1; i <= number; i++) {
  var phoneNumber = Math.floor(Math.random() * 9);
  var phoneNumber1 = Math.floor(Math.random() * 9);
  var phoneNumber2 = Math.floor(Math.random() * 9);
  var phoneNumber3 = Math.floor(Math.random() * 9);
  var phoneNumber4 = Math.floor(Math.random() * 9);
  var phoneNumber5 = Math.floor(Math.random() * 9);
  var phoneNumber6 = Math.floor(Math.random() * 9);

  console.log(
    `+99891${phoneNumber}${phoneNumber2}${phoneNumber3}${phoneNumber4}${phoneNumber4}${phoneNumber5}${phoneNumber6}`
  );
}
