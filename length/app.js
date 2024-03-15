// var information = prompt("enter information");
// var code = prompt("enter number");
// var code1 = prompt("enter number");
// var name = console.log(information);
// var length = console.log(information.length);
// var charAt = console.log(information.slice(code, code1));

// var text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus nisi
//     cumque autem doloremque ratione quaerat fuga saepe ipsam? Illum expedita
//     ipsam officia aliquam quo delectus laudantium consequatur, porro nobis`;
// var searchText = prompt();
// var indexOf = text.indexOf(searchText);
// console.log(text.slice(indexOf, text.indexOf(" ", indexOf)));

// var charcode = searchText.charCodeAt();
// if (charcode >= 65 && charcode < 90) {
//   console.log(searchText.toLowerCase());
// } else if (charcode >= 97 && charcode <= 122) {
//   console.log(searchText.toUpperCase());
// }
// let text = "   Apple, kiwi    ";
// let text1 = "Kiwi";
// let text2 = "Banana,";
// let son = "2";
// console.log(text.substr(0, 6));
// bu substr methudi 1 qiymati start, 2- qiymati lentgh

// console.log(text.toUpperCase());
//bu xamma xarflarni katta xarfda yozadi

// console.log(text.toLowerCase());
// bu xamma xarflarni kichik xarfda yozadi

// console.log(text.concat("", text2, text1));
//bu elementlarni bir biriga bog'laydi

// console.log(text.trim());
//trim bowidagi va oxiridagi  joylarni olib tashledi
//trimstart and trimEnd bowidan va oxiridan qirqadi

// console.log(son.padEnd(3, "0"));
//bu satrlarni to'ldirishga yordam beradi
// 1 qiymati lentgh 2-si kiruvchi element
// padstart end padEnd

// console.log(son.repeat(5));
// repeat bu takrorlash qancha takrorlaniwi

// console.log(text.replace("kiwi", "limon"));
// replace bu textni almashtirish

// let text = prompt("Enter text");
// let textsplite = console.log(
//   "so'z:" + text.split(" ").length,
//   "symbol:" + text.length
// );
// let textdoubleDots = text.indexOf(":");
// let textslise = text.slice(textdoubleDots - 2, textdoubleDots + 3);
// let textsplite = textslise.trim().split(":");
// let formatHour = textsplite[0].padstart(2,"0");
// let formatminut = textsplite[1].padstart(2,"0");
// var totalhour = ` ${formatHour}:${formatminut}`

// var enteredText = "hello world in tashkent "; //  prompt("Enter your text");

var enteredText = prompt("enter text");
var matchtext = enteredText.split(".");
var spliesText = matchtext[0];
var spliesText1 = matchtext[1];
var spliesText2 = matchtext[2];
var fulltext = spliesText.slice(2);
var worrdSplit = spliesText.split("");
var arrayWord1 = worrdSplit[0];
var arrayWord2 = worrdSplit[1];

if (arrayWord1 == arrayWord1.toUpperCase()) {
  console.log(arrayWord1.toLowerCase() + arrayWord2.toUpperCase() + fulltext);
} else if (arrayWord1 == arrayWord1.toLowerCase()) {
  console.log(arrayWord1.toUpperCase() + arrayWord2.toLowerCase() + fulltext);
}

console.log("full words: " + enteredText.split(" ").length);

var textQuestion = console.log(enteredText.includes("?"));
var textWords = console.log(spliesText.split(" ").length);

var textQuestion = console.log(enteredText.includes("?"));
var textWords = console.log(spliesText1.split(" ").length);

var textQuestion = console.log(enteredText.includes("?"));
var textWords = console.log(spliesText2.split(" ").length);
