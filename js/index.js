// Your code goes here

// VARIABLES
const navLink = document.querySelectorAll(".nav-link");
const header = document.querySelector(".main-navigation");
const h2 = document.querySelector("h2");
const p = document.querySelectorAll("p");
const body = document.querySelector("body");
const footer = document.querySelector("footer");

// EVENTS
// better clarity between menu options
navLink.forEach(element => {
    element.addEventListener("mouseover", (event) => {
        event.target.style.color = "red";
    });
    element.addEventListener("mouseout", (event) => {
        event.target.style.color = "black";
    });
});

// easier on the eyes
body.addEventListener("dblclick", (event) => {
    event.target.style.backgroundColor = "lightgrey";
});
body.addEventListener("click", (event) => {
    event.target.style.backgroundColor = ""; // reverts styling to previous state!
})

// dark mode
body.addEventListener("keydown", (event) => {
    event.target.style.color = "white";
    event.target.style.backgroundColor = "black";
})
body.addEventListener("contextmenu", (event) => {
    event.target.style.color = "";
    event.target.style.backgroundColor = "";
})

