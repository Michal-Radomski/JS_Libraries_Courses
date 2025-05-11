import "../scss/page.scss";

const btn = document.getElementById("btn") as HTMLButtonElement;
btn.onclick = () => {
  import("./click.ts").then(({ default: click }) => {
    click();
  });
};

import London from "../assets/London.png";
import Txt from "../assets/London.txt?raw"; //* Additional suffix

const img = document.getElementById("img") as HTMLImageElement;
const p = document.getElementById("txt") as HTMLParagraphElement;

img.src = London;
p.innerText = Txt;

import test from "../assets/test.js?url"; //* Additional suffix
const script = document.createElement("script");
script.src = test;
document.head.append(script);
