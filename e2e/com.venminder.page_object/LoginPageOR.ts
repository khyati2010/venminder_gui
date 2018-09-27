import { browser, element, by, protractor } from "protractor";

export class LoginPageOR {
  username = element(by.id("Username"));
  password = element(by.id("Password"));
  login_button = element(by.name("button"));
  error_message = element(by.css("div.validation-summary-errors>ul>li"));
}
