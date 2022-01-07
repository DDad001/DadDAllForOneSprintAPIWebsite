
  let miniChallenge6URL =
  "https://daddallforoneminichallenges.azurewebsites.net/AllForOne/miniCh6";

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
  let submitButton = document.getElementById('submitButton');
  let result = document.getElementById('result');


  submitButton.addEventListener('click',function(){

    let displayNum1 = userInput1.value;


    let miniChallenge6Model = {
        RandomNumber: displayNum1
      };

  ModelMethod(miniChallenge6URL, miniChallenge6Model);
   
  });

  