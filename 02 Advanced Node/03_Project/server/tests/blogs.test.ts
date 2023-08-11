const CustomPage = require("./helpers/pageJS");

let customPage: typeof CustomPage;
// console.log({ page });

beforeEach(async () => {
  customPage = await CustomPage.build();
  // console.log({ page });
  await customPage.goto("http://localhost:3000");
});

afterEach(async () => {
  await customPage.close();
});

test("Adds two numbers", () => {
  const sum = 1 + 2;
  expect(sum).toEqual(3);
});
