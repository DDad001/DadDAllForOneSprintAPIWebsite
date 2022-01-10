let result = document.getElementById("result");
let submitButton = document.getElementById("submitButton");
let userInput = document.getElementById("userInput");

function allLetter(userInput) {
  let letters = /^[a-zA-Z\s]+$/;
  if (userInput.value.match(letters)) 
  {
    let displayName = userInput.value;
    let miniChallenge1Model = {
      userName: displayName,
    };

    ModelMethod(miniChallenge1URL, miniChallenge1Model);
  }
   else
    {
    result.textContent = "Invalid Input";
    alert("Enter in Letters Only");
    userInput.value = "";
    return false;
  }
 
}

let miniChallenge1URL =
  "https://daddallforoneminichallenges.azurewebsites.net/AllForOne/miniCh1";

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
    });
}

// function checkForWhiteSpaces()
// {
// document.getElementsByName("10010input")[0];
//  let val = userInput.value.replace(/\s/g, "");
// alert(val);
// }
// function removeSpaces(userInput) {
//  result = userInput.value.split(' ').join('');
//  }

// function checkUser()
// {
//     if(userInput.value === "")
//     {
//         result.textContent == "invalid input";
//     }
// }

submitButton.addEventListener("click", function () {
  // checkUser();
  allLetter(userInput);
  // checkForEmpty();
});

// function checkForEmpty()
// {
//   if(userInput.value === undefined || userInput.value == null || userInput.value.length <= 0){
//    result.textContent = "Invalid Input";
//     }
// }
