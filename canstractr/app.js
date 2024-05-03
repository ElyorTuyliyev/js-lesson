var name_input = document.getElementById("name");
var magazine = document.getElementById("magazine");
var bullet = document.getElementById("bullet");
var weight = document.getElementById("weight");
var text__wrapper = document.getElementById("text__wrapper");

function weapons(name, magazine, bullet, weight) {
  this.name = name.value;
  this.magazine = magazine.value;
  this.bullet = bullet.value;
  this.weight = weight.value;

  this.getInfo = function () {
    return `weapons${this.name} ,  weapons${this.magazine} ,weapons${this.bullet} ,weapons${this.weight}`;
  };
}

function submitForm(e) {
  e.preventDefault();
  text__wrapper.innerHTML = "";
  var soldier1 = new weapons(name_input, magazine, bullet, weight);

  text__wrapper.innerHTML += `
  <p>${soldier1.getInfo()}</p>
  `;

  text__wrapper.innerHTML += `
  <p>${soldier1.getInfo()}</p>
  `;
}
