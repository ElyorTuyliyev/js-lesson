var GRADIENT_TYPES = ["linear-gradient", "radial-gradient", "conic-gradient"];
var container = document.getElementById("container");

function generateColors() {
  var redColor = Math.floor(Math.random() * 255);
  var greenColor = Math.floor(Math.random() * 255);
  var blueColor = Math.floor(Math.random() * 255);

  return `rgb(${redColor},${greenColor},${blueColor})`;
}

function formatToGradient(colors) {
  var colorDeg = Math.floor(Math.random() * 360);
  var gradientTypeIndex = Math.floor(Math.random() * 3);
  var gradientType = GRADIENT_TYPES[gradientTypeIndex];

  if (gradientType === "linear-gradient") {
    return `${gradientType}(${colorDeg}deg,${colors})`;
  }
  return `${gradientType}(${colors})`;
}

function display(gradient) {
  container.innerHTML += `
  <div class="colorCard">
         <div class="gradinet" style="background:${gradient}"></div>
          <div  id="gradinet"></div>
          <div class="random-color"><span class="color-name">background:${gradient}</span></div>
  </div>
  `;
}

function submitForm(e) {
  e.preventDefault();
  var colorsAmount = e.target.amountOfColors.value;
  container.innerHTML = "";

  for (var i = 0; i < colorsAmount; i++) {
    var colors = "";
    var colorsInGradient = Math.floor(Math.random() * 4 + 2);

    if (colorsInGradient < 2) {
      colorsInGradient = 2;
    }
    for (var c = 0; c < colorsInGradient; c++) {
      if (colorsInGradient === c + 1) {
        colors += generateColors();
      } else {
        colors += generateColors() + ",";
      }
    }
    var gradient = formatToGradient(colors);
    display(gradient);
  }
}
// function submitForm(e) {
//   e.preventDefault();
//   var numBlocks = e.target.amountOfColors.value;

//   const block = document.createElement("div");
//   block.classList.add("block");

//   for (let i = 0; i < numBlocks; i++) {
//     var color_1 = Math.random().toString(16).slice(2, 8);
//     var color_2 = Math.random().toString(16).slice(2, 8);
//     var color_3 = Math.random().toString(16).slice(2, 8);
//     var color_4 = Math.random().toString(16).slice(2, 8);
//     var color_5 = Math.random().toString(16).slice(2, 8);

//     color_1 = `#${color_1}`;
//     color_2 = `#${color_2}`;
//     color_3 = `#${color_3}`;
//     color_4 = `#${color_4}`;
//     color_5 = `#${color_5}`;

//     container.innerHTML += `<div class="colorCard">
//            <div class="gradinet" style="background:linear-gradient(270deg, ${color_1}, ${color_2}, ${color_3}, ${color_4}, ${color_5})"></div>
//            <div  id="gradinet linear-gradient(270deg, ${color_1}, ${color_2}, ${color_3}, ${color_4}, ${color_5})""></div>
//            <div class="random-color"><span class="color-name">background:linear-gradient(270deg, rgba(${color_1}, ${color_2}, ${color_3}, ${color_4}, ${color_5}))</span></div>
//         </div>`;
//   }
// }
