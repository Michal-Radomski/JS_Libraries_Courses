import London from "./assets/London.png";
let img = document.getElementById("img");
img.src = London;

import Txt from "./assets/London.txt";
let p = document.getElementById("p");
p.innerText = Txt;

// import bg from "./assets/bg.svg";
// document.body.style.backgroundImage = `url(${bg})`;

import "./css/page.css";

let btn = document.getElementById("click");
btn.onclick = () => {
  import("./click.js").then(({ default: click }) => {
    click();
  });
};

import about from "./assets/about.html";
let link = document.createElement("a");
link.innerText = "About Page";
link.href = about;
document.getElementById("frame").append(link);
