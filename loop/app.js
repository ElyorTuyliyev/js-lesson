var text = `Salom bahor hayir qish mana keldi ish bahor kettibdi qish endi boshlanadi ish`;
var textArr = text.split(" ");

var obj = {};
for (var key of textArr) {
  if (obj[key]) {
    obj[key]++;
  } else {
    obj[key] = 1;
  }
}
console.lo(obj);
// console.log(textArr[i], i + 1);
// for (var key of textArr) {
//   console.log(key);
// }
// for (var key in textArr) {
//   console.log(key);
// }

// for (var i = 0; i < textArr.length; i++) {
//   for (let j = i + 1; j < textArr.length; j++) {
//     if (textArr[i] == textArr[j]) {
//       console.log(textArr);
//     }
//   }
// }
