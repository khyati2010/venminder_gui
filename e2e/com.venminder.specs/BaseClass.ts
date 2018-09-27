import { browser, element, by, protractor, Browser } from "protractor";
import { LoginPage } from "../com.venminder.page/LoginPage";

let loginPage = new LoginPage();

beforeAll(() => {
  console.log("Passing URL in browser");
  loginPage.openUrl();
});

afterAll(() => {
  console.log("Quite browser");
  browser.quit();
});
