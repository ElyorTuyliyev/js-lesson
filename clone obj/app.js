// function functions() {}
// function functions2() {}
// functions(functions2); //callback function

// var a = {
//   names: "Gamma",
//   age: 50,
//   city: "paris",
//   country: {
//     city: "yellow",
//   },
// };

// // var b = JSON.parse(JSON.stringify(a));
// // console.log(a === b)

// function cloneObj(value) {
//   if (value) {
//   }
// }

// Array.prototype.reduce = function (cb, initialValue) {
//   var res = initialValue;
//   var currentArray = this;
//   for (let i = 0; i < currentArray.length; i++) {
//     res = cb(res, currentArray[i], i, currentArray);
//   }
//   return res;
// };

// var arr = [1, 2, 3, 5, 6, 9];

// var res = arr.reduce((acc, current) => (acc += current), 0);
// console.log(res);

Array.prototype.delete = function (cb, initialValue) {
  var res = initialValue;
  var currentArray = this;
};

var arr = [1, 2, 3, 5, 6, 9];

var res = arr.length((acc, current) => (acc += current), 0);
console.log(res);
