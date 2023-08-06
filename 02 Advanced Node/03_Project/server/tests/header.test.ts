import * as dotenv from "dotenv";
dotenv.config();
import puppeteer, { Browser, Page } from "puppeteer";
import { Buffer } from "safe-buffer";
import Keygrip from "keygrip";

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

test("when signed in, shows logout button", async () => {
  // await page.login();
  // const text = await page.$eval('a[href="/auth/logout"]', (el: HTMLAnchorElement) => el.innerHTML);
  // expect(text).toEqual("Logout");

  // console.log({Buffer});
  const id = process.env.myMondoDB_Id as string;
  // console.log({ id });
  const sessionObject = {
    passport: {
      user: id,
    },
  };

  // Import config
  const keys = require("../config/keys");
  const keygrip = new Keygrip([keys.cookieKey]);
  // console.log({ keygrip });

  const sessionString = Buffer.from(JSON.stringify(sessionObject)).toString("base64");
  // console.log({ sessionString });
  const sig = sessionString && keygrip.sign("session=" + sessionString);
  // console.log({ sig });
});
