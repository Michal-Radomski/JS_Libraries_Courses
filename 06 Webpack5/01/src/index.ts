import helloWorld from "./hello-world";
import addImage from "./add-image";
import HelloWorldButton from "./components/hello-world-button/HelloWorldButton";
import Heading from "./components/heading/Heading";

const heading = new Heading();
heading.render();

helloWorld();
addImage();

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();
