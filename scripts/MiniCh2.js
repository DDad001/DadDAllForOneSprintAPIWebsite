
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

    let miniChallenge2Model = {
        num1: displayNum1,
        num2: displayNum2
      };

      ModelMethod(miniChallenge2URL, miniChallenge2Model);

  });


