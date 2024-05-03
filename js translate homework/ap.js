var enterWords = document.getElementById("words");

var translateRu = [
  {
    words: ["salom", "hello", "Саламатсызба"],
    translate: "Привет",
  },
  {
    words: ["kun", "day", "күні"],
    translate: "день",
  },
];

[
  {
    words: ["salom", "hello", "Саламатсызба"],
    translate: "hello",
  },
  {
    words: ["kun", "day", "күні"],
    translate: "day",
  },
];
[
  {
    words: ["salom", "hello", "Саламатсызба"],
    translate: "Саламатсызба",
  },
  {
    words: ["kun", "day", "күні"],
    translate: "күні",
  },
];

function translateWords(e) {
  e.preventDefault();
  if (enterWords == translateRu[0]) {
    console.log(translateRu[1]);
  } else {
    console.log(" this isn't word");
  }
}
