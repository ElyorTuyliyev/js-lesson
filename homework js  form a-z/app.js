var a = {
  name: "A",
  age: 20,
};
b = { ...a };
console.log(a === b);

var fullName = document.getElementById("name");
var table = document.getElementById("table");
var arr = [];

function personSort() {
  var arrSort = arr.sort();
  return arrSort;
}

function personSortRevers() {
  var arrRevers = personSort().reverse();
  return arrRevers;
}

function personName(e) {
  e.preventDefault();
  arr.push(fullName.value);
  table.innerHTML = ``;
  table.innerHTML += `<tr>
  <td>
  ${[...arr]}
  </td>
  </tr>`;
}

function onChangeSelect(e) {
  if (e.value == "a-z") {
    table.innerHTML = ``;
    table.innerHTML += `<tr>
  <td>
  ${personSort()}
  </td>
  </tr>`;
  } else if (e.value == "z-a") {
    table.innerHTML = ``;
    table.innerHTML += `<tr>
  <td>
  ${personSortRevers()}
  </td>
  </tr>`;
  } else if (e.value == "default") {
    table.innerHTML = ``;
    table.innerHTML += `<tr>
  <td>
  ${[...arr]}
  </td>
  </tr>`;
  }
}
