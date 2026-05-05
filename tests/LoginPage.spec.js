import { test, expect } from '@playwright/test'

test('Login Demo Test', async ({ page }) => {

   await page.goto('https://www.saucedemo.com/');
   await page.getByPlaceholder('Username').fill('standard_user');
   await page.getByPlaceholder('Password').fill('secret_sauce');
   await page.getByRole('button', { type: 'submit' }).click();

   await page.waitForTimeout(5000);

});

