import { test, expect } from '@playwright/test'
import { LoginPage } from '../Page/LoginPage.js'

test('Item Verification Test', async ({ page }) => {

    const login = new LoginPage(page);
    await page.goto('https://www.saucedemo.com/');
    await login.login('standard_user', 'secret_sauce');


    await page.locator('[data-test="product-sort-container"]').selectOption('Price (low to high)');

});