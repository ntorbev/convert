import { AppPage } from './app.po';
import { $, $$ } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display input amount', () => {
    page.navigateTo();
    page.optionsSelect($('select option:nth-child(3)'), $$('select :nth-child(2)').get(1));
    $('input').sendKeys(3);

    const inputAmount = $('.pr-inputAmount');
    page.waitForElement(inputAmount);

    expect(inputAmount.getText()).toBe('3');
  });

  it('should display target currency', () => {
    page.navigateTo();
    page.optionsSelect($('select option:nth-child(2)'), $$('select :nth-child(4)').get(1));
    $('input').sendKeys(3);

    const targetCurrency = $('.pr-targetCurrency');
    page.waitForElement(targetCurrency);

    expect(targetCurrency.getText()).toBe('CAD');
  });
});
