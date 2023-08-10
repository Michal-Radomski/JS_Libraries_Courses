import puppeteer, { Browser as BrowserInterface, Page as PageInterface } from "puppeteer";

export default class CustomPage {
  page: PageInterface;

  //* V1
  // static async build() {
  //   const browser = (await puppeteer.launch({
  //     headless: false,
  //     // args: ["--no-sandbox"],
  //   })) as BrowserInterface;

  //   const page = await browser.newPage();
  //   const customPage = new CustomPage(page);

  //   return new Proxy(customPage, {
  //     get: function (_target, property) {
  //       return (
  //         customPage[property as keyof CustomPage] ||
  //         browser[property as keyof BrowserInterface] ||
  //         page[property as keyof PageInterface]
  //       );
  //     },
  //   });
  // }

  //* V2
  static async build() {
    const browser = (await puppeteer.launch({
      headless: false,
    })) as BrowserInterface;

    const page = await browser.newPage();
    const customPage = new CustomPage(page);

    return (
      new Proxy(customPage, {
        get(target, property, receiver) {
          if (target[property as keyof CustomPage]) {
            return target[property as keyof CustomPage];
          }

          const value = (page as any)[property];
          if (value instanceof Function) {
            return function (this: any, ...args: any) {
              return value.apply(this === receiver ? page : this, args);
            };
          }

          return value;
        },
      }) instanceof CustomPage && page
    );
  }

  constructor(page: PageInterface) {
    this.page = page;
  }
}

//* export default class CustomPage above!
// export default CustomPage;
