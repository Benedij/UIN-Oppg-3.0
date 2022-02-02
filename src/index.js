import "./styles.css";

// Oppg 1.
document.getElementById("remove-btn").addEventListener("click", removeButton);

function removeButton() {
  document.getElementById("remove").innerHTML = "";
}

// Oppg 2.
document.getElementById("change-btn").addEventListener("click", changeButton);

function changeButton() {
  document.getElementById("change").innerHTML =
    "Denne teksten har nå endret seg.";
}

/* Oppg 3. 
 Kilder: 
 https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
 https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent */

const inputField = document.getElementById("input");
const printInput = document.getElementById("input-text");

inputField.addEventListener("input", printText);

function printText(e) {
  printInput.innerHTML = e.target.value;
}

//Oppg 4. Får til å console logge listen, men får ikke til å printe den ut
const myList = ["item one", "item two", "item three"];

const writeLi = document.getElementById("write-list");
const Li = document.getElementById("ul");

//writeLi.addEventListener("click", createList);

/*
 function createList() {
 for (let i = 0; i < myList.length; i++) {
     Li.innerHTML = "<li>" + myList[i] + "</li>";
     console.log(myList[i]);
 }}; */

/*let i = 0;

 function createList() {
   while (i < myList.length) {
     Li.innerHTML = "<li>" + myList[i] + "</li>";
     //console.log(myList[i]);
     i++;
   }
 }; */

/*
 let i = 0;

 function createList() {
   do {
     Li.innerHTML = "<li>" + myList[i] + "</li>";
     //console.log(myList[i]);
     i++;
   }
   while (i < myList.length);
 }; */

/*
 function createList() {
     for (let i = 0; i < myList.length; i++) {
     console.log(myList[i]);
     list += "<li>" + myList[i] + "</li>"
     document.write(myList[i] + "<br>");
     document.getElementById("ul").innerHTML = "<li>" + myList[i] + "</li>";
   }
 }; */

/*
 myList.forEach(createList);

 function createList() {
   for (let i = 0; i < myList.length; i++) {
     Li.innerHTML = "<li>" + myList[i] + "</li>";
     console.log(myList[i]);
   }
 }; */

/*
 Li = "";

 function createList() {
 for (let i = 0; i < myList.length; i++) {
   Li += "<li>" myList[i] + "<li>";
   }
 }; */

//Oppg 5.
const selectEl = document.getElementById("select");
const enterTex = document.getElementById("text");
const createEl = document.getElementById("create");

selectEl.addEventListener("click", checkSelect);
enterTex.addEventListener("input", checkText);
createEl.addEventListener("click", printElement);

function checkSelect() {
  console.log("something selected");
  let menuValue = document.getElementById("select").value;
}

function checkText() {
  console.log("input might have been registrated lol");
  let inputValue = document.getElementById("text").value;
}

let menuValue = document.getElementById("select").value;

function createElement() {
  document.getElementById("placeholder").createElement(menuValue);
  document.getElementById("placeholder").innerHTML = inputValue;
}

function printElement(e) {
  console.log("button pressed lol");
  enterText.innerHTML =
    "<" + menuValue + ">" + e.target.value + "</" + menuValue + ">";
}

/*document.getElementById("select").addEventListener("click", myFunction);
 document.getElementById("text").addEventListener("click", myFunction2);

 function myFunction () {
     console.log("help")
     let inputEl = document.getElementById("select").value;
     let textInput = document.getElementById("text").value;

     document.createElement(inputEl);
 }

 function myFunction2 () {
     console.log("pain")
     //document.getElementById("placeholder").innerHTML = "<" + select + ">" + "</" + select + ">";
 }*/

//Oppg 6.
document.getElementById("remove-li").addEventListener("click", deleteLi);

function deleteLi() {
  console.log("???");
  document.querySelector("li").innerHTML = "";
}

/*Oppg 7. 
 Kilder:
 https://www.w3schools.com/jsref/prop_pushbutton_disabled.asp
 https://stackoverflow.com/questions/12164751/check-input-value-length
 */

const nameInput = document.getElementById("name");
let nameValue = document.getElementById("name").value;
const giveBorder = document.getElementById("order");

nameInput.addEventListener("input", nameCheck);

function nameCheck() {
  console.log("input registered");

  if (nameValue.length > 4) {
    console.log("name too long");
    giveBorder.disabled = true;
  }
}

//Oppg 8.  https://www.w3schools.com/jsref/prop_style_bordercolor.asp & https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
document.getElementById("color").addEventListener("click", myFunction);

function myFunction() {
  //document.getElementsByClassName(".children").style.borderColor = "green";
  //let listEl = document.getElementsByClassName(".children");
  //listEl.style.borderColor = "green";
}
