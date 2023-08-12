import puppeteer, { Page as PageInterface } from "puppeteer";

const { sessionFactory } = require("../factories/sessionFactory");
const { userFactory } = require("../factories/userFactory");

class CustomPage {
  page: PageInterface;
  constructor(page: PageInterface) {
    this.page = page;
  }

  static async build() {
    const browser = await puppeteer.launch({
      headless: false,
    });
    const page = await browser.newPage();
    const customPage = new CustomPage(page);

    return new Proxy(customPage, {
      get: (target, property, receiver) => {
        if ((target as any)[property]) {
          return (target as any)[property];
        }

        let value = (browser as any)[property];
        if (value instanceof Function) {
          return function (this: any, ...args: any) {
            return value.apply(this === receiver ? browser : this, args);
          };
        }

        value = (page as any)[property];
        if (value instanceof Function) {
          return function (this: any, ...args: any) {
            return value.apply(this === receiver ? page : this, args);
          };
        }
        return value;
      },
    });
  }

  async login() {
    const user = await userFactory();
    const { sessionString, cookieSig } = sessionFactory(user);

    await this.page.setCookie({ name: "session", value: sessionString });
    await this.page.setCookie({ name: "session.sig", value: cookieSig });
    // Refresh page
    // await this.page.goto("http://localhost:3000");
    await this.page.goto("http://localhost:3000/blogs");
    // Wait until the element appears
    await this.page.waitForSelector('a[href="/auth/logout"]');
  }

  async getContentsOf(selector: string) {
    return this.page.$eval(selector, (el) => el.innerHTML);
  }
}

module.exports = CustomPage;
