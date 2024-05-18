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

// $(document).ready(function () {
//   $("div:parent:last").css("background-color", "#cc99ff");
// });

// $(document).ready(function () {
//   $(":button, :input").addClass("btn1");
//   $("#bnt1ID").wrap("<div class='borderColor'></div>");
//   $("form").wrap("<div class='borderColor'></div>");
// });

// $(document).ready(function () {
//   $(":text").css("background-color", "#339966");
//   $(":password").css("background-color", "red");
//   $(":reset").css("background-color", "yellow");
//   $(":checkbox").wrap("<div style='border: 2px solid red'></div>");
//   $(":submit").css("background-color", "orange");
//   $(":radio").wrap("<div style='border: 2px dashed cyan'></div>");
//   $(":disabled").css("background-color", "pink");
//   $(":enabled").css("color", "dimgray");
//   // $(":checked").wrap("<div style='border: 2px dashed blue'></div>");
//   $(":selected").css("color", "magenta");
// });

// $(document).ready(() => {
//   $("div:visible").click(function () {
//     console.log("this:", this);
//     $(this).css("background", "violet");
//   });
// });

//* Child filters
// $(document).ready(function () {
//   $("li:first-child").addClass("custom_border").css("background-color", "#339966");
//   $("li:last-child").css("background-color", "pink");
//   $("li:nth-child(3)").css("background-color", "red");
//   $("li:nth-child(even)").css("color", "blue");
//   $("p:only-child").css("color", "blue");
//   $("p:first-of-type").css("text-decoration", "underline");
//   $("p:last-of-type").css("font-weight", "bold");
//   $("p:nth-of-type(1)").css("font-style", "italic");
// });

//* Traversing
//@ jQuery v3 new shorter syntax!
//* $(document).ready(function () {}); = $(function () {});

// $(function () {
//   $(".mainDIV, #myList").css({ border: "5px solid pink", padding: "10px" }).children().addClass("custom_border");
// });

// $(function () {
//   $("li").closest("#myList").css("background-color", "lightgrey");
//   $("div").filter(".innerDivOne").css("background-color", "red");
//   $("ul").find(".find").css("border", "2px solid red");
//   $("li.find").next().css("border", "2px solid blue");
// });

// $(function () {
//   $("li.start").nextUntil("li.stop").css({ color: "red", border: "2px solid red" });
//   $("li.start").parent().css({ border: "2px solid blue" });
//   // $("li.start").parents().css({ color: "darkmagenta" });
//   // $("li.start").parentsUntil("div").css({ color: "darkmagenta" });
//   // $("li.start").prev().css({ border: "2px solid green" });
//   $("li.start").prevAll().css({ border: "2px solid green" });
//   // $("li.stop").prevUntil("li.start").css({ "font-size": "125%" });
//   $("li.stop").siblings().css({ "font-style": "italic" });
// });

// $(function () {
//   $("li").add("p").css("background-color", "red");
//   $("li").first().css("background-color", "red");
//   $("li").last().css("background-color", "cyan");
//   $("li").filter(":contains(2)").css("background-color", "yellow");
//   $("ul").find("li").eq(1).css("color", "maroon");
// });

// $(function () {
//   $("button").click(function () {
//     $("p.clone").clone().appendTo("body");
//   });

//   //* The same as above
//   $("button").on("click", function () {
//     $("p.clone").clone().appendTo("body");
//   });
// });

// $(function () {
//   $("p").has("span").css("background-color", "yellow");
// });

// $(function () {
//   const result = [] as string[];
//   $("li").map(function (_index, element) {
//     result.push($(element).text());
//   });
//   alert(result);
// });

// $(function () {
//   $("li").not("li.not").css("background-color", "orangered");
// });

//* Data Storage
// $(function () {
//   $("input").on("click", function () {
//     // console.log($(this).attr("value", "added value"));
//     $(this).attr("value", "added value");
//   });
// });

