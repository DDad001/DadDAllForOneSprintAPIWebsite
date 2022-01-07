// function UrlMethod() {
//   fetch(
//     "https://daddallforoneminichallenges.azurewebsites.net/AllForOne/Mexican"
//   )
//     .then((response) => response.text())
//     .then((data) => console.log(data));
// }
// UrlMethod();

// let miniChallenge1Model = {
//   userName: "Danial",
// };

// let miniChallenge2Model = {
//   num1: 4,
//   num2: 5,
// };

// let miniChallenge3Model = {
//   userName: "Danial",
//   time: "4:00",
//   AMorPM: "AM",
// };

// let miniChallenge4Model = {
//   num1: 7,
//   num2: 9,
// };

// let miniChallenge5Model = {
//   name: "Danial",
//   Celebertiy: "Tom Hanks",
//   Animal: "Bear",
//   Food: "Pizza",
//   Drink: "Fanta",
//   Color: "Blue",
//   ForeignCountry: "Europe",
//   DreamCar: "Mercedes",
//   MovieName: "ShawShank Redemption",
//   TreeName: "Pine Tree",
// };

// let miniChallenge6Model = {
//   RandomNumber: 5,
// };

// let miniChallenge7Model = {
//   num1: 56789034,
// };
// let miniChallenge7StringModel = {
//   num1: "Danial",
// };
// let miniChallenge8Model = {
//   FirstName: "Danial",
// };

// let miniChallenge1URL =
//   "https://daddallforoneminichallenges.azurewebsites.net/AllForOne/miniCh1";
// let miniChallenge2URL =
//   "https://daddallforoneminichallenges.azurewebsites.net/AllForOne/miniCh2";
// let miniChallenge3URL =
//   "https://daddallforoneminichallenges.azurewebsites.net/AllForOne/miniCh3";
// let miniChallenge4URL =
//   "https://daddallforoneminichallenges.azurewebsites.net/AllForOne/miniCh4";
// let miniChallenge5URL =
//   "https://daddallforoneminichallenges.azurewebsites.net/AllForOne/miniCh5";
// let miniChallenge6URL =
//   "https://daddallforoneminichallenges.azurewebsites.net/AllForOne/miniCh6";
// let miniChallenge7URL =
//   "https://daddallforoneminichallenges.azurewebsites.net/AllForOne/miniCh7";
// let miniChallenge7StringURL =
//   "https://daddallforoneminichallenges.azurewebsites.net/AllForOne/MiniCh7String";
// let miniChallenge8URL =
//   "https://daddallforoneminichallenges.azurewebsites.net/AllForOne/getByFirstName";

// function ModelMethod(url, model) {
//   fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(model),
//   })
//     .then((response) => response.text())
//     .then((data) => console.log(data));
// }

// ModelMethod(miniChallenge1URL, miniChallenge1Model);
// ModelMethod(miniChallenge2URL, miniChallenge2Model);
// ModelMethod(miniChallenge3URL, miniChallenge3Model);
// ModelMethod(miniChallenge4URL, miniChallenge4Model);
// ModelMethod(miniChallenge5URL, miniChallenge5Model);
// ModelMethod(miniChallenge6URL, miniChallenge6Model);
// ModelMethod(miniChallenge7URL, miniChallenge7Model);
// ModelMethod(miniChallenge7StringURL, miniChallenge7StringModel);
// ModelMethod(miniChallenge8URL, miniChallenge8Model);

// //Setting the variables
// let miniCh1Btn = document.getElementById("miniCh1Btn");
// let title = document.getElementById("title");
// let subTitle = document.getElementById("subTitle");
// let backBtn = document.getElementById("backBtn");
// let injectCardHere = document.getElementById("injectCardHere");
// let dissapear = document.getElementById("dissapear");
// let quote = document.getElementById("quote");

// let inputCard = document.getElementById("inputCard");
// let submitBtn = document.getElementById("submitBtn");
// let backCardBtn = document.getElementById("backCardBtn");
// let inputFieldOne = document.getElementById("inputFieldOne");

