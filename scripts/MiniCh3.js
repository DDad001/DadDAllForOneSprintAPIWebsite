let userInput1 = document.getElementById("userInput1");
let userInput2 = document.getElementById("userInput2");
let submitButton = document.getElementById("submitButton");
let result = document.getElementById("result");
let AmOrPm = document.getElementById("AmOrPm");

let miniChallenge3Model = {
  userName: "Danial",
  time: "4:00",
  AMorPM: "AM",
};

let miniChallenge3URL =
  "https://daddallforoneminichallenges.azurewebsites.net/AllForOne/miniCh3";

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
      console.log(data);
      result.textContent = data;
    });
}

function allLetter(userInput1) {
  let letters = /^[A-Za-z]+$/;
  if (userInput1.value.match(letters)) {
    let displayNum1 = userInput1.value;
    let displayNum2 = userInput2.value;

    let ChooseAmOrPM;
    if (AmOrPm.value == 1) {
      ChooseAmOrPM = "AM";
    } else if (AmOrPm.value == 2) {
      ChooseAmOrPM = "PM";
    }

    let miniChallenge3Model = {
      userName: displayNum1,
      time: displayNum2,
      AMorPM: ChooseAmOrPM,
    };

    ModelMethod(miniChallenge3URL, miniChallenge3Model);
  } else {
    result.textContent = "Invalid Input";
    return false;
  }
}

submitButton.addEventListener("click", function () {
  let numbers = /^[0-9:]+$/;
  if (userInput2.value.match(numbers)) {
    let ChooseAmOrPM;
    if (AmOrPm.value == 1) {
      ChooseAmOrPM = "AM";
    } else if (AmOrPm.value == 2) {
      ChooseAmOrPM = "PM";
    }

    allLetter(userInput1);
  } else {
    result.textContent = "Invalid Input";
    userInput1.value = "";
    userInput2.value = "";
    return false;
  }
});
