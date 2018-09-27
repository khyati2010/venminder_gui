import { browser, element, by, protractor, ExpectedConditions } from "protractor";
import { LoginPageOR } from "../com.venminder.page_object/LoginPageOR";
import { userData, siteUrls } from "../com.venminder.utilities/TestData";
import { TextBox } from "../com.venminder.utilities/TextBox";
import { Click } from "../com.venminder.utilities/Click";

export class LoginPage extends LoginPageOR {
  siteUrls: siteUrls = new siteUrls();
  userData: userData = new userData();
  // textbox = new TextBox();
  // click = new Click();

  async openUrl() {
    await browser.get(this.siteUrls.sand_dev_1_url);
    browser.wait(ExpectedConditions.elementToBeClickable(this.username),10000);
  }

  async enterUserName() {
    await this.username.clear();
   // this.username.sendKeys("");
    this.username.sendKeys(this.userData.admin_username);
  }

  async enterPassword() {
    await this.password.clear();
    //this.password.sendKeys("");
    this.password.sendKeys(this.userData.password);
  }

  async clickOnLoginButton() {
    console.log("Login Button: " + (await this.login_button.getText()));
    this.login_button.submit();
  }

  async getErrorMessage(errorMessage) {
    // let message = this.textbox.getTextValue(this.error_message);
    // console.log("Error Message is:- " + message);
    // expect(message).toEqual(errorMessage);
    let message: any = await this.error_message.getText();
    console.log("Error Message is:- " + message);
    expect(message).toEqual(errorMessage);
  }

  loginWithoutUsername() {
    // this.textbox.setTextValue(this.password, this.userData.password);
    // this.click.buttonClick(this.login_button);
    // this.getErrorMessage("The Username field is required.");
    this.enterPassword();
    this.clickOnLoginButton();
    this.getErrorMessage("The Username field is required.");
  }

  loginWithoutPassword() {
    // this.textbox.setTextValue(this.username, this.userData.admin_username);
    // this.click.buttonClick(this.login_button);
    this.enterUserName();
    this.clickOnLoginButton();
    this.getErrorMessage("The Password field is required.");
  }

  login() {
    // this.textbox.setTextValue(this.username, this.userData.admin_username);
    // this.textbox.setTextValue(this.password, this.userData.password);
    // this.click.buttonClick(this.login_button);
    this.enterUserName();
    this.clickOnLoginButton();
    this.clickOnLoginButton();
  }
}
