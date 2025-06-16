import _ from "lodash";
import _s from "underscore.string";

//+ Sequencing and Chaining

//* Value, ValueOf and ToJSON
console.log(_([1, 2, 3]).concat([4, 5, 6]).valueOf());
console.log(_([1, 2, 3]).concat([4, 5, 6]).toJSON());

//* Tap
console.log(_([1, 2, 3, 4, 5]).reverse().first()); // 5
console.log(
  _([1, 2, 3, 4, 5])
    .tap(function (array) {
      array.pop();
    })
    .reverse()
    .first()
); // 4

//* Thru
console.log(
  _([1, 2, 3, 4, 5])
    .thru((x) => [4, 5, 6])
    .reverse()
    .value()
); // [ 6, 5, 4 ]

{
  //* At
  const object = { a: 1, b: { c: [2, 3] } };
  console.log(_.at(object, ["a"])); // [ 1 ]
  console.log(_.at(object, ["a", "b"])); // [ 1, { c: [ 2, 3 ] } ]
}

//+ Underscore.String

//- Formatting Numbers
console.log(_s.numberFormat(2000, 2));
console.log(_s.numberFormat(2234.234234, 2));

//* Comparing Strings - Levenshtein
console.log(_s.levenshtein("kitten", "sitten")); // 1
console.log(_s.levenshtein("kitten", "apple")); // 5

//* Counting - Count
console.log(_s.count("hello world", "l"));
console.log(_s.count("banana", "an"));

//* Slugify
console.log(_s.slugify("hello!WorlD  _:2323++")); // hello-world-2323
console.log(_s.slugify("hello!World)  dasd %3455£££++Déjà vu")); // hello-world-dasd-3455-deja-vu
