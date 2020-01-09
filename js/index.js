// Your code goes here
const navLink = document.querySelectorAll(".nav-link");
navLink.forEach(element => {
    element.addEventListener("mouseover", (event) => {
        event.target.style.color = "red";
    });
    element.addEventListener("mouseout", (event) => {
        event.target.style.color = "black";
    });
});

