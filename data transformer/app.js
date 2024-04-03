var enteredDate = prompt(`Enter date`);
var dateNow = new Date();
var year = dateNow.getFullYear();
var month = dateNow.getMonth() + 1;
var day = dateNow.getDate();
var dateNowToreplaceYear = enteredDate.replace("YYYY", year);
var dateNowToreplaceMonth = dateNowToreplaceYear.replace("MM", month);
var dateNowToreplaceDay = dateNowToreplaceMonth.replace("DD", day);
console.log(dateNowToreplaceDay);
