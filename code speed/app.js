var text__code = document.getElementById("text__code");
var codeSpeed = document.getElementById("code__speed-wrapper");

function submitForm(e) {
  codeSpeed.innerHTML = "";
  e.preventDefault();
  //   console.time();
  var time1 = performance.now();
  codeSpeed.innerHTML += `
  <p>${text__code.value}</p>

  `;
  var time2 = performance.now();
  codeSpeed.innerHTML += time2 - time1;
  //   console.timeEnd();
}
