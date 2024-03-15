// var number = 3.1;
// var number2 = 3;
// console.log(number + number2);
// var x = 125e10;
// console.log(x);

// var x = 999999999999999;
// console.log(x);

// var x = 9999999999999999;
// console.log(x);

// let x = 0.2 + 0.1;
// console.log(x);

// let y = (0.2 * 10 + 0.1 * 10) / 10;
// console.log(y);

// let x = "10" / "Apple";  //NaN
// console.log(x);

// let x = 2 / 0;
// let y = -2 / 0;
// console.log(x);
// console.log(y); //infinity

// let x = 500.415415;
// console.log(x.toFixed(4));

// let x = 10;
// let y = new Number(10);
// console.log(x == y);

// let x = new Number(10);
// let y = new Number(10);
// console.log(x === y);

// let name = "b" + "a" + +"a" + "a";
// console.log(name);

// 2- vazifa
// let number = Number(prompt("enter text"));
// let systemnumber = Number(prompt("enter text"));
// let numbersystem = number.toString(systemnumber);
// console.log("number: " + number);
// console.log("system: " + numbersystem);

// 1 - vazifa;
var textnumber = Number(prompt("enter number"));
console.log(parseInt(textnumber));
console.log(textnumber.toFixed(2));

if (!isNaN(textnumber)) {
  console.log("Bu raqam");
} else {
  console.log("Bu raqam emas");
}

if (Number.isSafeInteger(textnumber)) {
  console.log("bu raqam safe intejeriga kiradi");
} else {
  console.log("bu raqam safe intejeriga kirmaydi");
}
