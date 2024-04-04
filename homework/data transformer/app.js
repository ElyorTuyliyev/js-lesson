var format = prompt(`Enter date`);
var dateNow = new Date();
var year = dateNow.getFullYear();
var month = dateNow.getMonth() + 1;
var day = dateNow.getDate();
var dateNowToreplaceYear = format
  .replace("YYYY", year)
  .replace("MM", month)
  .replace("DD", day);
console.log(dateNowToreplaceYear);
