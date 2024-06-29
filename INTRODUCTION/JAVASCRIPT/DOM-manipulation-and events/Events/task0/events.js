const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", function (e) {
    alert("Hello World");
    console.log(e.target);  // callback function (e): event reference
    e.target.style.background = "blue";
});

// ADDING MULTIPLE EVENT LISTENERS

const buttons = document.querySelectorAll("button");
// get a 'list' of all button elements in the document

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert(button.id);
    });
});