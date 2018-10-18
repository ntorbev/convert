import { browser, protractor } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  waitForElement(el) {
    const EC = protractor.ExpectedConditions;
    browser.wait(EC.visibilityOf(el), 5000);
  }

  optionsSelect(base, target) {
    base.click();
    target.click();
  }
}
