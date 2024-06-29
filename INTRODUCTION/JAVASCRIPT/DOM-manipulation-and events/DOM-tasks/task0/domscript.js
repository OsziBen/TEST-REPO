// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

// TASK #1
const redP = document.createElement("p");
redP.style.color = "red";
redP.textContent = "Hey I'm red!";

container.appendChild(redP);

// TASK #2
const blueH3 = document.createElement("h3");
blueH3.style.color = "blue";
blueH3.textContent = "I'm a blue h3!";

container.appendChild(blueH3);

// TASK #3
const divMain = document.createElement("div");
divMain.style.borderStyle = "solid";
divMain.style.borderWidth = "2px";
divMain.style.borderColor = "black";
divMain.style.backgroundColor = "pink";

const divH1 = document.createElement("h1");
divH1.textContent = "I'm in a div!";
divMain.appendChild(divH1);

const divP = document.createElement("p");
divP.textContent = "ME TOO!";
divMain.appendChild(divP);

container.appendChild(divMain);