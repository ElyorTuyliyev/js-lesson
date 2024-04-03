var enteredDate = prompt(`Enter date`);
var dateNow = new Date();
var year = dateNow.getFullYear();
var month = dateNow.getMonth() + 1;
var day = dateNow.getDate();
var dateNowTorepliceYear = enteredDate.replace("YYYY", year);
var dateNowTorepliceMonth = dateNowTorepliceYear.replace("MM", month);
var dateNowTorepliceDay = dateNowTorepliceMonth.replace("DD", day);
console.log(dateNowTorepliceDay);
