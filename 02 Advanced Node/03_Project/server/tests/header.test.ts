import puppeteer, { Browser, Page } from "puppeteer";

// test("Adds two numbers", () => {
//   const sum = 1 + 2;
//   expect(sum).toEqual(3);
// });

let page: Page;
let browser: Browser;

beforeEach(async () => {
  browser = await puppeteer.launch({ headless: false });
  page = await browser.newPage();
  // console.log("page", page);
  await page.goto("http://localhost:3000");
});

afterEach(async () => {
  await page.close();
  await browser.close();
});

test("the header has the correct text", async () => {
  const text = await page.$eval("a.brand-logo", (el: HTMLElement) => el.innerHTML);
  // console.log("text:", text);
  expect(text).toEqual("Blogster");
});

test("clicking login starts oauth flow", async () => {
  await page.click(".right a");
  const url = await page.url();
  // console.log("url:", url);
  expect(url).toMatch(/accounts\.google\.com/);
});
