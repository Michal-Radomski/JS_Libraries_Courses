import "./style.scss";

declare global {
  interface Window {
    $: JQueryStatic;
  }
}

// $(document).ready(function () {
//   console.log("Hello World!");
// });

$(document).ready(function () {
  $("*").css("background-color", "#b3ffff");
});
