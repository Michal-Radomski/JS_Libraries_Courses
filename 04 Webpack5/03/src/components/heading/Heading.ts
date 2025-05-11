import $ from "jquery";

import "./Heading.scss";

class Heading {
  render() {
    const h1 = document.createElement("h1");
    const body = document.querySelector("body") as HTMLBodyElement;
    h1.innerHTML = "Webpack is awesome - Vanilla JS";
    body.appendChild(h1);
  }
  render2() {
    const h1 = $("<h1>");
    const body = $("body");
    h1.text("Webpack is awesome - jQuery");
    body.append(h1);
  }
}

export default Heading;
