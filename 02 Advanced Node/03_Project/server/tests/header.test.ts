import puppeteer from "puppeteer";

// test("Adds two numbers", () => {
//   const sum = 1 + 2;
//   expect(sum).toEqual(3);
// });

test("We can launch a browser", async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  // console.log("page", page);
  await page.goto("http://localhost:3000");
  const text = await page.$eval("a.brand-logo", (el: HTMLElement) => el.innerHTML);
  // console.log("text:", text);
  expect(text).toEqual("Blogster");
});
