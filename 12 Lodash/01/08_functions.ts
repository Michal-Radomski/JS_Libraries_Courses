import _ from "lodash";

//* Defer
_.defer((text) => console.log(text), "hello");

{
  //* Memoize
  const object = { a: 10, b: 20 };

  _.values(object);

  const mem = _.memoize(_.values);
  console.log("mem:", mem);

  mem(object);

  object.a = 15;

  _.values(object);

  mem(object);

  mem.cache.set(object, [15, 20]);

  mem(object);

  console.log(object);
}

{
  //* Once
  const f = () => _.random(10);

  const once = _.once(f);

  console.log("once:", once);
}

{
  //* Bind
  const c1 = { x: 5, y: 10 };

  const c2 = { x: 10, y: 20 };

  function print(this: any) {
    return this.x + "," + this.year;
  }

  const c1bound = _.bind(print, c1);
  const c2bound = _.bind(print, c2);

  c1bound();
  c2bound();
}

{
  //* Wrap
  const square = (n: number) => n * n;

  const squarenum = _.wrap(6, square);

  const num = squarenum();
  console.log({ num });
}

{
  //* Curry and CurryRight
  var xyz = (x: number, y: number, z: number) => [x, y, z];

  const curried = _.curry(xyz);

  const curriedR = _.curryRight(xyz);

  console.log(curried(1)(2)(3));
  console.log(curriedR(1)(2)(3));
}

{
  //* Partial and PartialRight
  const xyz = (x: number, y: number, z: number) => [x, y, z];

  const part = _.partial(xyz, 1);
  const partR = _.partialRight(xyz, 1);

  console.log(part(2, 3));
  console.log(partR(2, 3));
}

{
  //* OverArgs
  const cube = (n: number) => n * n * n;
  const triple = (n: number) => n * 3;

  const f = _.overArgs((a, b) => [a, b], [cube, triple]);

  console.log(f(3, 5));
  console.log(f(10, 20));
}
