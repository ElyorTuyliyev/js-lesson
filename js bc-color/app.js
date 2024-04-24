var numberBc = document.getElementById("number");
var box__wrapper = document.getElementById("boxBc");

function randomNumber() {
  var arr = [];
  for (let i = 0; i < 6; i++) {
    var numberRandom = Math.floor(Math.random() * 10);
    arr.push(numberRandom);
  }
  return arr.join("");
}

function randomGradient() {
  var linearGra = ["linear-gradient(#${color1},#${color2})"];
}

function submitForm(e) {
  e.preventDefault();
  box__wrapper.innerHTML = "";
  for (var i = 0; i < numberBc.value; i++) {
    var color1 = randomNumber();
    var color2 = randomNumber();
    box__wrapper.innerHTML += `
        <div class="bc__color-card" style="background-image: linear-gradient(#${color1},#${color2});">
        <p class="color__text">#${color1},#${color2}</p>
        </div>
        `;
  }
}
