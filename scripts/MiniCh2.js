let miniChallenge2URL =
  "https://daddallforoneminichallenges.azurewebsites.net/AllForOne/miniCh2";

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
      result.textContent = "Your Total Is " + data;
      console.log(data);
    });
}

let userInput1 = document.getElementById("userInput1");
let userInput2 = document.getElementById("userInput2");
let submitButton = document.getElementById("submitButton");
let result = document.getElementById("result");

submitButton.addEventListener("click", function () {
  if (userInput1.value > 2147483647 || userInput2.value > 2147483647) {
    result.textContent =
      "Your Number is too High, Enter a Number lower than 2147483648";
  } else if (userInput1.value < -2147483647 || userInput2.value < -2147483647) {
    result.textContent =
      "Your Number is too Low, Enter a Higher number than -2147483647";
  } else if (userInput1.value == "" || userInput2.value == "") {
    result.textContent = "A Field is Empty, Enter in a Number";
  } else {
    let displayNum1 = userInput1.value;
    let displayNum2 = userInput2.value;

    let miniChallenge2Model = {
      num1: displayNum1,
      num2: displayNum2,
    };

    ModelMethod(miniChallenge2URL, miniChallenge2Model);
  }
});
