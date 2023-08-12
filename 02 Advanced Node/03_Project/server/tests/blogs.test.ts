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

//* Test 4
// test("when logged in, we can see blog create form", async () => {
//   await customPage.login();
//   await customPage.click("a.btn-floating");
//   const label = await customPage.getContentsOf("form label");
//   expect(label).toEqual("Blog Title");
// });

describe("When logged in, we", () => {
  beforeEach(async () => {
    await customPage.login();
    await customPage.click("a.btn-floating");
  });

  //* Test 4 moved here
  test("can see blog create form", async () => {
    const label = await customPage.getContentsOf("form label");
    expect(label).toEqual("Blog Title");
  });
  //* Test 4 -> V2
  // it("shows a  blog create form", async () => {
  //   const label = await customPage.getContentsOf("form label");
  //   expect(label).toEqual("Blog Title");
  // });

  describe("and using invalid inputs", () => {
    beforeEach(async () => {
      await customPage.click("form button");
    });

    test("the form shows an error message", async () => {
      const titleError = await customPage.getContentsOf(".title .red-text");
      const contentError = await customPage.getContentsOf(".content .red-text");

      expect(titleError).toEqual("You must provide a value");
      expect(contentError).toEqual("You must provide a value");
    });
  });

  describe("and using valid inputs", () => {
    beforeEach(async () => {
      await customPage.type(".title input", "My Title");
      await customPage.type(".content input", "My Content");
      await customPage.click("form button");
    });

    test("Submitting takes user to review screen", async () => {
      const text = await customPage.getContentsOf("h5");
      expect(text).toEqual("Please confirm your entries");
    });
  });
});
