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

//* Deburr
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
