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

// $(document).ready(function () {
//   const notMyName = function () {
//     $("div[class!='myName']").css("background-color", "#b3ffff");
//   };

//   const myTitleOne = function () {
//     $("p[title|='myTitleOne']").css({ "background-color": "#13473e", color: "yellow" }); //* starts with "myTitleOne"
//   };
//   notMyName();
//   myTitleOne();
// });

// $(document).ready(function () {
//   // const withEach = $("input[name='input']");

//   // $(withEach).each(function () {
//   //   $(this).css("background-color", "red");
//   // });

//   $("input[name*='input']").css("background-color", "blue"); //* contains value "input"
// });

// $(document).ready(function () {
//   const checkOne = $("input[name~='input']"); //* contains a space-separated list of words
//   const checkTwo = $("input[name~='inputTwo']");

//   checkOne.css("background-color", "DarkCyan");
//   checkTwo.css("background-color", "DarkCyan");

//   //you need the rgb color, to use the color check
//   if (checkOne.css("background-color") === "rgb(0, 139, 139)") {
//     alert("matching");
//   } else {
//     alert("no mating");
//   }
// });

// $(document).ready(function () {
//   const inputSelOne = $("input[value$='One']").css("background-color", "#cc99ff"); //* ends with a specified value
//   const inputSelThree = $("input[value$='Three']").css("background-color", "blue");

//   const inputSelTwo = $("input[value^='InputTwo']").css("background-color", "blue"); //* starts with a specified value

//   $(inputSelOne).each(function () {
//     $(this).addClass("border");
//     $(inputSelThree).addClass("border");
//   });

//   inputSelTwo.css("background-color", "orangered");
// });

//* Filters for selectors
// $(document).ready(function () {
//   const selection = function (): void {
//     $(".row div:first").css("background-color", "#b3ffff"); //* First div in row class
//     $(".row div:last").css("background-color", "yellow"); //* Last div in row class
//   };
//   selection();
// });

// $(document).ready(function () {
//   $("input:not(:checked) + span").css("background-color", "#b3ffff");
// });

// $(document).ready(() => {
//   $("tr:even").css("background-color", "red"); //* Starts with 0!
//   $("tr:odd").css("background-color", "#b3ffff"); //* Starts with 0!
//   $("tr:eq(0)").css("color", "yellow"); //* Starts with 0! (equal)
//   $("tr:gt(3)").css("color", "yellow"); //* Starts with 0! (greater than)
//   $("tr:lt(3)").css("text-decoration", "underline"); //* Starts with 0! (less than)
// });

// $(document).ready(function () {
//   $(".focusMe").focus();
//   $(":focus").css("background-color", "#b3ffff");
// });

$(document).ready(function () {
  $(":header").css("background-color", "lightyellow");
});

$(document).ready(function () {
  $("div:contains('My')").css("color", "deeppink");
});

// $(document).ready(function () {
//   $("td:empty:first").css("background-color", "#cc99ff");
// });

// $(document).ready(function () {
//   //eq count from 0,1,2
//   $("table:has(tr) tr:eq(1)").css("background-color", "#cc99ff");
// });

$(document).ready(function () {
  $("div:parent:last").css("background-color", "#cc99ff");
});
