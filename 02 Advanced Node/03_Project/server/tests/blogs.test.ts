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

test("when logged in, can see blog create form", async () => {
  await customPage.login();
  await customPage.click("a.btn-floating");
  const label = await customPage.getContentsOf("form label");
  expect(label).toEqual("Blog Title");
});
