
  let userInput1 = document.getElementById('userInput1');
  let userInput2 = document.getElementById('userInput2');
  let userInput3 = document.getElementById('userInput3');
  let userInput4 = document.getElementById('userInput4');
  let userInput5 = document.getElementById('userInput5');
  let userInput6 = document.getElementById('userInput6');
  let userInput7 = document.getElementById('userInput7');
  let userInput8 = document.getElementById('userInput8');
  let userInput9 = document.getElementById('userInput9');
  let userInput10 = document.getElementById('userInput10');
  let submitButton = document.getElementById('submitButton');
  let result = document.getElementById('result');


    function allLetter(userInput1)
    {
     let letters = /[A-Za-z]/;
     if(userInput1.value.match(letters))
       {
        return true;
       }
     else
       {
       result.textContent = " ";
       alert("Enter in Letters Only");
       document.getElementById('userInput1').value = "";
       return false;
       }
    }

  let miniChallenge5URL =
  "https://daddallforoneminichallenges.azurewebsites.net/AllForOne/miniCh5";

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
  submitButton.addEventListener('click',function(){

   allLetter(userInput1);

    let displayNum1 = userInput1.value;
    let displayNum2 = userInput2.value;
    let displayNum3 = userInput3.value;
    let displayNum4 = userInput4.value;
    let displayNum5 = userInput5.value;
    let displayNum6 = userInput6.value;
    let displayNum7 = userInput7.value;
    let displayNum8 = userInput8.value;
    let displayNum9 = userInput9.value;
    let displayNum10 = userInput10.value;

 
let miniChallenge5Model = {
    name: displayNum1,
    Celebertiy: displayNum2,
    Animal: displayNum3,
    Food: displayNum4,
    Drink: displayNum5,
    Color: displayNum6,
    ForeignCountry: displayNum7,
    DreamCar: displayNum8,
    MovieName: displayNum9,
    TreeName: displayNum10,
  };

  ModelMethod(miniChallenge5URL, miniChallenge5Model);
   
  });

  