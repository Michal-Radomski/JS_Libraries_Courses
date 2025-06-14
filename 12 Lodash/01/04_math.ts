import _ from "lodash";

//* Add, Subtract, Multiply and Divide
console.log(_.add(10, 2));
console.log(_.subtract(10, 2));
console.log(_.multiply(10, -5));
console.log(_.divide(10, 2));

//- Round
console.log(_.round(4.3));
console.log(_.round(44.36, 1));
console.log(_.round(44.36234234, 2));

//* Floor and Ceil
console.log(_.floor(5.9));
console.log(_.ceil(5.0000000001));
console.log(_.ceil(543, -1)); // 550

//* Min and Max
console.log(_.max([34.34, 423.234, 56.43]));
console.log(_.min([5, 3, 7, 4, 8, 9]));

{
  //* MinBy and MaxBy
  const results = [
    { year: 2013, sales: 100, royalties: 53 },
    { year: 2014, sales: 120, royalties: 35 },
    { year: 2015, sales: 180, royalties: 355 },
  ];

  console.log(
    _.maxBy(results, function (item) {
      return item.sales;
    })
  );
  console.log(_.minBy(results, "royalties"));
}

//* Sum and Mean
console.log(_.sum([23.43, -43.23, -2.23]));
console.log(_.mean([10, 20, 30]));

{
  //* SumBy and MeanBy
  const results = [
    { year: 2013, sales: 100, royalties: 53 },
    { year: 2014, sales: 120, royalties: 35 },
    { year: 2015, sales: 180, royalties: 355 },
  ];

  console.log(
    _.sumBy(results, function (item) {
      return item.sales;
    })
  );
  console.log(_.meanBy(results, (i) => i.sales));
}

//* Clamp
console.log(_.clamp(10, 15, 20)); // 15
console.log(_.clamp(22, 15, 20)); // 20

//* InRange
console.log(_.inRange(3, 2, 4)); // true
console.log(_.inRange(2, 2, 4)); // true
console.log(_.inRange(5, 2, 4)); // false

//* Random
console.log(_.random(10));
console.log(_.random(0, 10));
console.log(_.random(5, 10));
