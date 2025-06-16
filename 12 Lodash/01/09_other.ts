import _ from "lodash";

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
