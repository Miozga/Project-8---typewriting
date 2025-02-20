const spnText = document.querySelector(".text");
const txt =
  "fghdthgikjhfghfg tydjdfgjdtgjsfdytjsftgh jtdhdfgujrty rtjhtghdsfgu tyhdgyf kldjfvoidfjg hjkgijjhngkmdfgvnbiudsfg dfjkghd9ugh bvkjdhgosdfibv dsijghsdituf";

let indexText = 0;
const time = 120;
const addLetter = () => {
  spnText.textContent += txt[indexText];
  indexText++;

  if (indexText === txt.length) clearInterval(indexTyping);
};
const indexTyping = setInterval(addLetter, time);
