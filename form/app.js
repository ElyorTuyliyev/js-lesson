let city = document.getElementById("city");
let phone = document.getElementById("phone");
let table = document.getElementById("table");
let cityName = document.getElementById("nameCity");
let cardNumber = document.getElementById("number__card");
let setNumber = new Set();

function submitForm(e) {
  e.preventDefault();
  // let data = { city: city.value, phone: phone.value };
  table.innerHTML += `
    ${`
       <tr>
          <td style="padding:10px;">${city.value}</td>
          <td style="padding:10px;">${phone.value}</td>
       </tr>
      `}
  `;
  nameCity.innerHTML += `
  <option value="${phone.value}">${city.value}</option>
  `;
}

function generateNumber() {
  var phoneCode = cityName.value;
  for (let i = 0; i < 7; i++) {
    var randomNumber = Math.floor(Math.random() * 10);
    phoneCode += randomNumber;
  }
  return phoneCode;
}

function allNumber() {
  setNumber.clear();
  for (var j = 1; j <= 50; j++) {
    setNumber.add(generateNumber());
  }
  tableRun();
}

function tableRun() {
  cardNumber.innerHTML = " ";
  setNumber.forEach((phone) => {
    cardNumber.innerHTML += `
  <div
  class="card"
  style="border: 1px solid rgb(159, 159, 159); border-radius:10px; padding: 10px"
>${phone}</div>
  `;
  });
}
tableRun();
