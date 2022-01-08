let studentNameSelector = document.getElementById("studentNameSelector");
let students = [];
let miniChallenge8URL =
  "https://daddallforoneminichallenges.azurewebsites.net/AllForOne/getByFirstName";

let miniChallenge8LastNameURL =
  "https://daddallforoneminichallenges.azurewebsites.net/AllForOne/getByLastName";

let miniChallenge8EmailURL =
  "https://daddallforoneminichallenges.azurewebsites.net/AllForOne/getByEmailName";

let miniChallenge8SlackNameURL =
  "https://daddallforoneminichallenges.azurewebsites.net/AllForOne/getBySlackName";

let miniChallenge8HobbiesURL =
  "https://daddallforoneminichallenges.azurewebsites.net/AllForOne/getByHobbies";

function checkRandomStudent() {
  function RanStudent() {
    fetch(
      "https://daddallforoneminichallenges.azurewebsites.net/AllForOne/RandomStudent"
    )
      .then((response) => response.text())
      .then((data) => {
        students = JSON.parse(data);
        console.log(JSON.parse(data));

        result1.textContent = "First Name: " + students.firstName;
        result2.textContent = "Last Name: " + students.lastName;
        result3.textContent = "Slack Name: " + students.slackName;
        result4.textContent = "Email: " + students.email;
        result5.textContent = "Hobbies " + students.hobbies;
      });
  }
  RanStudent();
}

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
      students = JSON.parse(data);
      console.log(JSON.parse(data));

      result1.textContent = "First Name: " + students.firstName;
      result2.textContent = "Last Name: " + students.lastName;
      result3.textContent = "Slack Name: " + students.slackName;
      result4.textContent = "Email: " + students.email;
      result5.textContent = "Hobbies " + students.hobbies;
    });
}

studentNameSelector.addEventListener("change", function () {
  let miniChallenge8URL =
    "https://daddallforoneminichallenges.azurewebsites.net/AllForOne/getByFirstName";

  let displayNum1 = studentNameSelector.value;

  let miniChallenge8Model = {
    FirstName: displayNum1,
  };

  ModelMethod(miniChallenge8URL, miniChallenge8Model);
});

let userInput1 = document.getElementById("userInput1");
let submitButton = document.getElementById("submitButton");
let result1 = document.getElementById("result1");
let result2 = document.getElementById("result2");
let result3 = document.getElementById("result3");
let result4 = document.getElementById("result4");
let selector = document.getElementById("selector");
let RandomButton = document.getElementById("RandomButton");

submitButton.addEventListener("click", function () {
  checkSearchBy();
});

RandomButton.addEventListener("click", function () {
  checkRandomStudent();
});

function checkSearchBy() {
  if (selector.value == 1) {
    let displayNum1 = userInput1.value;

    let miniChallenge8Model = {
      FirstName: displayNum1,
    };

    ModelMethod(miniChallenge8URL, miniChallenge8Model);
  } else if (selector.value == 2) {
    let displayNum1 = userInput1.value;

    let miniChallenge8LastNameModel = {
      LastName: displayNum1,
    };
    ModelMethod(miniChallenge8LastNameURL, miniChallenge8LastNameModel);
  } else if (selector.value == 3) {
    let displayNum1 = userInput1.value;

    let miniChallenge8SlackNameModel = {
      SlackName: displayNum1,
    };
    ModelMethod(miniChallenge8SlackNameURL, miniChallenge8SlackNameModel);
  } else if (selector.value == 4) {
    let displayNum1 = userInput1.value;

    let miniChallenge8EmailModel = {
      Email: displayNum1,
    };
    ModelMethod(miniChallenge8EmailURL, miniChallenge8EmailModel);
  } else if (selector.value == 5) {
    let displayNum1 = userInput1.value;

    let miniChallenge8HobbiesModel = {
      Hobbies: displayNum1,
    };
    ModelMethod(miniChallenge8HobbiesURL, miniChallenge8HobbiesModel);
  }
}
