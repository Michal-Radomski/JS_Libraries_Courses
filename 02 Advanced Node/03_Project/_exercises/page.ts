console.clear();

class Page {
  goto(url: string) {
    console.log("I'm going to another page" + url);
  }
  setCookie() {
    console.log("I'm setting a cookie");
  }
}

// class CustomPage extends Page {
//   login() {
//     console.log("All of our login login");
//   }
// }

class CustomPage {
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  login() {
    this.page.goto("localhost:3000");
    this.page.setCookie();
  }
}

const page = new Page();
const customPage = new CustomPage(page);

customPage.login();
customPage.page.goto("localhost:3000");
customPage.page.setCookie();
