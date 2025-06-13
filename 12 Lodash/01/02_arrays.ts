import _ from "lodash";

//* FindIndex
const objects3 = [
  { year: 2016, month: 3 },
  { year: 2014, month: 4 },
  { year: 2012, month: 1 },
  { year: 2019, month: 8 },
];

console.log(
  _.findIndex(objects3, function (o) {
    return o.year === 2014;
  })
);
console.log(
  _.findIndex(objects3, function (o) {
    return o.year > 2014;
  })
);

//* FindLastIndex
console.log(
  _.findLastIndex(objects3, function (t) {
    return t.year === 2019;
  })
);

console.log(_.findLastIndex(objects3, ["year", 2019]));

//* IndexOf and LastIndexOf
console.log(_.indexOf([1, 2, 1, 2], 2));
console.log(_.indexOf([1, 2, 1, 2], 2, 2));
console.log(_.lastIndexOf([1, 2, 1, 2], 2));
console.log(_.lastIndexOf([1, 2, 1, 2], 2, 2));

//* SortedIndex and SortedLastIndex
console.log(_.sortedIndex([10, 20, 30], 15));
console.log(_.sortedIndex([10, 10, 20, 30], 15));

//* SortedIndexBy and SortedLastIndexBy
const objects = [{ a: 10 }, { a: 20 }, { a: 30 }];
const objects2 = [{ a: 10 }, { a: 20 }, { a: 20 }, { a: 30 }];
console.log(_.sortedIndexBy(objects, { a: 25 }, (i) => i.a)); // 2
console.log(_.sortedLastIndexBy(objects2, { a: 20 }, (i) => i.a)); // 3

//* SortedIndexOf and SortedLastIndexOf
console.log(_.sortedIndexOf([1, 2, 2, 2, 3], 2));
console.log(_.sortedIndexOf([1, 2, 2, 2, 3], 3));
console.log(_.sortedLastIndexOf([1, 2, 2, 2, 3], 2));
console.log(_.sortedLastIndexOf([1, 2, 2, 2, 3], 3));

//* Concat
console.log(_.concat([], 1, 2, 3, 4));
console.log(_.concat([0, 1], 2, 3, 4));

//* Join
console.log(_.join([1, 2, 3, 4, 5])); // 1,2,3,4,5
console.log(_.join([1, 2, 3, 4, 5], "-")); // 1-2-3-4-5

//* Drop and DropRight
console.log(_.drop([1, 2, 3, 4, 5])); // [ 2, 3, 4, 5 ]
console.log(_.drop([1, 2, 2, 3, 4, 5], 2)); // [ 2, 3, 4, 5 ]
console.log(_.dropRight([1, 2, 3, 4, 5])); // [ 1, 2, 3, 4 ]
console.log(_.dropRight([1, 2, 2, 3, 4, 5], 2)); // [ 1, 2, 2, 3 ]

//* DropWhile and DropRightWhile
const users = [
  { user: "barney", age: 36, active: false },
  { user: "fred", age: 40, active: false },
  { user: "pebbles", age: 1, active: true },
];
console.log(
  _.dropWhile(users, function (o) {
    return o.active !== true;
  })
); // { user: 'pebbles', age: 1, active: true } ]
console.log(
  _.dropRightWhile(users, function (o) {
    return o.active !== false;
  })
);
// [
//   { user: 'barney', age: 36, active: false },
//   { user: 'fred', age: 40, active: false }
// ]

//* Fill
console.log(_.fill([1, 2, 3, 4, 5], "*")); // [ '*', '*', '*', '*', '*' ]
console.log(_.fill([1, 2, 3, 4, 5], "a")); // [ 'a', 'a', 'a', 'a', 'a' ]

//- Intersection
console.log(_.intersection([1, 2, 3, 4, 5], [3, 4, 5])); // [ 3, 4, 5 ]

//* IntersectionBy
console.log(_.intersectionBy([2, 4, 5, 6], [4, 8, 10], (i) => i / 2)); // [ 4 ]

{
  //* IntersectionWith
  const obj1 = [
    { a: 1, b: 2 },
    { a: 2, b: 3 },
  ];
  const obj2 = [
    { a: 1, b: 1 },
    { a: 1, b: 2 },
  ];

  console.log(_.intersectionWith(obj1, obj2, _.isEqual)); // [ { a: 1, b: 2 } ]
}
