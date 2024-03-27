var text = `hello world hello`;
var textArr = text.split(" ");
// for (var i = 0; i < textArr.length; i++) {
//   console.log(textArr[i], i);
// }
// for (var key of textArr) {
//   console.log(key);
// }
// for (var key in textArr) {
//   console.log(key);
// }

for (var i = 0; i < textArr.length; i++) {
  for (let j = i + 1; j < textArr.length; j++) {
    if (textArr[i] == textArr[j]) {
      console.log(textArr);
    }
  }
}
