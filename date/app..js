// let nowDate = new Date();
// let expectDate = new Date("April 1, 23:59:59");
// console.log(nowDate);
// console.log(
//   expectDate.getHours() - nowDate.getHours(),
//   expectDate.getMinutes() - nowDate.getMinutes() + 1,
//   expectDate.getSeconds() - nowDate.getSeconds() + 1
// );
// var monthToNumber = prompt("Enter month");
// if (monthToNumber == `1`) {
//   console.log(`2024-yil yanvar`);
// } else if (monthToNumber == `yanvar`) {
//   console.log(`1 - oy `);
// } else if (monthToNumber == `2`) {
//   console.log(`2024-yil fevral`);
// } else if (monthToNumber == `fevral`) {
//   console.log(`2 - oy `);
// } else if (monthToNumber == `3`) {
//   console.log(`2024-yil mart`);
// } else if (monthToNumber == `mart`) {
//   console.log(`3 - oy`);
// } else if (monthToNumber == `4`) {
//   console.log(`2024-yil aprel`);
// } else if (monthToNumber == `aprel`) {
//   console.log(`4 - oy `);
// } else if (monthToNumber == `5`) {
//   console.log(`2024-yil may`);
// } else if (monthToNumber == `may`) {
//   console.log(`5 - oy `);
// } else if (monthToNumber == `iyun`) {
//   console.log(`6 - oy `);
// } else if (monthToNumber == `6`) {
//   console.log(`2024-yil iyun`);
// } else if (monthToNumber == `7`) {
//   console.log(`2024-yil iyul`);
// } else if (monthToNumber == `iyul`) {
//   console.log(`7 - oy `);
// } else if (monthToNumber == `avgust`) {
//   console.log(`8 - oy `);
// } else if (monthToNumber == `8`) {
//   console.log(`2024-yil avgust`);
// } else if (monthToNumber == `sentyabr`) {
//   console.log(`9 - oy `);
// } else if (monthToNumber == `9`) {
//   console.log(`2024-yil sentyabr`);
// } else if (monthToNumber == `10`) {
//   console.log(`2024-yil oktybr`);
// } else if (monthToNumber == `oktybr`) {
//   console.log(`10 - oy `);
// } else if (monthToNumber == `noyabr`) {
//   console.log(`11 - oy `);
// } else if (monthToNumber == `11`) {
//   console.log(`2024-yil noyabr`);
// } else if (monthToNumber == `dekabr`) {
//   console.log(`12 - oy `);
// } else if (monthToNumber == `12`) {
//   console.log(`2024-yil dekabr`);
// } else {
//   console.log(`you have entered an incorrect value `);
// }
var oldYear = new Date(`2020`);
var nowYear = new Date(`2024`);
var oldYearTime = oldYear.getTime();
var nowYearTime = nowYear.getTime();
var fulltime = nowYearTime - oldYearTime;
var fulltimeMil = fulltime / 1000;
console.log(fulltimeMil / 60);
