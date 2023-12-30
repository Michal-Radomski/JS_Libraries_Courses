import helloWorld from "./hello-world";
import addImage from "./add-image";
import HelloWorldButton from "./components/hello-world-button/HelloWorldButton";

helloWorld();
addImage();

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();
