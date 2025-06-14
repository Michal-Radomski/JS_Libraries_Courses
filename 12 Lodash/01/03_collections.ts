import _ from "lodash";

{
  //* The Fisher-Yates shuffle

  /**
   * Shuffles an array in-place using the Fisher-Yates (Knuth) shuffle algorithm.
   *
   * @param array The array to be shuffled.
   * @returns The shuffled array (modified in-place).
   */
  function shuffleArray<T>(array: T[]): T[] {
    let currentIndex = array.length;
    let randomIndex: number;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  // Example usage:
  const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log("Original array:", myNumbers);

  shuffleArray(myNumbers);
  console.log("Shuffled array:", myNumbers); // Output will be a random permutation

  const myStrings = ["apple", "banana", "cherry", "date", "elderberry"];
  console.log("Original array:", myStrings);

  shuffleArray(myStrings);
  console.log("Shuffled array:", myStrings); // Output will be a random permutation
}

//* JS reduce and reduceRight
{
  const numbers = [1, 2, 3, 4];

  // Using reduce (left to right)
  const sumLeftToRight: number = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  console.log(sumLeftToRight); // Output: 10

  // Using reduceRight (right to left)
  const sumRightToLeft: number = numbers.reduceRight((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  console.log(sumRightToLeft); // Output: 10

  const arr = ["a", "b", "c", "d"];

  // Using reduce to concatenate from left to right
  const leftConcat: string = arr.reduce((acc, curr) => acc + curr);
  console.log(leftConcat); // Output: "abcd"

  // Using reduceRight to concatenate from right to left
  const rightConcat: string = arr.reduceRight((acc, curr) => acc + curr);
  console.log(rightConcat); // Output: "dcba"
}

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

  console.log(_.orderBy(objects3, (x) => x.year)); // Ascending
  console.log(_.orderBy(objects3, (x) => x.year, "desc"));
}

{
  //* GroupBy
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

  console.log(_.groupBy(objects3, (i) => i.year));
  console.log(_.groupBy(objects3, (i) => i.month));
}

{
  //* Partition
  const totalSales = [
    { year: 2013, total: 100 },
    { year: 2014, total: 120 },
    { year: 2015, total: 180 },
    { year: 2016, total: 200 },
  ];
  console.log(_.partition(totalSales, (i) => i.total > 150));
  console.log(_.partition(totalSales, (i) => i.total > 180));

  const users = [
    { user: "barney", age: 36, active: true },
    { user: "fred", age: 40, active: false },
  ];
  console.log(_.partition(users, (i) => i.active));
}

{
  //* Shuffle -> collection in randomize order
  const numbers = [1, 2, 3, 4, 5];

  console.log(_.shuffle(numbers));

  const objects = [
    { year: 2016, month: 3 },
    { year: 2014, month: 4 },
    { year: 2012, month: 1 },
    { year: 2019, month: 8 },
  ];

  console.log(_.shuffle(objects));
}

{
  //* Size
  console.log(_.size("hello")); // 5

  const numbers = [1, 2, 3, 4, 5];
  console.log(_.size(numbers)); // 5

  const objects = [
    { year: 2016, month: 3 },
    { year: 2014, month: 4 },
    { year: 2012, month: 1 },
    { year: 2019, month: 8 },
  ];
  console.log(_.size(objects)); // 4

  const letters = ["A", "B", "C", "D", "E"];
  console.log(_.size(letters)); // 5
}

{
  //* Some and Every
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

  console.log(_.every(objects3, (i) => i.year > 2016)); // false
  console.log(_.every(objects3, (i) => i.year >= 2016)); // false
  console.log(_.every(objects3, (i) => i.year >= 2010)); // true

  const users = [
    { user: "barney", age: 36, active: true },
    { user: "fred", age: 40, active: false },
  ];

  console.log(_.every(users, ["active", false])); // false
  console.log(_.some(objects3, (i) => i.year >= 2016)); // true
  console.log(_.some(users, (i) => i.age > 38)); // true
  console.log(_.some(users, (i) => i.active)); // true
}

{
  //* 02. FlatMap, FlatMapDeep and FlatMapDepth
  console.log(_.flatMap([1, 2, 3, 4], (i) => i * i));
  console.log(_.flatMap([1, 2, 3, 4], (i) => [i, i]));
  console.log(_.flatMap([1, 2, 3, 4], (v, i) => `${i}:${v}`));
  console.log(_.flatMapDeep([1, [[2], [22]], [3], 4], (i) => [[[i, i]]]));
  console.log(_.flatMapDepth([1, [[2], [22]], [3], 4], (i) => [[[i, i]]], 1));
  console.log(_.flatMapDepth([1, [[2], [22]], [3], 4], (i) => [[[i, i]]], 2));
  console.log(_.flatMapDepth([1, [[2], [22]], [3], 4], (i) => [[[i, i]]], 3));
  console.log(_.flatMapDepth([1, [[2], [22]], [3], 4], (i) => [[[i, i]]], 4));
  console.log(_.flatMapDepth([1, [[2], [22]], [3], 4], (i) => [[[i, i]]], 5));
}

{
  //* InvokeMap
  console.log(
    _.invokeMap(
      [
        [5, 2, 9],
        [2, 4, 1],
      ],
      "sort"
    )
  );
}

{
  //- KeyBy
  const totalSales = [
    { year: 2013, total: 100 },
    { year: 2014, total: 120 },
    { year: 2015, total: 180 },
    { year: 2016, total: 200 },
  ];
  console.log(_.keyBy(totalSales, (i) => i.year));
  console.log(_.keyBy(totalSales, "year"));

  const users = [
    { user: "barney", age: 36, active: false },
    { user: "fred", age: 40, active: false },
    { user: "pebbles", age: 1, active: true },
  ];
  console.log(_.keyBy(users, (i) => i.user));
}

{
  //* Reduce and ReduceRight
  console.log(_.reduce([1, 2, 3, 4], (sum, m) => sum + m * 2, 0));
  console.log(_.reduce([1, 2, 3, 4], (sum, m) => sum + m * 2, 10));
  console.log(_.reduce([1, 2, 3, 4], (sum, m) => sum + m * 2));

  const array = [
    [0, 1],
    [2, 3],
    [4, 5],
  ];

  console.log(_.reduce(array, (a, m) => a.concat(m)));
  console.log(_.reduceRight(array, (a, m) => a.concat(m)));
}
