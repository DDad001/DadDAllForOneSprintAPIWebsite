let userInput1 = document.getElementById("userInput1");
let userInput2 = document.getElementById("userInput2");
let userInput3 = document.getElementById("userInput3");
let userInput4 = document.getElementById("userInput4");
let userInput5 = document.getElementById("userInput5");
let userInput6 = document.getElementById("userInput6");
let userInput7 = document.getElementById("userInput7");
let userInput8 = document.getElementById("userInput8");
let userInput9 = document.getElementById("userInput9");
let userInput10 = document.getElementById("userInput10");
let submitButton = document.getElementById("submitButton");
let result = document.getElementById("result");
let allstrings;

let miniChallenge5URL =
  "https://daddallforoneminichallenges.azurewebsites.net/AllForOne/miniCh5";

function ModelMethod(url, model) {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(model),
  })
    .then((response) => response.text())
    .then((data) => {
      result.textContent = data;
      console.log(data);
    });
}

function LettersOnly(allstrings) {
  let letters = /^[A-Za-z]+$/;
  if (allstrings.match(letters)) {
    let miniChallenge5Model = {
      name: userInput1.value,
      Celebertiy: userInput2.value,
      Animal: userInput3.value,
      Food: userInput4.value,
      Drink: userInput5.value,
      Color: userInput6.value,
      ForeignCountry: userInput7.value,
      DreamCar: userInput8.value,
      MovieName: userInput9.value,
      TreeName: userInput10.value,
    };

    ModelMethod(miniChallenge5URL, miniChallenge5Model);
  } else {
    result.textContent = "Invalid Input, Enter in Letters Only";
    return false;
  }
}

submitButton.addEventListener("click", function () {
  if (
    userInput1.value == "" ||
    userInput2.value == "" ||
    userInput3.value == "" ||
    userInput4.value == "" ||
    userInput5.value == "" ||
    userInput6.value == "" ||
    userInput7.value == "" ||
    userInput8.value == "" ||
    userInput9.value == "" ||
    userInput10.value == ""
  ) {
    result.textContent = "One of the Fields is Empty, Enter in Something";
  } else {
    allstrings = userInput1.value.concat(
      userInput2.value,
      userInput3.value,
      userInput4.value,
      userInput5.value,
      userInput6.value,
      userInput7.value,
      userInput8.value,
      userInput9.value,
      userInput10.value
    );
    LettersOnly(allstrings);
  }
});
