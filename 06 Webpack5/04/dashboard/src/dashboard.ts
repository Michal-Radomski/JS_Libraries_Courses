const url = window.location.pathname;
// console.log({ url });

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
