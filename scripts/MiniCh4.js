
  let miniChallenge4URL =
  "https://daddallforoneminichallenges.azurewebsites.net/AllForOne/miniCh4";

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


  submitButton.addEventListener('click',function(){

    let displayNum1 = userInput1.value;
    let displayNum2 = userInput2.value;


    let miniChallenge4Model = {
        num1: displayNum1,
        num2: displayNum2
      };

    ModelMethod(miniChallenge4URL, miniChallenge4Model);

  });
