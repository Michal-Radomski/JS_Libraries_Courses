import "./style.scss";

declare global {
  interface Window {
    $: JQueryStatic;
  }
}

// $(document).ready(function () {
//   console.log("Hello World!");
// });

// $(function () {
//   console.log("ready!");
// });

//* Selectors
// $(document).ready(function () {
//   $("*").css("background-color", "#b3ffff");
// });

// $(document).ready(function () {
//   $("p").css("background-color", "#b3ffff");
// });

// $(document).ready(function () {
//   $(".container-fluid").css("background-color", "#b3ffff");
// });

// $(document).ready(function () {
//   $("#p-id").css("background-color", "#b3ffff");
// });

// $(document).ready(function () {
//   $("h1, p").css("background-color", "#b3ffff");
// });

// $(document).ready(() => {
//   $("#bob").click(function () {
//     $(".bob").css("background-color", "#999966");
//     $("button").css({
//       "border-color": "#669999",
//       "border-width": "5px",
//     });
//   });

//   $("#carol").click(function () {
//     $(".carol").css({ "background-color": "#9999ff" });
//   });

//   $("#bg").click(function () {
//     $("*").css("background-color", "#9999ff");
//     $(".bob , .carol").css("color", "white");
//   });
// });

//* Attribute
// $(document).ready(function () {
//   $("[id]").each(function () {
//     console.log("this:", this);
//     $(this).css("background-color", "#b3ffff");
//   });
// });

// $(document).ready(function () {
//   const idName = $("[id=nameOne]");
//   const className = $("[class=nameTwo]");

//   idName.css("background-color", "CadetBlue");

//   className.each(function () {
//     $(this).css("background-color", "#b3ffff");
//   });
// });

// $(document).ready(function () {
//   $("div[class!='myName']").each(function () {
//     $(this).css("background-color", "#b3ffff");
//   });
// });

$(document).ready(function () {
  const notMyName = function () {
    $("div[class!='myName']").css("background-color", "#b3ffff");
  };

  const myTitleOne = function () {
    $("p[title|='myTitleOne']").css({ "background-color": "#13473e", color: "yellow" }); //* starts with myTitleOne
  };
  notMyName();
  myTitleOne();
});
