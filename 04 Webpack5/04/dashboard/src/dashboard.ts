// const url = window.location.pathname;
// console.log({ url });

//* Module Federation - from HelloWorld
import("HelloWorldApp/HelloWorldButton").then((HelloWorldButtonModule) => {
  // console.log("HelloWorldButtonModule:", HelloWorldButtonModule);
  const HelloWorldButton = HelloWorldButtonModule.default;
  // console.log("HelloWorldButton:", HelloWorldButton);
  const helloWorldButton = new HelloWorldButton();
  // console.log("helloWorldButton:", helloWorldButton);
  helloWorldButton.render();
});

//* MicroFrontEnd Architecture
import("HelloWorldApp/HelloWorldPage").then((HelloWorldPageModule) => {
  const HelloWorldPage = HelloWorldPageModule.default;
  const helloWorldPage = new HelloWorldPage();
  helloWorldPage.render();
});

import("KiwiApp/KiwiPage").then((KiwiPageModule) => {
  const KiwiPage = KiwiPageModule.default;
  const kiwiPage = new KiwiPage();
  kiwiPage.render();
});
