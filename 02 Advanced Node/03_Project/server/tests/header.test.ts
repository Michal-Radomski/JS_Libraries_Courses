import puppeteer, { Browser, Page } from "puppeteer";

import { sessionFactory } from "./factories/sessionFactory";
import { userFactory } from "./factories/userFactory";
import { IUserModel } from "../models/UserModel";

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
  const text = await page.$eval("a.brand-logo", (el: HTMLAnchorElement) => el.innerHTML);
  // console.log("text:", text);
  expect(text).toEqual("Blogster");
});

test("clicking login starts oauth flow", async () => {
  await page.click(".right a");
  const url = await page.url();
  // console.log("url:", url);
  expect(url).toMatch(/accounts\.google\.com/);
});

//* test.only("when signed in, shows logout button", async () => { //* run this test only!
test("when signed in, shows logout button", async () => {
  const user = await userFactory();
  // console.log("user:", user);
  const { sessionString, cookieSig } = await sessionFactory(user as IUserModel);
  // console.log({ sessionString, cookieSig });

  await page.setCookie({ name: "session", value: sessionString });
  await page.setCookie({ name: "session.sig", value: cookieSig });
  await page.goto("http://localhost:3000");

  await page.waitForSelector('a[href="/auth/logout"]');
  const text = await page.$eval('a[href="/auth/logout"]', (el: HTMLAnchorElement) => el.innerHTML);
  expect(text).toEqual("Logout");
});
