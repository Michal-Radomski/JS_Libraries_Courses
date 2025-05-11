import Heading from "./heading/Heading";
import KiwiImage from "./kiwi-image/KiwiImage";

export default class KiwiPage {
  render() {
    //* Module Federation - from HelloWorld
    import("HelloWorldApp/HelloWorldButton").then((HelloWorldButtonModule) => {
      // console.log("HelloWorldButtonModule:", HelloWorldButtonModule);
      const HelloWorldButton = HelloWorldButtonModule.default;
      // console.log("HelloWorldButton:", HelloWorldButton);
      const helloWorldButton = new HelloWorldButton();
      // console.log("helloWorldButton:", helloWorldButton);
      helloWorldButton.render();
    });

    const heading = new Heading();
    heading.render("kiwi");
    const kiwiImage = new KiwiImage();
    kiwiImage.render();
  }
}
