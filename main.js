const spnText = document.querySelector(".text");
const spnCursor = document.querySelector(".cursor");
const txt =
  "fghdthgikjhfghfg tydjdfgjdtgjsfdytjsftgh jtdhdfgujrty rtjhtghdsfgu tyhdgyf kldjfvoidfjg hjkgijjhngkmdfgvnbiudsfg dfjkghd9ugh bvkjdhgosdfibv dsijghsdituf kljvdsiofjgpore jiguyher voijfdgmfd dfgmodfkvbjiersug dfokgjfdoigjsflkgmhnbofsigkbn fdkghjfodihjodfih oklfjgbokfgmbokfgmh ofglkmb folkghbmfokgbmf bofkghjfokmbf b opfgjmb fpgnm  KONIEC";

let indexText = 0;
const time = 120;
const addLetter = () => {
  spnText.textContent += txt[indexText];
  indexText++;

  if (indexText === txt.length) clearInterval(indexTyping);
};
const cursorAnimation = () => {
  spnCursor.classList.toggle("active");
};

const indexTyping = setInterval(addLetter, time);
setInterval(cursorAnimation, 400);
