const target = document.getElementById("target");
let array = ["développeur", "photographe", "créatif"];
let wordIndex = 0;
let LetterIndex = 0;

const createLetter = () => {
  const letter = document.createElement("span");
  target.appendChild(letter);

  letter.textContent = array[wordIndex][LetterIndex];
  setTimeout(() => {
    letter.remove();
  }, 2800);
};
const loop = () => {
  setTimeout(() => {
    if (wordIndex >= array.length) {
      wordIndex = 0;
      letterIndex = 0;
      loop();
    } else if (LetterIndex < array[wordIndex].length) {
      createLetter();
      LetterIndex++;
      loop();
    } else {
      wordIndex++;
      LetterIndex = 0;
      setTimeout(() => {
        loop();
      }, 2800);
    }
  }, 60);
};
