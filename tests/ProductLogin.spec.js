import { test, expect } from '@playwright/test'

test('Login Test', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');

    await expect(page.getByRole('link', { name: 'Sign up' })).toBeVisible();
    await page.getByRole('link', { name: 'Sign up' }).click();

    await expect(page.getByRole('heading', { name: 'Sign up' })).toBeVisible();

    await expect(page.getByLabel('Sign up').getByText('Username:')).toBeVisible();

    //User Input the Username field
    await expect(page.getByRole('textbox', { name: 'Username:' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Username:' }).click();
    await page.getByRole('textbox', { name: 'Username:' }).fill('Anil Kshatri');
    await expect(page.getByRole('textbox', { name: 'Username:' })).toBeVisible();

    //User Input the Password field
    await expect(page.getByLabel('Sign up').getByText('Password:')).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Password:' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Password:' }).click();
    await page.getByRole('textbox', { name: 'Password:' }).fill('@Anil123');
    await expect(page.getByRole('textbox', { name: 'Password:' })).toBeVisible();


    // await page.waitForTimeout(500);


    await page.getByRole('link', { name: 'Amazon.in' })
});