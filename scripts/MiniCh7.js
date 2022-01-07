
  let miniChallenge7URL ="https://daddallforoneminichallenges.azurewebsites.net/AllForOne/miniCh7";
  let miniChallenge7StringURL ="https://daddallforoneminichallenges.azurewebsites.net/AllForOne/MiniCh7String";

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
        console.log(data)
    });
}

let userInput1 = document.getElementById('userInput1');
let userInput2 = document.getElementById('userInput2');
let submitButton = document.getElementById('submitButton');
let result = document.getElementById('result');
let reverseLetters = document.getElementById('reverseLetters');

submitButton.addEventListener('click',function(){

  let displayNum1 = userInput1.value;

  let miniChallenge7Model = {
    num1: displayNum1
  };

ModelMethod(miniChallenge7URL, miniChallenge7Model);


});

reverseLetters.addEventListener('click',function(){


    let displayNum2 = userInput2.value;
    let miniChallenge7StringModel = {
        num1: displayNum2
      };

      ModelMethod(miniChallenge7StringURL, miniChallenge7StringModel);

});

