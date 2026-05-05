import { test, expect } from '@playwright/test'
import { LoginPage } from '../Page/LoginPage.js'

test('Dashboard Checkout', async ({ page }) => {
    const login = new LoginPage(page);
    await page.goto('https://www.saucedemo.com/');
    await login.login('standard_user','secret_sauce');

    //Validate Item

    await page.getByText('Sauce Labs Backpack').click();
    await expect(page.getByAltText('Sauce Labs Backpack')).toBeVisible();
    await expect(page.locator("//div[@class='inventory_details_price']")).toBeVisible();
    await page.getByText('Add to cart').click();
    await page.locator('#shopping_cart_container').click();
    
    //Validate the Added Cart
    await expect(page.locator('[data-test="cart-list"]')).toBeVisible();

    await page.locator('#remove-sauce-labs-backpack').click();

    await page.waitForTimeout(5000);

});
