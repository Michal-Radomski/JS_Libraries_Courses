import puppeteer, { Browser as BrowserInterface, Page as PageInterface } from "puppeteer";

export default class CustomPage {
  page: PageInterface;

  static async build() {
    const browser = (await puppeteer.launch({
      headless: false,
      // args: ["--no-sandbox"],
    })) as BrowserInterface;

    const page = await browser.newPage();
    const customPage = new CustomPage(page);

    return new Proxy(customPage, {
      get: function (_target, property) {
        return (
          customPage[property as keyof CustomPage] ||
          browser[property as keyof BrowserInterface] ||
          page[property as keyof PageInterface]
        );
      },
    });
  }

  constructor(page: PageInterface) {
    this.page = page;
  }
}

//* export default class CustomPage above!
// export default CustomPage;
