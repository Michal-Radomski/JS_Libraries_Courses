import addImage from "../add-image";
import Heading from "./heading/Heading";
import HelloWorldButton from "./hello-world-button/HelloWorldButton";

export default class HelloWorldPage {
  render() {
    const heading = new Heading();
    heading.render("hello-world");
    addImage();
    const helloWorldButton = new HelloWorldButton();
    helloWorldButton.render();
  }
}
