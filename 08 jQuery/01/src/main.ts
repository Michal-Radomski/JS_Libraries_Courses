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

// $(function () {
//   $(".hideElement").click(function () {
//     $(".custom_style").hide();
//   });
//   $(".showElement").click(function () {
//     $(".custom_style").show();
//   });
// });

// $(function () {
//   $(".toggleElement").click(function () {
//     $(".toggle_me").toggle();
//   });
// });

// $(document).ready(function () {
//   $(".btn1").click(function () {
//     $("p").fadeOut(1000);
//   });
//   $(".btn2").click(function () {
//     $("p").fadeIn(1000);
//   });
// });

// $(function () {
//   $("#divOne").click(function () {
//     $("#divTwo").delay(Number("10")).fadeIn();
//   });
// });

// $(function () {
//   $("#divOne").click(function () {
//     //fadeTo("fast", 0.2) -> the last value of 0.2 is the opacity value
//     $("#divTwo").fadeToggle("fast").fadeTo("fast", 0.2);
//     $("#divThree").fadeToggle(1000);
//   });
// });

// $(function () {
//   $("#animate").click(function () {
//     //the maximum height which is possible to get during the animation -> 1000px
//     //6000 is the speed
//     $(".animateDiv").animate({ height: 1000 }, 6000);
//   });

//   $("#stop_animation").click(function () {
//     $(".animateDiv").stop();
//   });
// });

//* Event Handling
// $(function () {
//   //test means in this case our e -> for event
//   $("body").mousemove(function (test) {
//     $("div.position").text("X: " + test.pageX + ", Y: " + test.pageY);
//   });
// });

// $(document).ready(function () {
//   $("p").mouseenter(function () {
//     $("p").css("background-color", "yellow");
//   });
//   $("p").mouseleave(function () {
//     $("p").css("background-color", "lightgrey");
//   });
// });

// $(function () {
//   $("p").on("click mouseover mouseout", function (event) {
//     $("#outcome").html("event.type: " + event.type);
//   });
// });

// $(document).ready(function () {
//   $("div").mouseup(function () {
//     $(this).after("<p style='color:green;'>Mouse button released.</p>");
//   });
//   $("div").mousedown(function () {
//     $(this).after("<p style='color:purple;'>Mouse button pressed down.</p>");
//   });
// });

// $(document).ready(function () {
//   $("p").dblclick(function () {
//     alert("The paragraph was double-clicked.");
//   });
// });

// $(document).ready(function () {
//   const i = 0;
//   $("input").keypress(function () {
//     $("span").text((i += 1));
//   });
// });

// $(document).ready(function () {
//   $("input").keydown(function () {
//     $("input").css("background-color", "yellow");
//   });
//   $("input").keyup(function () {
//     $("input").css("background-color", "pink");
//   });
// });

// $(document).ready(function () {
//   $("h1, h2, p").click(function (event) {
//     // alert(event.currentTarget === this);
//     console.log("event.currentTarget:", event.currentTarget);
//   });
// });

// $(document).ready(function () {
//   $("p").each(function (i) {
//     $(this).on("click", { x: i }, function (event) {
//       alert("The " + $(this).index() + ". paragraph has data: " + event.data.x);
//     });
//   });
// });

// $(document).ready(function () {
//   $("input").keydown(function (event) {
//     $("div").html("Key: " + event.which);
//   });
// });

// $(document).ready(function () {
//   $("div").click(function (event) {
//     event.stopImmediatePropagation();
//     alert("Was event.stopImmediatePropagation() called: " + event.isImmediatePropagationStopped());
//   });
// });

// $(document).ready(function () {
//   $("a").click(function (event) {
//     event.preventDefault();
//   });
// });

//* Accessors
// $(document).ready(function () {
//   $("button").click(function () {
//     $("li").each(function () {
//       console.log("$(this).text():", $(this).text());
//     });
//   });
// });

// $(document).ready(function () {
//   $("button").click(function () {
//     $.get("p", function (data, status) {
//       console.log("Data: " + data + "\nStatus: " + status);
//     });
//   });
// });

