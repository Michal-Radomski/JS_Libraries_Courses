import _ from "lodash";

{
  //* Functions
  const vehicle = {
    drive: () => {
      console.log("test");
    },
    brake: () => {
      console.log("test");
    },
  };

  console.log(_.functions(vehicle)); // [ 'drive', 'brake' ]
}

{
  //* Get, Has, At, Set
  const myobject = { a: 1, b: { c: 2, d: 3 }, e: [1, 2, 3] };

  console.log(_.get(myobject, "a")); // 1
  console.log(_.get(myobject, "b.c")); // 2

  console.log(_.has(myobject, "b.c")); // true

  console.log(_.at(myobject, "a")); // [1]

  _.set(myobject, "a", 2);

  _.set(myobject, "e.0", 0);

  console.log(myobject);
}

{
  //* SetWith
  const object = {};

  _.set(object, ["x", 0], 99);

  _.setWith(object, ["x", 0], 99, Object);

  console.log(object); // { x: [ 99 ] }
}

{
  //* Unset
  const myobject = {
    a: 2,
    b: { c: 2, d: 3 },
    e: [0, 2, 3, , 99, , , , , 99],
    z: -2,
    x: { a: { e: undefined } },
  };

  _.unset(myobject, "z");

  _.unset(myobject, "x.a.e");

  _.unset(myobject, "x.a");

  _.unset(myobject, "x");

  console.log(myobject);
}

{
  //* Update
  const myobject = { a: 2, b: { c: 2, d: 3 }, e: [1, 2, 3] };

  _.set(myobject, "a", 99);

  _.update(myobject, "a", (i) => i * 2);

  console.log(myobject); // { a: 198, b: { c: 2, d: 3 }, e: [ 1, 2, 3 ] }
}

{
  //* UpdateWith
  const object = {};

  _.updateWith(object, ["x", "0"], _.constant(5), Object);
  console.log(object); // { x: { '0': 5 } }
}

{
  //* Assign
  const myobject = { a: 1, b: 2 };

  _.assign({ c: 3 }, myobject);

  _.assign(myobject, { c: 3 });

  _.assign(myobject, { c: 99 });

  console.log(myobject); // { a: 1, b: 2, c: 99 }
}

{
  //- Invert
  const object = { a: 1, b: 2, c: 3 };
  console.log(_.invert(object)); // { '1': 'a', '2': 'b', '3': 'c' }

  const object2 = { a: 1, b: 2, c: 2 };
  console.log(_.invert(object2)); // { '1': 'a', '2': 'c' }
}

{
  //* InvertBy
  const object2 = { a: 1, b: 2, c: 2 };

  console.log(_.invertBy(object2)); // { '1': [ 'a' ], '2': [ 'b', 'c' ] }
}

{
  //* Keys and Values
  const obj = { a: 1, b: 2, c: 3 };

  console.log(_.keys(obj)); // [ 'a', 'b', 'c' ]
  console.log(_.values(obj)); // [ 1, 2, 3 ]
}

//- MapKeys
console.log(_.mapKeys({ a: 1, b: 2 }, (value, key) => key + value)); // { a1: 1, b2: 2 }

{
  //- MapValues
  const users = [
    { user: "barney", age: 36, active: true },
    { user: "fred", age: 40, active: false },
  ];

  console.log(_.mapValues(users, (i) => i.age)); // { '0': 36, '1': 40 }
  console.log(_.mapValues(users, (i) => i.user)); // { '0': 'barney', '1': 'fred' }
}

{
  //- Omit
  const object = { a: 1, b: 2, c: 3 };
  console.log(_.omit(object, "a")); // { b: 2, c: 3 }

  console.log(_.omit(object, ["a", "b"])); // { c: 3 }
}

{
  //* OmitBy
  const object = { a: 1, b: 2, c: 3 };
  console.log(_.omit(object, "a")); // { b: 2, c: 3 }

  console.log(_.omitBy(object, _.isNumber)); // {}
  console.log(_.omitBy(object, !_.isNumber)); // { a: 1, b: 2, c: 3 }
}

{
  //* FindKey
  const users = [
    { user: "barney", age: 36, active: false },
    { user: "fred", age: 40, active: false },
    { user: "pebbles", age: 1, active: true },
  ];

  console.log(_.find(users, (i) => i.age < 40)); // { user: 'barney', age: 36, active: false }

  console.log(_.findKey(users, (i: { user: string; age: number; active: boolean }) => i.age === 40)); // 1
}

{
  //* Defaults and Defaults Deep
  const myobject = { a: 1, b: undefined };
  console.log(_.defaults(myobject, { a: 2, b: 3 })); // { a: 1, b: 3 }

  const myobject1 = { a: 1, b: { c: { d: undefined } } };
  console.log(_.defaultsDeep(myobject1, { b: { c: { d: 2 } } })); // { a: 1, b: { c: { d: 2 } } }
}

{
  //* Invoke
  const object = { a: [{ b: { c: [1, 2, 3, 4] } }] };

  console.log(_.invoke(object, "a[0].b.c.slice", 1, 3)); // [ 2, 3 ]
}

{
  //* Result
  const myobject = { a: _.constant(1), b: { c: 2, d: 3 }, f: () => 5 };
  console.log(_.result(myobject, "a")); // 1
}

{
  //* Pick and PickBy
  const myobject = { a: 1, b: 2, c: 3 };

  console.log(_.pick(myobject, ["a", "b"])); // { a: 1, b: 2 }
  console.log(_.pick(myobject, ["c"])); // { c: 3 }
  console.log(_.pickBy(myobject, _.isNumber)); // { a: 1, b: 2, c: 3 }
}

{
  //* ForOwn and ForOwnRight
  const myobject = { a: 1, b: 2, c: 3 };

  console.log(_.forOwn(myobject, (value, key) => console.log(key, value))); // c 3 b 2 a 1
  console.log(_.forOwnRight(myobject, (value, key) => console.log(key, value))); // { a: 1, b: 2, c: 3 }
}
