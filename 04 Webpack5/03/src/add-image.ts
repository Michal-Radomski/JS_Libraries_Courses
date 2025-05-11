import Kiwi from "./assets/kiwi.jpg";
import Favicon from "./assets/favicon.svg";
import altText from "./assets/altText.txt";

function addImage() {
  const body = document.querySelector("body") as HTMLBodyElement;

  const img = document.createElement("img");
  img.alt = "Kiwi";
  img.width = 300;
  img.src = Kiwi;
  body.appendChild(img);

  const img2 = document.createElement("img");
  img2.alt = "Favicon";
  img2.width = 300;
  img2.src = Favicon;
  body.appendChild(img2);

  const p = document.createElement("p");
  // const text = document.createTextNode(altText as string);
  // p.appendChild(text);
  p.textContent = altText as string;
  body.appendChild(p);
}

export default addImage;
