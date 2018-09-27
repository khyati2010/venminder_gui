import {
  browser,
  element,
  by,
  protractor,
  ElementFinder,
  ExpectedConditions
} from "protractor";

export class Click {
  /**
   * Click
   */
  async buttonClick(locator: ElementFinder) {
    if ((await locator) != null) {
      if(locator.isEnabled()){
      browser.wait(ExpectedConditions.elementToBeClickable(locator), 20000);
      await locator.submit();
    }
    } else {
      throw new Error("Element not Clickable Exception");
    }
  }
}
