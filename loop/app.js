var text = `Salom bahor hayir qish mana keldi bahor kettibdi qish endi boshlanadi ish.`;
var textArr = text.split(" ");
for (var i = 0; i < textArr.length; i++) {
  for (var j = i + 1; i < textArr.length; i++) {
    console.log(textArr[i], j);
  }
}
console.log(textArr[i], i + 1);
for (var key of textArr) {
  console.log(key);
}
for (var key in textArr) {
  console.log(key);
}

// for (var i = 0; i < textArr.length; i++) {
//   for (let j = i + 1; j < textArr.length; j++) {
//     if (textArr[i] == textArr[j]) {
//       console.log(textArr);
//     }
//   }
// }
