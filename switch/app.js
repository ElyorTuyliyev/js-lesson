// switch (30) {
//   case value:
//     break;

//   default:
//     break;
// }

// var fullname = "Brendan Eich. ";
// var born = "1961-yil 4-iyulda tu'ilgan. ";
// var where = "AQSHning Pensilvaniya statida tug'ilgan. ";
// var job = "Brave Software kompaniyasining ijrochi direktori. ";
// var study =
//   "Eich bakalavr darajasini Santa Klara okrugi universitetida olgan. U 1986-yilda Urbana-Champaigndagi Illinoys universitetida magistrlik darajasini oldi. ";
// var whenJSbuild =
//   "Dastlab bu til Mocha deb nomlangan, lekin 1995-yil sentabrida LiveScript deb oʻzgartirilgan va nihoyat – Sun Microsystems bilan qoʻshma eʼlonda dekabr oyida JavaScript deb nomlangan . ";
// var now_where_work =
//   "Hozirda u Brave Software kompaniyasining ijrochi direktori. ";
// var person = {
//   fullname: fullname,
//   born: born,
//   where: where,
//   job: job,
//   study: study,
//   buldJs: whenJSbuild,
//   now_where_work: now_where_work,
//   getInfo: function () {
//     console.log(this);
//   },
// };
// var piecesInformation = prompt(
//   "fullname , born, where, job ,  study, buldJs , now_where_work, "
// );
// console.log(person[piecesInformation]());

// document.write(person[piecesInformation]);
var nameText = `Lo{rEm ipsum dolor, sit amet consectetur adipisicing elit. Dolorem tempora
molestias architecto dicta sapiente, rerum ea officia alias assumenda
quaerat nisi quisquam asperiores neque? Autem, excepturi, aperiam architecto
vero vel quaerat iusto officiis quibusdam rerum earum assumenda consequatur,
nulla eaque quod illum fugiat nam dolore? Perferendis ratione velit
aspernatur necessitatibus eius dolore nulla repellendus dicta. Pariatur enim
aliquid iusto porro officiis, nam vitae, quasi consequatur aliquam iure aut
id sint, reprehenderit eaque minus! Perferendis eaque exercitationem in, rem

 `;
var enteredIndex = prompt("enter number");
var length = console.log(nameText.length);
var chartcode = nameText.charCodeAt(enteredIndex);
console.log(chartcode);
if (chartcode > 40 && chartcode <= 90) {
  console.log("katta qiymat");
} else if (chartcode > 90 && chartcode <= 122) {
  console.log("kichkina qiymat");
} else {
  console.log("bu simvil bo'lishi mumkun");
}
