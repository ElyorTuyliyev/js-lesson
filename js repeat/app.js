var person = {
  firstname: `Ali`,
  lastname: `Alibekov`,
  year: 25,
};
person.firstname = `Alibek`;
person.lastname = `Alijonov`;
person.year = 30;

person[`firstname`] = `Bek`;
person[`lastname`] = `Qaxxorovich`;
person[`year`] = 50;
console.log(person); //object

var fruits = {
  tropik: `olma`,
  achchiq: `anor`,
  shirin: `nok`,
};
fruits.tropik = `ananas`;
fruits.achchiq = `gilos`;
fruits.shirin = `anjir`;
fruits[`tropik`] = `banana`;
fruits[`achchiq`] = `olcha`;
fruits[`shirin`] = `o'rik`;
console.log(fruits);

var arr = [`hello`, `hay`, `good`, `very`]; // array - massiv
arr[10] = `Tashkent`;
console.log(arr);

function hot(number) {
  // hot - kub
  //square-kvadrat
  return number * number * number;
}
function square(number) {
  // hot - kub
  //square-kvadrat
  return number * number;
}

var hotResult = hot(2);
console.log(`hot result ${hotResult}`);
var squareResult = square(5);
console.log(`square result ${squareResult}`);
