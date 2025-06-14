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
