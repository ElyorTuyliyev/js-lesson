var names = prompt("Enter name");
var surname = prompt("Enter surname");
var age = prompt("Enter age");
var country = prompt("Enter country");
var city = prompt("Enter city");
var person = {
  name: names,
  surname: surname,
  age: age,
  country: country,
  city: city,
};
var arrPerson = [
  "Name: " + names,
  "Surname: " + surname,
  "Age: " + age,
  "Country: " + country,
  "City: " + city,
];
console.log(arrPerson);
console.log(person);
console.log(arrPerson.toString());
if (age >= 18 && age <= 45) {
  console.log("Sizga chet elga chiqishga ruxsat");
} else if (age < 18) {
  console.log(
    "Yoshingiz yetmaganligi uchun sizga chet elga chiqishga ruxsat yo'q"
  );
} else {
  console.log(
    "sizni yoshingiz katta bo'lganligi sababli chet elga boraolmeysz"
  );
}

if (country == "O'zbekiston") {
  console.log("siz O'zbekiston fuqorosisz");
} else {
  console.log("siz chet el fuqarosisz");
}
