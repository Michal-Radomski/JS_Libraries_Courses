import addImage from "./add-image";
import HelloWorldButton from "./components/hello-world-button/HelloWorldButton";
import Heading from "./components/heading/Heading";

const heading = new Heading();
heading.render();

addImage();

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

if (process.env.NODE_ENV === "production") {
  console.log("Production mode");
} else if (process.env.NODE_ENV === "development") {
  console.log("Development mode");
}
