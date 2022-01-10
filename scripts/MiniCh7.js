let userInput1 = document.getElementById("userInput1");
let userInput2 = document.getElementById("userInput2");
let submitButton = document.getElementById("submitButton");
let result = document.getElementById("result");
let reverseLetters = document.getElementById("reverseLetters");
let selector = document.getElementById("selector");

let miniChallenge7URL =
  "https://daddallforoneminichallenges.azurewebsites.net/AllForOne/miniCh7";
let miniChallenge7StringURL =
  "https://daddallforoneminichallenges.azurewebsites.net/AllForOne/MiniCh7String";

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
      result.innerHTML = data;
      console.log(data);
    });
}
function allNumbers(userInput1) {
  let numbers = /^[0-9-]+$/;
  //checking for numbers only
  //check to see if number is too high or too low
  //
  if (userInput1.value.match(numbers)) {
    if (userInput1.value > 2147483647) {
      result.textContent =
        "Your Number is too High, Enter a Number lower than 2147483648";
    } else if (userInput1.value < -2147483647) {
      result.textContent =
        "Your Number is too Low, Enter a Higher number than -2147483647";
    } else {
      let displayNum1 = userInput1.value;

      let miniChallenge7Model = {
        num1: displayNum1,
      };

      ModelMethod(miniChallenge7URL, miniChallenge7Model);
    }
  }
  if (!userInput1.value.match(numbers)) {
    result.textContent = "Invalid Input, Numbers Only";
  }
}

submitButton.addEventListener("click", function () {
  let letters = /^[a-zA-Z\s]+$/;
  if (selector.value == 1) {
    allNumbers(userInput1);
  } else if (selector.value == 2 && userInput1.value.match(letters)) {
    let displayNum1 = userInput1.value;
    let miniChallenge7StringModel = {
      num1: displayNum1,
    };

    ModelMethod(miniChallenge7StringURL, miniChallenge7StringModel);
  } else {
    result.textContent = "Invalid Input, Enter Letters Only";
  }

  if (userInput1.value == "") {
    result.textContent = "Invalid Input, Enter In Your Reverse Type";
  }
});
