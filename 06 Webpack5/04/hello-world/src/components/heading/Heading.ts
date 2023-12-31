import "./Heading.scss";

class Heading {
  render(pageName: string) {
    const h1 = document.createElement("h1");
    const body = document.querySelector("body") as HTMLBodyElement;
    h1.innerHTML = `Webpack is awesome ${pageName} page`;
    body.appendChild(h1);
  }
}

export default Heading;
