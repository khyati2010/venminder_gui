import { browser, element, by, protractor, Browser } from "protractor";
import { LoginPage } from "../com.venminder.page/LoginPage";

describe("Automate Login Functionality with all possible scenario", () => {
  let loginPage = new LoginPage();

  // TC_1
  it("Login without Username", () => {
    loginPage.loginWithoutUsername();
  });

  // TC_2
  it("Login without Password", () => {
    loginPage.loginWithoutPassword();
  });

  // TC_3
  it("Login with valid Username and Password", () => {
    loginPage.login();
    expect(browser.getTitle()).toEqual("Venminder | Home");
  });
});
