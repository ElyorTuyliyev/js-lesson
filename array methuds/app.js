// let text = ["GM", "FORD", "BMW", "MERSEDES", 45, ["hello", "tashkent"]];
// let arraytext0 = console.log(text[0]);
// let arraytext1 = console.log(text[1]);
// let arraytext2 = console.log(text[2]);
// let arraytext3 = console.log(text[3]);
// let arraytext4 = console.log(text[4]);
// text[0] = "Chevrolet";
// let textarray = console.log(text.toString());
// console.log(text[5][0]);
// console.log(text[5][1]);
// console.log(text.length);
// console.log(text.at(0));
// // console.log(text.pop());
// let cars = text.push("Ferrari");
// console.log(text);

// var arr = [1, 2, 3, ["a", "b", "c", [4, 5, 6]]];
// console.log(arr[3][0]);
// console.log(arr[3][3][0]);

// var name = "Ali";
// var age = 10;
// var userLocation = "Toshkent";
// var arr = [name, age, userLocation];
// var myNewArr = new Array(20, 30, 50, 80, 100, "Ali", "Vali", "Boss");
// arr[0] = "Hasan";
// arr[5] = "Jizzax";
// console.log(arr);
// console.log(arr[0], arr[1], arr[2], arr[5]);
// console.log(myNewArr[myNewArr.length - 2]);
// console.log(myNewArr[myNewArr.length / 2]);
// var fruits = ["apple", "oringe", "banana"];
// var fruit = ["1", "2", "3"];
// console.log(fruits.pop());
// console.log(fruits.shift());
// console.log(fruits.push("kivi"));
// console.log(fruits.unshift("potato"));
// console.log(fruits);
// console.log(fruits.join(" .:. "));
// console.log(fruits.concat(fruit + " salom"));

var arr = ["apple", "oringe", "banana"];
var methuds = prompt("push pop shift  unshift toString join");
var enterText = prompt("Enter text ");

if (methuds == "push") {
  arr.push(enterText);
  console.log(arr);
} else if (methuds == "pop") {
  arr.pop();
  console.log(arr);
} else if (methuds == "shift") {
  arr.shift();
  console.log(arr);
} else if (methuds == "unshift") {
  arr.unshift(enterText);
  console.log(arr);
} else if (methuds == "toString") {
  console.log(arr.toString());
} else if (methuds == "join") {
  console.log(arr.join(enterText));
} else {
  console.log("There are no such array methods");
}
