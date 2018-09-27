import {
  browser,
  element,
  by,
  protractor,
  ElementFinder,
  ExpectedConditions,
  ElementArrayFinder,
  promise
} from "protractor";

export class TextBox {
  /**
   * setTextValue
   */
  async setTextValue(locator: ElementFinder, data: string) {
    if ((await locator) != null) {
      browser.wait(ExpectedConditions.presenceOf(locator), 20000);
      locator.clear();
      locator.sendKeys("");
      locator.sendKeys(data);
    } else throw new Error("Element not Present Exception");
  }

  /**
   * getTextValue
   */
  async getTextValue(locator: ElementFinder) {
    let data: any = "";
    if ((await locator) != null) {
      browser.wait(ExpectedConditions.presenceOf(locator), 20000);
      //data = await locator.getText();
      locator.getText().then(function(text) {
        data = text;
      });
    } else {
      throw new Error("Element not Visiable Exception");
    }
    return data;
  }

  // public getTextValueWithIndex(locator: ElementArrayFinder, index:number) {
  // 	let data: string = null;
  // 	let count: number = 0;
  // 	if (findElements(locator != null) {
  // 		List<WebElement> list = findElements(locator);
  // 		for (WebElement element : list) {
  // 			if (verifyElement.isElementPresent(element)) {
  // 				if (count == index) {
  // 					text = element.getText();
  // 				}
  // 			}
  // 			count++;
  // 		}
  // 	} else {
  // 		Loggers.error("Get text Web Element Not Located : " + locator);
  // 		throw new Exception("Get text Web Element Not Located : " + locator);
  // 	}
  // 	return text;
  // }

  // public getAttributeValue(locator: ElementFinder, attributeName:string) {
  // 	let attributeValue: string = null;
  // 	element = findElement(locator);
  // 	if (element != null)
  // 		attributeValue = element.getAttribute(attributeName);
  // 	else {
  // 		Loggers.error("Get text Web Element Not Located : " + locator);
  // 		throw new Exception("Get text Web Element Not Located : " + locator);
  // 	}
  // 	return attributeValue;
  // }

  //  public String getElementColour(By locator, String attributeName) throws Exception {
  //   String attributeValue = null;
  //   element = findElement(locator);
  //   if (element != null)
  //    attributeValue = element.getCssValue(attributeName);
  //   else {
  //    Loggers.error("Get colour Web Element Not Located : " + locator);
  //    throw new Exception("Get colour Web Element Not Located : " + locator);
  //   }
  //   return attributeValue;
  //  }

  //  public String getElementColour(By locator, int index, String attributeName) throws Exception {
  //   String attributeValue = null;
  //   element = findElement(locator, index);
  //   if (element != null)
  //    attributeValue = element.getCssValue(attributeName);
  //   else {
  //    Loggers.error("Get colour Web Element Not Located : " + locator);
  //    throw new Exception("Get colour Web Element Not Located : " + locator);
  //   }
  //   return attributeValue;
  //  }
}
