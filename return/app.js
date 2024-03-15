// function multiply(num1, num2) {
//   var dividednum = num1 / 2;
//   return dividednum * num2;
// }
// console.log(multiply(9, 6));
// console.log(multiply(8, 6));
// console.log(multiply(8, 6));

// let name = prompt("enter your name");
// let surname = prompt("enter your surname");
// let state = prompt("enter your state");
// let age = prompt("enter your age");

var name = prompt("Enter your name");
var isTeachers = teacher(name);
var surname = prompt("Enter your surname");
var state = prompt("Enter your state");
var age = year(prompt("Enter your year"));
var overold = toOver(age);

var person = {
  name: name,
  isTeachers,
  surname: surname,
  state: state,
  age: age,
  overold,
};

console.log(person);

function year(age) {
  return 2024 - age;
}

function toOver(age) {
  if (age >= 18) {
    return true;
  } else if (age < 18) {
    return false;
  }
}
function teacher(name) {
  if (name == "Abduboriy") {
    return "Teacher";
  } else {
    return "student";
  }
}
