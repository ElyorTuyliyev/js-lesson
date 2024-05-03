var dataBox = document.getElementById("clock__wrapper");
var hours = 0;
var minutes = 0;
var seconds = 0;

function update() {
  d = new Date();
  seconds = d.getSeconds();
  minutes = d.getMinutes();
  hours = d.getHours();
  dataBox.innerHTML += `<div class="box__wrapper1"> ${hours}</div> <div class="box__wrapper2"> ${minutes}</div> <div class="box__wrapper3"> ${seconds}</div>`;
}

setInterval(update, 1000);
