
  let result = document.getElementById('result');
  let submitButton = document.getElementById('submitButton');
  let userInput = document.getElementById('userInput');
    
    function allLetter(userInput)
    {
     let letters = /[A-Za-z]/;
     if(userInput.value.match(letters))
       {
        return true;
       }
     else
       {
       result.textContent = "Invalid Input";
       alert("Enter in Letters Only");
       document.getElementById('userInput').value = "";
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

  function checkUser()
  {
      if(userInput.value === "")
      {
          result.textContent == "invalid input";
      }
  }

  


  submitButton.addEventListener('click',function(){

        checkUser();
        allLetter(userInput);
        let displayName = userInput.value;

        let miniChallenge1Model = {
        userName: displayName
      };

      ModelMethod(miniChallenge1URL, miniChallenge1Model);
  });