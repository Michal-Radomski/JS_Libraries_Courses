import _ from "lodash";
import __ from "underscore";

{
  //* Lodash
  console.log("---Lodash---");
  // 1. Iterate over an array and log each element
  _.forEach([1, 2, 3], function (num: number) {
    console.log({ num }); // Output: 1 2 3
  });

  // 2. Create a new array with each number squared
  const squaredNumbers = _.map([1, 2, 3], function (num: number) {
    return num * num;
  });
  console.log("squaredNumbers:", squaredNumbers); // Output: [1, 4, 9]

  // 3. Filter an array to keep only even numbers
  const evenNumbers = _.filter([1, 2, 3, 4, 5], function (num: number) {
    return num % 2 === 0;
  });
  console.log("evenNumbers:", evenNumbers); // Output: [2, 4]

  // 4. Safely get a nested property value with a fallback default
  const user = { name: "John", address: { city: "New York" } };
  const cityName = _.get(user, "address.city", "Default City");
  console.log({ cityName }); // Output: 'New York'

  // 5. Check if an array is empty
  const isEmptyArray = _.isEmpty([]);
  console.log({ isEmptyArray }); // Output: true
}

{
  //* Underscore
  console.log("---Underscore---");
  // 1. Iterate over an array and log each element
  __.each([1, 2, 3], function (num: number) {
    console.log({ num }); // Output: 1 2 3
  });

  // 2. Create a new array with each number squared
  const squaredNumbers = _.map([1, 2, 3], function (num: number) {
    return num * num;
  });
  console.log("squaredNumbers:", squaredNumbers); // Output: [1, 4, 9]

  // 3. Filter an array to keep only even numbers
  const evenNumbers = __.filter([1, 2, 3, 4, 5], function (num: number) {
    return num % 2 === 0;
  });
  console.log("evenNumbers:", evenNumbers); // Output: [2, 4]

  // 4. Safely get a nested property value (Underscore does not have a built-in `get` method, so use a helper)
  function safeGet(obj: object, path: string, defaultValue: any) {
    return path
      .split(".")
      .reduce((acc, key) => (acc && acc[key as keyof object] !== undefined ? acc[key as keyof object] : defaultValue), obj);
  }
  const user = { name: "John", address: { city: "New York" } };
  const cityName = safeGet(user, "address.city", "Default City");
  console.log({ cityName }); // Output: 'New York'

  // 5. Check if an array is empty
  const isEmptyArray = __.isEmpty([]);
  console.log({ isEmptyArray }); // Output: true
}
