import Kiwi from "./kiwi.jpg";
import "./KiwiImage.scss";

class KiwiImage {
  render() {
    const img = document.createElement("img");
    img.src = Kiwi;
    img.alt = "Kiwi";
    img.classList.add("kiwi-image");

    const bodyDomElement = document.querySelector("body") as HTMLBodyElement;
    bodyDomElement.appendChild(img);
  }
}

export default KiwiImage;
