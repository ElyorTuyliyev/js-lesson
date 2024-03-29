var fruitsName = prompt(`enter fruits name`);

var fruitsNameArr = fruitsName.split(` `);
var arrSort = prompt(`entre array sort methuds`);

if (arrSort == `a-z`) {
  console.log(
    fruitsNameArr.sort(function (a, b) {
      return a - b;
    })
  );
} else if (arrSort == `z-a`) {
  console.log(
    fruitsNameArr.sort(function (a, b) {
      return b - a;
    })
  );
} else if (arrSort == `reverse`) {
  console.log(fruitsNameArr.reverse());
} else {
  console.log(`bu qiyamt yo'q`);
}
