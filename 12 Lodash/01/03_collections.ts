import _ from "lodash";

{
  //* Each/ForEach -> the same!

  const users = [
    { user: "barney", age: 36, active: true },
    { user: "fred", age: 40, active: false },
  ];
  _.each(users, (i) => console.log(i.user));

  const totalSales = [
    { year: 2013, total: 100 },
    { year: 2014, total: 120 },
    { year: 2015, total: 180 },
    { year: 2016, total: 200 },
  ];
  let sum = 0;

  _.forEach(totalSales, function (i) {
    sum += i.total;
  });
  console.log({ sum });
}

{
  //* EachRight/ForEachRight

  const users = [
    { user: "barney", age: 36, active: true },
    { user: "fred", age: 40, active: false },
  ];
  _.eachRight(users, (i) => console.log(i.user));

  var totalSales = [
    { year: 2013, total: 100 },
    { year: 2014, total: 120 },
    { year: 2015, total: 180 },
    { year: 2016, total: 200 },
  ];
  _.eachRight(totalSales, (i) => console.log(i.total));
}

{
  //* Sample/ SampleSize -> random element
  const numbers = [1, 2, 3, 4, 5];
  console.log(_.sample(numbers));

  const objects = [
    { year: 2016, month: 3 },
    { year: 2014, month: 4 },
    { year: 2012, month: 1 },
    { year: 2019, month: 8 },
  ];
  console.log(_.sample(objects));

  console.log(_.sampleSize(numbers, 2));
}

{
  //- CountBy
  const numbers = [1, 2, 3, 4, 5];
  console.log(_.countBy(numbers)); // { '1': 1, '2': 1, '3': 1, '4': 1, '5': 1 }

  const objects = [
    { year: 2016, month: 3 },
    { year: 2014, month: 4 },
    { year: 2012, month: 1 },
    { year: 2019, month: 8 },
  ];

  console.log(
    _.countBy(objects, function (x) {
      return x.month;
    })
  ); // { '1': 1, '3': 1, '4': 1, '8': 1 }
  console.log(
    _.countBy(objects, function (x) {
      return x.year;
    })
  ); // { '2012': 1, '2014': 1, '2016': 1, '2019': 1 }
}

{
  //* Filter
  const totalSales = [
    { year: 2013, total: 100 },
    { year: 2014, total: 120 },
    { year: 2015, total: 180 },
    { year: 2016, total: 200 },
  ];

  console.log(_.filter(totalSales, (i) => i.total > 100));
}

{
  //* Map
  const totalSales = [
    { year: 2013, total: 100 },
    { year: 2014, total: 120 },
    { year: 2015, total: 180 },
    { year: 2016, total: 200 },
  ];

  console.log(
    _.map(totalSales, function (i) {
      return i.total * i.total;
    })
  ); // [ 10000, 14400, 32400, 40000 ]
}

{
  //* Reject
  const results = [
    { year: 2013, sales: 100, royalties: 53 },
    { year: 2014, sales: 120, royalties: 35 },
    { year: 2015, sales: 180, royalties: 355 },
  ];

  console.log(_.filter(results, (i) => i.sales < 150));
  console.log(_.reject(results, (i) => i.sales < 150)); // [ { year: 2015, sales: 180, royalties: 355 } ]
}

{
  //* Find and FindLast
  console.log(_.find([1, 2, 3, 4], (i) => i % 2 === 0)); // 2
  console.log(_.findIndex([1, 2, 3, 4], (i) => i % 2 === 0)); // 1

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

  console.log(_.find(objects3, (i) => i.year === 2019)); // { year: 2019, month: 8 }
  console.log(_.findLast([1, 2, 3, 4], (i) => i % 2 === 0)); // 44
  console.log(_.findLast(objects3, (i) => i.month < 6)); // { year: 2016, month: 3 }

  //* JS
  const array1 = [5, 12, 50, 130, 44];
  const found = array1.findLast((element: number) => element > 45);
  console.log({ found }); // Expected output: 130
}

{
  //* Includes
  console.log(_.includes([1, 2, 3, 4, 5], 1)); // true
  console.log(_.includes([1, 2, 3, 4, 5], 10)); // false
}

{
  //* SortBy
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

  console.log(
    _.sortBy(objects3, function (x) {
      return x.year;
    })
  );

  console.log(_.sortBy(objects3, (x) => x.year));
  console.log(_.sortBy(objects3, ["year", "month"]));
}

{
  console.log("--------");
  //* OrderBy
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

  console.log(_.orderBy(objects3, (x) => x.year));
  console.log(_.orderBy(objects3, (x) => x.year, "desc"));
}
