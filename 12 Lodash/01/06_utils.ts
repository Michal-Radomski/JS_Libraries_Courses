import _ from "lodash";

{
  //* Attempt
  const func = (p: number) => {
    return p / 2;
  };

  const result1 = _.attempt(func, 10);
  const result2 = _.attempt(func, 20);
  console.log("result1, result2:", result1, result2); // 5 10
}

{
  //* Constant
  const f = _.constant(2);
  console.log({ f });
}

{
  //* DefaultTo
  const myTest = undefined;
  console.log(_.defaultTo(myTest, true));
  console.log(_.defaultTo(myTest, 10));
}

//* toPath
console.log(_.toPath("a.b")); // [ 'a', 'b' ]

//* UniqueId
console.log(_.uniqueId("#"));

//* Now = Date.now()
console.log(_.now());

{
  //* Matches
  const objects = [
    { a: 1, b: 2, c: 3 },
    { a: 4, b: 5, c: 6 },
  ];

  console.log(_.filter(objects, _.matches({ a: 4, b: 5 })));
}

{
  //* Property
  const objects = [
    { a: 1, b: 2, c: [3, 4, 5], d: { a: 3, b: 4 } },
    { a: 11, b: 22, c: [33, 44, 55], d: { a: 33, b: 44 } },
  ];

  console.log(_.map(objects, _.property("d.a")));
}

//* Range and RangeRight
console.log(_.range(10));
console.log(_.rangeRight(10));

{
  //* Iteratee
  const totalSales = [
    { year: 2013, total: 100 },
    { year: 2014, total: 120 },
    { year: 2015, total: 180 },
    { year: 2016, total: 200 },
  ];
  const results = [
    { year: 2013, sales: 100, royalties: 53 },
    { year: 2014, sales: 120, royalties: 35 },
    { year: 2015, sales: 180, royalties: 355 },
  ];

  const myfilter = _.iteratee((i) => i.year > 2014);

  console.log(_.filter(totalSales, myfilter));
  console.log(_.filter(results, myfilter));
}

{
  //* Conforms
  const objects = [
    { a: 1, b: 2 },
    { a: 1, b: 3 },
  ];

  const f = _.conforms({ b: (i: number) => i > 2 });
  console.log(_.filter(objects, f));
}

{
  //* Cond
  const f = _.cond([
    [_.matches({ a: 1 }), _.constant("a")],
    [_.matches({ b: 2 }), _.constant("b")],
    [_.stubTrue, _.constant("nomatch")],
  ]);

  console.log(f({ a: 1 }));
  console.log(f({ b: 2 }));
}

{
  //* Flow and FlowRight
  const sq = (n: number) => n * n;

  const div = (n: number) => n / 2;

  const func = _.flow([sq, div]);

  console.log(func(10)); // 50

  const func2 = _.flowRight([sq, div]);

  console.log(func2(10)); // 25
}
