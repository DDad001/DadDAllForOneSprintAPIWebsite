
    let userInput = document.getElementById('userInput');
    let submitButton = document.getElementById('submitButton');
    let result = document.getElementById('result');

    function checkUserInput()
    {
        if(userInput.value == 1)
        {
            function UrlMethod() {
                fetch(
                    "https://daddallforoneminichallenges.azurewebsites.net/AllForOne/Mexican"
                    )
                    .then((response) => response.text())
                    .then((data) => {console.log(data)
                        result.textContent = data;
                    });
                }
                UrlMethod();
            }
            
        }
        
        function getItalian()
        {
          if(userInput.value == 2)
            {
                function ItalianRandom() {
                    fetch(
                        "https://daddallforoneminichallenges.azurewebsites.net/AllForOne/Italian"
                        )
                        .then((response) => response.text())
                        .then((data) => {console.log(data)
                          result.textContent = data;
                        });
                      }
                      ItalianRandom();
                  }
        }
       
        function getAmerican()
        {
          if(userInput.value == 3)
            {
                function AmericanRandom() {
                    fetch(
                        "https://daddallforoneminichallenges.azurewebsites.net/AllForOne/American"
                        )
                        .then((response) => response.text())
                        .then((data) => {console.log(data)
                          result.textContent = data;
                        });
                      }
                      AmericanRandom();
                  }
        }
       
        function getIndian()
        {
          if(userInput.value == 4)
            {
                function IndianRandom() {
                    fetch(
                        "https://daddallforoneminichallenges.azurewebsites.net/AllForOne/Indian"
                        )
                        .then((response) => response.text())
                        .then((data) => {console.log(data)
                          result.textContent = data;
                        });
                      }
                      IndianRandom();
                  }
        }
       
        function getChinese()
        {
          if(userInput.value == 5)
            {
                function ChineseRandom() {
                    fetch(
                        "https://daddallforoneminichallenges.azurewebsites.net/AllForOne/Chinese"
                        )
                        .then((response) => response.text())
                        .then((data) => {console.log(data)
                          result.textContent = data;
                        });
                      }
                      ChineseRandom();
                  }
        }
       
        function getRandomResturant()
        {
          if(userInput.value == 6)
            {
                function ResturantRan() {
                    fetch(
                        "https://daddallforoneminichallenges.azurewebsites.net/AllForOne/RandomResturant"
                        )
                        .then((response) => response.text())
                        .then((data) => {console.log(data)
                          result.textContent = data;
                        });
                      }
                      ResturantRan();
                  }
        }
         
          submitButton.addEventListener('click', function(){
        
            checkUserInput();
            getItalian();
            getAmerican();
            getIndian();
            getChinese();
            getRandomResturant();
          });
  