// $(document).ready(function () {
//   $("button").click(function () {
//     const x = $("li").toArray();
//     for (const i = 0; i < x.length; i++) {
//       console.log(x[i].innerHTML);
//     }
//   });
//   $("button").click(function () {
//     console.log('$("li").length:', $("li").length);
//   });
// });

// $(document).ready(function () {
//   $("p").click(function () {
//     if ($("p").parent().is("div")) {
//       console.log("Parent of p is div");
//     }
//   });
// });

//* Callbacks
// $(function () {
//   // First function to add
//   const myCallback = function (value: string) {
//     const divOne = $(".custom_style");
//     divOne.show();
//     console.log("myCallback: " + value);
//   };

//   // Second function to add
//   const myCallbackTwo = function (value: string) {
//     const divTwo = $(".custom_style");
//     divTwo.show();
//     console.log("myCallbackTwo: " + value);
//   };

//   // Object for callback
//   const callbacks = $.Callbacks();
//   // Add the function to the list object
//   callbacks.add(myCallback);
//   // Use the stored information of the list object
//   callbacks.fire("success");

//   /* tidy the room :)  -> removing the last information to make place for the next
//   one  */

//   setTimeout(() => {
//     callbacks.remove(myCallback);

//     callbacks.add(myCallbackTwo);
//     callbacks.fire("success two");
//   }, 1000);
// });

// $(function () {
//   const myFunction = function (valueOne: string, valueTwo: string, valueThree: string) {
//     console.log("Received: " + valueOne + valueTwo + valueThree);
//   };
//   const callbacks = $.Callbacks();
//   callbacks.add(myFunction);
//   callbacks.empty();
//   console.log("callbacks.has(myFunction):", callbacks.has(myFunction));
//   callbacks.fireWith(window, ["TestOne", "TestTwo", "TestThree"]);
// });

// A sample logging function to be added to a callbacks list
// const foo = function (value: string) {
//   console.log("foo:" + value);
// };
// const callbacks = $.Callbacks();

// // Add the function "foo" to the list
// callbacks.add(foo);

// // Fire the items on the list
// callbacks.fire("hello"); // Outputs: "foo: hello"
// callbacks.fire("world"); // Outputs: "foo: world"

// // Test to establish if the callbacks have been called
// console.log("callbacks.fired():", callbacks.fired());

// $(document).ready(function () {
//   $("button#disable").click(function () {
//     $("input").prop("disabled", true);
//   });
//   $("button#enable").click(function () {
//     $("input").prop("disabled", false);
//   });
// });

// $(function () {
//   const myCallback = $.Callbacks("once");

//   myCallback.add(function (value: string) {
//     console.log("hello", value);
//   });

//   myCallback.fire("World");
//   myCallback.fire("and hello universe!");
// });

//* Deferred and Promise
// $(function () {
//   const deferred = $.Deferred();
//   //every deferred object has by default the status pending
//   console.log("deferred.state():", deferred.state());
// });

// $(function () {
//   const deferred = $.Deferred();

//   // Using .fail() to switch the state of the object to be rejected
//   deferred.fail(function (error) {
//     console.log("this is a fail with the message" + error);
//   });
//   //call of the fail call backs with reject
//   deferred.reject(" Error Code x-77712");

//   if (deferred.state() == "pending") {
//     console.log("I am pending");
//   } else if (deferred.state() == "resolved") {
//     console.log("I am resolved");
//   } else if (deferred.state() == "rejected") {
//     console.log("I am rejected");
//   } else {
//     console.log("No other option");
//   }
// });

// $(function () {
//   $("button").click(function () {
//     const deferred = $.Deferred();

//     deferred.done(function () {
//       $("#testOne").css("color", "red");
//     });
//     deferred.resolve();

//     if (deferred.state() == "resolved") {
//       console.log("I am resolved");
//     } else {
//       console.log("no information");
//     }
//   });
// });

// $(function () {
//   const deferred = $.Deferred();

//   $("button").click(function () {
//     $.get("nofile.php", function (data) {
//       alert(data);
//       if (deferred.state() == "pending") {
//         console.log("I am pending");
//       } else {
//         console.log("No other options");
//       }
//     }).always(function () {
//       alert("completed or not");
//     });
//   });
// });

