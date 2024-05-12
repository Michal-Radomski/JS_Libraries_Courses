import "./style.scss";

declare global {
  interface Window {
    $: JQueryStatic;
  }
}

// $(document).ready(function () {
//   console.log("Hello World!");
// });

// $(document).ready(function () {
//   $("*").css("background-color", "#b3ffff");
// });

// $(document).ready(function () {
//   $("p").css("background-color", "#b3ffff");
// });

// $(document).ready(function () {
//   $(".container-fluid").css("background-color", "#b3ffff");
// });

$(document).ready(function () {
  $("#p-id").css("background-color", "#b3ffff");
});

$(document).ready(function () {
  $("h1, p").css("background-color", "#b3ffff");
});
