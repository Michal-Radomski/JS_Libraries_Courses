import _ from "lodash";

//* ToUpper ToLower
console.log(_.toUpper("foobar"));
console.log(_.toLower("FOOBAR"));

//* UpperCase and LowerCase
console.log(_.upperCase("iLikeProgramming")); // I LIKE PROGRAMMING
console.log(_.lowerCase("FOOBAR"));

//* UpperFirst and LowerFirst
console.log(_.upperFirst("fooBar"));
console.log(_.lowerFirst("Foobar"));

//* Capitalize
console.log(_.capitalize("fooBar"));

//*  StartCase
console.log(_.startCase("foo bar"));

//* Pad, PadStart and PadEnd
console.log(_.pad("abc", 9)); // "   abc   "
console.log(_.padStart("abc", 9, "-")); // "------abc"
console.log(_.padEnd("abc", 9, "-")); // "abc------"

//* Trim, TrimStart and TrimEnd
console.log(_.trim(" hello ")); // hello
console.log(_.trim("+hello+", "+")); // hello
console.log(_.trim("++hello++", "+")); // hello
console.log(_.trimStart("++hello++", "+")); // "hello++"
console.log(_.trimEnd("++hello++", "+")); // "++hello"

//* CamelCase, SnakeCase, KebabCase (No PascalCase!)
console.log(_.camelCase("i love lodash")); // iLoveLodash
console.log(_.snakeCase("i+love+lodash")); // i_love_lodash
console.log(_.kebabCase("i love LODASH")); // i-love-lodash

//- Deburr
console.log(_.deburr("déjà vu")); // deja vu
console.log(_.deburr("ąćżź")); // aczz

//* Escape and Unescape
console.log(_.escape("this & string")); // this &amp; string
console.log(_.escape("this <h1>string</h1>")); // this &lt;h1&gt;string&lt;/h1&gt;
console.log(_.escape("this 'string'")); // this &#39;string&#39;

console.log(_.unescape("&lt;h1&gt;tag&lt;</h1&gt;")); // <h1>tag<</h1>
console.log(_.unescape("&quot;hello&quot;")); // "hello"

//* EscapeRegExp
console.log(_.escapeRegExp("http://www.lodash.com"));

//* ParseInt
console.log(_.parseInt("8")); // 8
console.log(_.parseInt("08")); // 8
console.log(_.parseInt("8.8")); // 8
console.log(_.parseInt("10", 2)); // 2
console.log(_.parseInt("100", 16)); // 256
console.log(_.parseInt("AA", 16)); // 170

//* Repeat
console.log(_.repeat("abc", 5));

//* Replace
console.log(_.replace("hello there", "the", "*"));

//* Split
console.log(_.split("hello lodash", " "));

//* StartsWith and EndsWith
console.log(_.startsWith("foobar", "f")); // true
console.log(_.endsWith("foobar", "r")); // true

//- Truncate
console.log(_.truncate("Lorem ipsum dolor sit amet")); // Lorem ipsum dolor sit amet
console.log(_.truncate("Lorem ipsum dolor sit amet", { length: 10 })); // Lorem i...

//* Words
console.log(_.words("i     love     programming")); // [ 'i', 'love', 'programming' ]

//* Template
{
  const compiled: _.TemplateExecutor = _.template("Hello <%= user %>!");
  const result: string = compiled({ user: "Joe" });
  console.log(1, { result }); // Output: Hello Joe!
}
{
  const templateString = `
<ul>
<% _.forEach(users, function(user) { %>
  <li><%= user.name %></li>
<% }); %>
</ul>
`;
  const compiled = _.template(templateString);
  const result = compiled({
    users: [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }],
  });
  console.log(2, result);
  // Output:
  // <ul>
  //   <li>Alice</li>
  //   <li>Bob</li>
  //   <li>Charlie</li>
  // </ul>
}
{
  const templateString = "Hello, ${name}!";
  const compiled = _.template(templateString, {
    interpolate: /\$\{([\s\S]+?)\}/g,
  });
  const result = compiled({ name: "Alice" });
  console.log(3, result); // Output: Hello, Alice!
}
{
  const templateString = `
<table>
  <thead>
    <tr><th>Name</th><th>Age</th></tr>
  </thead>
  <tbody>
    <% _.forEach(users, function(user) { %>
      <tr><td><%= user.name %></td><td><%= user.age %></td></tr>
    <% }); %>
  </tbody>
</table>
`;
  const compiled = _.template(templateString);
  const result = compiled({
    users: [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 30 },
      { name: "Charlie", age: 35 },
    ],
  });
  console.log(4, result);
  // Outputs a complete HTML table with user data
}
{
  const messages = {
    open: "Hello ${ first_name }! We are open!",
    closed: "Hello ${ first_name }! We are closed!",
  };
  const sendMessage = _.template(messages.open, {
    interpolate: /\$\{([\s\S]+?)\}/g,
  });
  console.log(5, sendMessage({ first_name: "Jeremy" }));
  // Output: Hello Jeremy! We are open!
}

const template: _.TemplateExecutor = _.template(
  "<% _.forEach(users, function(i) {%>" + "<li><%= i.user %></li>" + "<%});%>"
);
const users = [
  { user: "barney", age: 36, active: false },
  { user: "fred", age: 40, active: false },
  { user: "pebbles", age: 1, active: true },
];
const result: string = template({ users: users });
console.log({ result }); // <li>barney</li><li>fred</li><li>pebbles</li>
