import Heading from "./components/heading/Heading";
import KiwiImage from "./components/kiwi-image/KiwiImage";

const heading = new Heading();
heading.render("kiwi");
const kiwiImage = new KiwiImage();
kiwiImage.render();

import("HelloWorldApp/HelloWorldButton").then((HelloWorldButtonModule) => {
  // console.log("HelloWorldButtonModule:", HelloWorldButtonModule);
  const HelloWorldButton = HelloWorldButtonModule.default;
  // console.log("HelloWorldButton:", HelloWorldButton);
  const helloWorldButton = new HelloWorldButton();
  // console.log("helloWorldButton:", helloWorldButton);
  helloWorldButton.render();
});
