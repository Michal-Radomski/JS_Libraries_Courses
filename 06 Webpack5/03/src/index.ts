import addImage from "./add-image";
import HelloWorldButton from "./components/hello-world-button/HelloWorldButton";
import Heading from "./components/heading/Heading";

const heading = new Heading();
heading.render();
heading.render2();

addImage();

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();
