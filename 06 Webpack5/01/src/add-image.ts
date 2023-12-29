import Kiwi from "./assets/kiwi.jpg";

// console.log("Kiwi:", Kiwi, typeof Kiwi);

function addImage() {
  const img = document.createElement("img");
  img.alt = "Kiwi";
  img.width = 300;
  img.src = Kiwi;
  const body = document.querySelector("body") as HTMLBodyElement;
  body.appendChild(img);
}

export default addImage;
