import _ from "lodash";

//* Eq and IsEqual
console.log(_.eq("a", "a")); // true
console.log(_.eq({ a: 1 }, { a: 1 })); // false
console.log(_.isEqual({ a: 1 }, { a: 1 })); // true

{
  //* IsEqualWith
  const myarray = [2, 4];
  const myarray2 = [4, 8];

  const compare = function (objValue: number[], othValue: number[]): boolean {
    console.log(objValue, othValue);
    const v1 = _.reduce(objValue, (sum, m) => sum + m, 0);
    const v2 = _.reduce(othValue, (sum, m) => sum + m, 0);
    console.log(v1, v2);
    return v1 % 2 === 0 && v2 % 2 === 0;
  };

  console.log(_.isEqualWith(myarray, myarray2, compare));
}

//* Gt, Gte, Lt and Lte
console.log(_.gt(10, 20)); // false
console.log(_.gte(20, 20)); // true
console.log(_.lt(10, 20)); // true
console.log(_.lte(10, 20)); // true

//* IsArguments
console.log(_.isArguments([])); // false

//* IsArray
console.log(_.isArray([1, 2, 3, 4, 5])); // true

//* IsArrayLike
console.log(_.isArrayLike([1, 2, 3])); // true
console.log(_.isArrayLike("abc")); // true

//*  IsArrayLikeObject
console.log(_.isArrayLikeObject([1, 2, 3]));
console.log(_.isArrayLikeObject("abc"));
console.log(_.isArrayLikeObject({}));

//* IsBoolean and IsString
console.log(_.isBoolean(false));
console.log(_.isBoolean("true"));
console.log(_.isString(`hello`));

//* IsDate
console.log(_.isDate(new Date())); // true
console.log(_.isDate("2007-06-21 00:00:00")); // false
console.log(_.isDate(new Date("2007-06-21 00:00:00"))); // true

//* IsError
console.log(_.isError(Error())); // true
console.log(_.isError(new Error())); // true
console.log(_.isError(SyntaxError())); // true

//* IsEmpty
console.log(_.isEmpty(null)); // true
console.log(_.isEmpty(undefined)); // true
console.log(_.isEmpty(false)); // true
console.log(_.isEmpty("")); // true
console.log(_.isEmpty(0)); // true
console.log(_.isEmpty(3)); // true
console.log(_.isEmpty([3, 4])); // false

//* IsFunction
function test() {
  return true;
}
console.log(_.isFunction(test)); // true
console.log(_.isFunction(test())); // false

//* isInteger, isNumber and isFinite
console.log(_.isInteger(3)); // true
console.log(_.isNumber(3.7)); // true
console.log(_.isFinite(3.7)); // true

//* isLength
const numbers = [1, 2, 3, 4, 5];
console.log(_.isLength(numbers.length));

//* isMap, isWeakMap, isSet and isWeakSet
const map = new Map();
const wmap = new WeakMap();
console.log(_.isMap(map)); // true
console.log(_.isWeakMap(wmap)); // true

const set = new Set();
const wset = new WeakSet();
console.log(_.isSet(set)); // true
console.log(_.isWeakSet(wset)); // true

//* isNaN
console.log(_.isNaN(NaN)); // true
console.log(_.isNaN(100)); // false
console.log(_.isNaN(new Number())); // false;

//* isNull and isNil
console.log(_.isNull(null)); // true
console.log(_.isNull(undefined)); // false
console.log(_.isNil(null)); // true
console.log(_.isNil(undefined)); // true

//* isNative
console.log(_.isNative(Array.prototype.push)); // true

//* isObject
console.log(_.isObject({})); // true

//* isObjectLike
console.log(_.isObjectLike({})); // true
console.log(_.isObjectLike("")); // false
console.log(_.isObjectLike([])); // true

//* isPlainObject
console.log(_.isPlainObject({})); // true
console.log(_.isPlainObject({ year: 2016 })); // true

//* isRegExp
console.log(_.isRegExp(/(.*)/)); // true

//* isSymbol
console.log(_.isSymbol(Symbol.iterator)); // true
