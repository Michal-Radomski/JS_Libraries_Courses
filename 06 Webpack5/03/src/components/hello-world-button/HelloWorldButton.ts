import "./HelloWorldButton.scss";

//* const textClass = "hello-world-text";

class HelloWorldButton {
  private textCssClass: string = "hello-world-text";
  constructor(textCssClass: string = "hello-world-text") {
    this.textCssClass = textCssClass;
  }

  public render() {
    const button = document.createElement("button");
    button.innerHTML = "Hello world";
    button.classList.add("hello-world-button");
    const body = document.querySelector("body") as HTMLBodyElement;
    body.appendChild(button);

    button.onclick = () => {
      // console.log("this:", this);
      const p = document.createElement("p");
      p.innerHTML = "Hello world";
      //* p.classList.add(textClass);
      p.classList.add(this.textCssClass);
      body.appendChild(p);
    };
  }
}

export default HelloWorldButton;