// $(function () {
//   $("#btn").click(function () {
//     $("#lorem").fadeIn(1000);
//     $("#ipsum").fadeIn(1500);

//     // Multiple referencing possible with .promise().done().done()
//     $("#lorem, #ipsum")
//       .promise()
//       .done(() => {
//         $(this).addClass("pstyle");
//         $("p").append(" Executed");
//       });
//   });
// });

// $(function () {
//   function consoleInfo() {
//     console.log("function executed");
//   }

//   const color = () => {
//     $(this).css("background-color", "#cc99ff");
//   };

//   function helloWorld() {
//     console.log("helloWorld");
//   }

//   $("#btn").click(function () {
//     $("#lorem").promise().done([consoleInfo, color, helloWorld]);
//   });
// });

// $(function () {
//   const promiseOne = $.get("testOne.php");
//   const promiseTwo = $.get("testTwo.php");
//   const promiseThree = $.get("testThree.php");

//   const myPromise = $.when(promiseOne, promiseTwo, promiseThree);

//   myPromise.done(function () {
//     console.log("request successful");
//   });

//   myPromise.fail(function () {
//     console.log("request failed");
//   });

//   $(".custom_style, .custom_style_one, .custom_style_two").fadeIn(2000);
// });

//*  Ajax and jQuery
// $("button").click(function () {
//   $.ajax({
//     // Url: the path for the file
//     url: "information.txt",
//     // Success: after the file was successfully loaded
//     success: function (result) {
//       $("#showNewTxt").text(result).addClass("intro");
//     },
//   }).done(function (msg: string) {
//     console.log("Job dane: " + msg);
//   });
// });

// $(document).ready(function () {
//   $("button").click(function () {
//     //* Not recommended
//     $.ajaxSetup({
//       url: "information.txt",
//       success: function (result) {
//         $("#showNewTxt").text(result).addClass("intro");
//       },
//     });
//     $.ajax().done(function (msg: string) {
//       console.log("Job dane: " + msg);
//     });
//   });
// });

// $(document).ready(function () {
//   $("button").click(function () {
//     $("p#showNewTxt").load("information.txt");
//   });
// });

// $(document).ready(function () {
//   $("button").click(function () {
//     $.getScript("test.js");
//   });
// });

// $(document).ready(function () {
//   $.getJSON("test.json", function (data) {
//     const items: string[] = [];
//     $.each(data, function (key: string, val: string) {
//       items.push("<li id='" + key + "'>" + val + "</li>");
//     });

//     console.log("items: ", items);

//     $("<ul/>", {
//       class: "my-new-list",
//       html: items.join(""),
//     }).appendTo("body");
//   });
// });

// $(function () {
//   $("button:first").click(function () {
//     $.get("information.txt", function (data) {
//       $("#btn1").html(data);
//     });
//   });

//   $("button:eq(1)").click(function () {
//     $.post("information.txt", function (data) {
//       $("#btn2").html(data);
//     });
//   });
// });

// $(document).ready(function () {
//   $("button").click(function () {
//     $("div").text($("form").serialize());
//   });
// });

$(function () {
  $("#btn1").click(function () {
    $.when($.ajax("ajax.txt"), $.ajax("ajax2.txt"))
      .then(function (data1, data2) {
        $("#info1")
          .html(data1[0] + " - " + data2[0])
          .append("<span>info1</span>")
          .addClass("alert alert-success");
      })
      .done(function () {
        $("h1").html("done btn1");
      })
      .fail(function () {
        alert("Error");
      })
      .always(function () {
        alert("Finished request");
      });
  });

  $("#btn2").click(function () {
    $.when($.get("ajax.txt"), $.ajax("ajax2.txt"))
      .then(function (data1, data2) {
        $("#info2")
          .html(data1[0] + " - " + data2[0])
          .append("<span>info2</span>")
          .addClass("alert alert-success");
      })
      .done(function () {
        $("h1").html("done btn2");
      })
      .fail(function () {
        alert("Error");
      })
      .always(function () {
        alert("Finished request");
      });
  });
});
