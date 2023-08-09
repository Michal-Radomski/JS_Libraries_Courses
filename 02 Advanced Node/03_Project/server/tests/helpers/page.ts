import puppeteer, { Browser, Page } from "puppeteer";

class CustomPage {
  page: Page;

  static async build() {
    const browser = (await puppeteer.launch({
      headless: false,
      // args: ["--no-sandbox"],
    })) as Browser;

    const page = await browser.newPage();
    const customPage = new CustomPage(page);

    return new Proxy(customPage, {
      get: function (_target, property) {
        return (
          customPage[property as keyof CustomPage] || browser[property as keyof Browser] || page[property as keyof Page]
        );
      },
    });
  }

  constructor(page: Page) {
    this.page = page;
  }
}
