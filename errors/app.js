// var x;
// x.push("hey is not sleeping");

// console.log(x);

// function hello() {
//   console.log("apple");
// }

// hellos();
// var wrapper = document.getElementsByTagName("body");
// for (let i = 0; i < 30; i++) {
//   wrapper.innerHTML += `<div class="hello1">5</div> </br>`;
// }

function SubmitForm(event) {
  event.preventDefault();
  var target = event.target;
  var age = target.age.value;

  console.log(target + age);
}