// //Mini challenge 1 button onClick Event
// miniCh1Btn.addEventListener("click", function (e) {
//   makeButtonDissapear();
//   makeChallengeTitle("Mini Challenge 1");
//   makeSubTitle("Enter Your Name Below");
//   makeBackButton();
//   makeBackgroundCard();
//   makeQuote("Happiness is real only when it is shared...");
// });

// // Making button dissapear
// function makeButtonDissapear() {
//   dissapear.className = "d-none";
// }

// //Making the main title for each page
// function makeChallengeTitle(mainTitle) {
//   title.innerHTML = " ";

//   let h1 = document.createElement("h1");
//   h1.className = "titleFontMiniCh1";
//   h1.textContent = mainTitle;

//   title.appendChild(h1);
// }

// //Making the sub title for each page
// function makeSubTitle(subHeading) {
//   subTitle.innerHTML = " ";

//   let h4 = document.createElement("h4");
//   h4.className = "subTitleFontMiniCh1";
//   h4.textContent = subHeading;

//   subTitle.appendChild(h4);
// }

// //Making a back button to go to the main page
// function makeBackButton() {
//   backBtn.innerHTML = " ";

//   let h2 = document.createElement("h2");
//   h2.className = "backButton";
//   h2.textContent = "<<Back";

//   backBtn.appendChild(h2);
// }

// function makeQuote(miniQuote) {
//   quote.innerHTML = " ";

//   let quoteH2 = document.createElement("h2");
//   quoteH2.className = "mt-5 quoteFont";
//   quoteH2.textContent = miniQuote;

//   quote.appendChild(quoteH2);
// }

// function makeInputCard() {
//   inputCard.innerHTML = " ";

//   let cardHere = document.createElement("div");
//   cardHere.className = "card m-0";

//   inputCard.appendChild(cardHere);
// }

// function makeInputFieldOne() {
//   inputCard.innerHTML = " ";

//   let inputField1 = document.createElement("input");
//   inputField1.className = "user-box";
//   inputField1.type = "text";

//   inputCard.appendChild(inputField1);
// }

// //Making the background card
// function makeBackgroundCard() 
// {
//   let bodyDiv = document.createElement("div");
//   bodyDiv.className = "d-flex justify-content-center p-0";
  
//   let nextDiv = document.createElement("div");
//   nextDiv.className = "card m-0";


//   let inputForm = document.createElement("form");

//   let divafterForm = document.createElement("div");
//   divafterForm.className = "user-box";
  

//   let inputField = document.createElement("input");
//   inputField.type = "text";
//   inputField.placeholder = "Enter Your Name...";

//   let outerDiv = document.createElement("div");
//   outerDiv.className = "d-flex justify-content-center";


//   let buttonSubmit = document.createElement("button");
//   buttonSubmit.type = "button";
//   buttonSubmit.textContent = "Submit";

//   let divBeforeBack = document.createElement("div");
//   divBeforeBack.className = "d-flex justify-content-center";
 

//   let goingBack = document.createElement("button");
//   goingBack.className = "d-none d-md-block d-lg-none d-sm-block";
//   goingBack.type = "button";
//   goingBack.textContent = "<<Back";

//   let lasth2 = document.createElement("h2");
//   lasth2.textContent = "Result Goes Here";

//   let lastDiv = document.createElement("div");


//   divBeforeBack.appendChild(goingBack);
//   bodyDiv.appendChild(nextDiv);
//   bodyDiv.appendChild(lasth2);
  
//   nextDiv.appendChild(inputForm);
  
//   inputForm.appendChild(divafterForm);
//   inputForm.appendChild(divBeforeBack);
//   inputForm.appendChild(outerDiv);
  
//   divafterForm.appendChild(inputField);
  
//   outerDiv.appendChild(buttonSubmit);


//   lastDiv.appendChild(lasth2);


//   injectCardHere.appendChild(bodyDiv);
// }



