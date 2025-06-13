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

//* Pull and PullAll
const array = [1, 2, 3];
console.log(_.pull(array, 1)); // [ 2, 3 ]

const array3 = [1, 2, 3, 4, 5];
console.log(_.pullAll(array3, [1, 2])); // [ 3, 4, 5 ]

//* PullAllBy
{
  const array = [{ a: 1 }, { a: 2 }, { a: 3 }];
  console.log(_.pullAllBy(array, [{ a: 3 }], "a"));
  console.log(_.pullAllBy(array, [{ a: 1 }, { a: 2 }], "a"));
}

{
  //* PullAllWith
  const array = [
    { a: 1, b: 2 },
    { a: 3, b: 4 },
    { a: 5, b: 6 },
  ];
  console.log(_.pullAllWith(array, [{ a: 3, b: 4 }], _.isEqual));
}

{
  //* PullAt
  console.log(_.pullAt([1, 2, 3, 4], [1, 2]));

  const objects3 = [
    { year: 2016, month: 3 },
    { year: 2014, month: 4 },
    { year: 2012, month: 1 },
    { year: 2019, month: 8 },
    { year: 2012, month: 2 },
    { year: 2019, month: 2 },
    { year: 2016, month: 3 },
    { year: 2016, month: 3 },
  ];

  console.log(_.pullAt(objects3, [2, 5, 7]));
}

{
  //* Uniq and UniqBy
  console.log(_.uniq([1, 2, 2, 2, 3, 3, 4, 5])); // [ 1, 2, 3, 4, 5 ]

  console.log(_.uniq([1, 22, 22, 23, 34, 34, 40, 50]));
  console.log(_.uniq(["a", "a", "a", "b", "b"]));

  const objects3 = [
    { year: 2016, month: 3 },
    { year: 2014, month: 4 },
    { year: 2012, month: 1 },
    { year: 2019, month: 8 },
    { year: 2012, month: 2 },
    { year: 2019, month: 2 },
    { year: 2016, month: 3 },
    { year: 2016, month: 3 },
  ];

  console.log(_.uniqBy(objects3, (x) => x.month));
  console.log(_.uniqBy(objects3, (x) => x.year));
}

{
  //* UniqWith
  const arr1 = [
    { a: 1, b: 2 },
    { a: 2, b: 1 },
  ];

  console.log(_.uniqWith(arr1, _.isEqual));
}

{
  //* Union
  console.log(_.union([1, 2, 2, 3]));
  console.log(_.union([1, 2, 2, 3], [2, 2, 23, 4]));
  console.log(_.union([1, 2, 2, 2, 3, 3, 4, 4, 5], [2, 2, 3, 4, 6, 7, 8], [4, 7, 8, 10, 12]));
}

//* UnionBy
console.log(_.unionBy([1.2, 1.3, 1.4], [2.1, 2.2, 2.3], Math.floor));

{
  //* UnionWith
  const arr1 = [
    { a: 1, b: 2 },
    { a: 2, b: 1 },
  ];
  const arr2 = [
    { a: 1, b: 1 },
    { a: 1, b: 2 },
  ];
  console.log(_.unionWith(arr1, arr2, _.isEqual)); // [ { a: 1, b: 2 }, { a: 2, b: 1 }, { a: 1, b: 1 } ]
}

//* First/Head and Last and Nth
console.log(_.first([1, 2, 3, 4, 5])); // 1
console.log(_.head([1, 2, 3, 4, 5])); // 1
console.log(_.last([1, 2, 3, 4, 5])); // 5
console.log(_.nth([1, 2, 3, 4, 5], 3)); // 4

{
  //* Reverse
  const numbers = [1, 2, 3, 4, 5];
  console.log(_.reverse(numbers));
}

{
  //* Initial and Tail
  const numbers = [1, 2, 3, 4, 5];
  console.log(_.initial(numbers)); // [ 1, 2, 3, 4 ]
  console.log(_.tail(numbers)); // [ 2, 3, 4, 5 ]
}

{
  //* Take and TakeRight
  console.log(_.take([1, 2, 3, 4, 5]));
  console.log(_.takeRight([1, 2, 3, 4, 5]));
}

{
  //* TakeWhile and TakeRightWhile
  const users = [
    { user: "barney", age: 36, active: false },
    { user: "fred", age: 40, active: false },
    { user: "pebbles", age: 1, active: true },
  ];

  console.log(_.takeWhile(users, (i) => i.active)); // []
  console.log(_.takeRightWhile(users, { active: false })); // []
}

{
  //* Slice
  console.log(_.slice([1, 2, 3, 4, 5, 6], 0, 2)); // [ 1, 2 ]
  console.log(_.slice([1, 2, 3, 4, 5, 6], 1, 4)); // [ 2, 3, 4 ]
  console.log(_.slice([1, 2, 3, 4, 5, 6], 1)); // [ 2, 3, 4, 5, 6 ]
}

{
  //* Zip and Unzip
  console.log(_.zip([1, 2, 3, 4], [10, 20, 30, 40], [2, 4, 6, 8])); // [ [ 1, 10, 2 ], [ 2, 20, 4 ], [ 3, 30, 6 ], [ 4, 40, 8 ] ]
  console.log(
    _.unzip([
      [1, 10, 2],
      [2, 20, 4],
      [3, 30, 6],
      [4, 40, 8],
    ])
  ); // [ [ 1, 2, 3, 4 ], [ 10, 20, 30, 40 ], [ 2, 4, 6, 8 ] ]
}
