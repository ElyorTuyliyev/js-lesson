var FullName = document.getElementById("name");
var homeWork = document.getElementById("homework");
var lesson = document.getElementById("lesson");
var table = document.getElementById("table");
var comeOn = document.getElementById("comeOn");
var isCheckedComeOn = comeOn.checked;
var res = document.getElementById("res");

var students = [];

function submitForm(e) {
  e.preventDefault();
  var isCheckedHomework = homeWork.checked;
  var isCheckedLesson = lesson.checked;
  students.push({ name: FullName.value, isCheckedLesson, isCheckedHomework });

  console.log(come);
  // table.innerHTML += ` <tr>
  // <td>${FullName.value}</td>
  // <td>${isCheckedLesson}</td>
  // <td>${isCheckedHomework}</td>
  // </tr>`;
  // function comeOn() {}
}

function filterFunction(value, index, array) {
  var isCheked = isCheckedComeOn;
  if (isCheked) {
    array.forEach((element) => {
      value.isCheked;
      if (value.isCheckedComeOn) {
        res.innerHTML = `${value.name} darsga keldi`;
      }
    });
  }
}