// $(function () {
//   $("input[value='info2']").on("click", function () {
//     $(this).removeAttr("value");
//   });
// });

//* DOM
// $(document).ready(function () {
//   $("#btn2").click(function () {
//     $("#btn2").prop("disabled", true);
//     $("ol").append("<li>Appended item</li>");
//   });
// });

// $(document).ready(function () {
//   $("button").click(function () {
//     $("p.text").text("Hello world!");
//   });
// });

// $("button").click(function () {
//   $("p.text").html("Hello <b>world</b>!");
// });

// $(document).ready(function () {
//   $("button").click(function () {
//     $("div.empty").empty();
//   });
// });

// $(document).ready(function () {
//   $("li").click(function () {
//     alert($(this).index());
//   });
// });

// $(document).ready(function () {
//   $("button").click(function () {
//     $("p").after("<p>Hello world!</p>");
//   });
// });

// $(function () {
//   $("<span style='color:red'> I am added!</span>").appendTo("p");
//   $("<p style='color: blue'>I am new inserted!</p>").insertAfter(".myDivTwo");
//   $("<p style='color: green'>I am new inserted!</p>").insertBefore(".myDivTwo");
//   $(".myDiv").before("<p style='color: orange'>I am new inserted!</p>");
// });

// $(function () {
//   $("#btn1").click(function () {
//     $(".textadded").prepend("added Text: ");
//   });

//   $("#btn2").click(function () {
//     $(".myDiv").prepend("<p>added paragraph!</p>");
//   });

//   $("#btn3").click(function () {
//     $(".myDiv").remove();
//   });
// });

// $(function () {
//   $("#btn1").click(function () {
//     $("<p>replaced!</p>").replaceAll(".myDiv");
//   });
// });

// $(function () {
//   //wrapAll we wrap the p tags in the DOM
//   $("#btn1").click(function () {
//     $("p").wrapAll("<b><i></i></b>");
//   });

//   //every single click unwraps one tag, at first the <b> and then the <i>
//   $("#btn2").click(function () {
//     $("p").unwrap();
//   });
// });

// $(function () {
//   //true -> class is existing
//   const hasTheClass = $("#myDiv").hasClass("color");
//   console.log({ hasTheClass });

//   //false -> class isn't existing
//   const hasTheClassTwo = $("#myDivTwo").hasClass("colorME");
//   console.log({ hasTheClassTwo });
// });

// $(document).ready(function () {
//   $("div p").last().css("background-color", "yellow");
// });

// $(document).ready(function () {
//   $("button").click(function () {
//     $("p").toggleClass("main");
//   });
// });

//* CSS
// $(function () {
//   const myDiv = $("div#height");
//   const showit = $("#show");

//   myDiv.one("click", function () {
//     $(this).height(20).css("background-color", "#669999");
//     showit.appendTo("p").text("innerHeight: " + myDiv.innerHeight());
//   });
// });

// $(function () {
//   const sizeOfDiv = $("#test");
//   $("#outerHeight").text("outerHeight: " + sizeOfDiv.outerHeight());
//   $("#width").text("width: " + sizeOfDiv.width());
// });

// $(document).ready(function () {
//   $("button").click(function () {
//     const x = $("p").offset();
//     alert("Top: " + x?.top + " Left: " + x?.left);
//   });
// });

// $(function () {
//   $("button").click(function () {
//     const pos = $("p").position();
//     console.log("pos1:", pos);
//     $("p").offsetParent().addClass("custom_style");
//     console.log("pos2:", pos);
//   });

//   $("#removeClass").click(function () {
//     $("p").offsetParent().removeClass("custom_style");
//   });
// });

$(function () {
  $(".hideElement").click(function () {
    $(".custom_style").hide();
  });
  $(".showElement").click(function () {
    $(".custom_style").show();
  });
});

$(function () {
  $(".toggleElement").click(function () {
    $(".toggle_me").toggle();
  });
});
