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
