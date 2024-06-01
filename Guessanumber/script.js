document.addEventListener("DOMContentLoaded", function () {
  const numberfrominput = document.getElementById("number");
  const guessbutton = document.getElementById("guessbtn");
  const guesshelper = document.getElementById("guesshelper");
  const scorehelper = document.getElementById("scorehelper");

  function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  const randomnum = getRandomNumber();
  console.log(randomnum);

  let score = 0;
  guessbutton.addEventListener("click", function () {
    let num = numberfrominput.value;
    numberfrominput.value = "";
    if (num >= 1 && num <= 100) {
      if (num == randomnum) {
        guesshelper.textContent = `You Guess Right!!!! number is ${num}`;
      } else if (num < randomnum) {
        guesshelper.textContent = `Increase your number ${num}`;
        score = score + 1;
        scorehelper.textContent = `Guess Count : ${score}`;
      } else {
        guesshelper.textContent = `Decrease your number ${num}`;
        score = score + 1;
        scorehelper.textContent = `Guess Count : ${score}`;
      }
    } else {
      alert("Please enter a number from 1 to 100 only");
    }
  });
});
