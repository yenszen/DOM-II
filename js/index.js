// Your code goes here

// VARIABLES
const navLink = document.querySelectorAll(".nav-link");
const h2 = document.querySelector("h2");
const p = document.querySelectorAll("p");
const body = document.querySelector("body");
const img = document.querySelectorAll("img");
const button = document.querySelectorAll(".btn");
const header = document.querySelector(".main-navigation");
const footer = document.querySelector(".footer");

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

// accessibility: easier on the eyes
body.addEventListener("keydown", (event) => {
    event.target.style.backgroundColor = "lightgrey";
});
body.addEventListener("keyup", (event) => {
    event.target.style.backgroundColor = ""; // reverts styling to previous state!
})

// dark mode
body.addEventListener("dblclick", (event) => {
    event.target.style.color = "white";
    event.target.style.backgroundColor = "black";
})
body.addEventListener("contextmenu", (event) => {
    event.target.style.color = "";
    event.target.style.backgroundColor = "";
})

// illustrates which text is copied to clipboard
p.forEach(element => {
    element.addEventListener("copy", (event) => {
        event.target.style.fontSize = "1.8rem";
        event.target.style.color = "green";
    });
})

// interactive fun
img.forEach(element => {
    element.addEventListener("dragstart", (event) => {
        event.target.style.opacity = "0.2";
    });
    element.addEventListener("dragend", (event) => {
        event.target.style.visibility = "hidden";
    })
})

// lack of signup page alert
button.forEach(element => {
    element.addEventListener("click", (event) => {
        alert("Sign Up Page is under maintenance!");
    })
})

// preventDefault()
navLink.forEach(element => {
    element.addEventListener("click", (event) => {
        event.preventDefault();
    })
})

// stopPropagation()
header.addEventListener("dblclick", (event) => {
    event.stopPropagation();
})

footer.addEventListener("dblclick", (event) => {
    event.stopPropagation();
})