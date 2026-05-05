import { test, expect } from '@playwright/test'

test('Login Test', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');

    await expect(page.getByRole('link', { name: 'Sign up' })).toBeVisible();
    await page.locator('#carouselExampleIndicators').getByRole('button', { name: 'Next' }).click();
    await page.getByRole('link', { name: 'Sign up' }).click();
    await expect(page.getByRole('heading', { name: 'Sign up' })).toBeVisible();

    await expect(page.getByLabel('Username:')).toBeVisible();

    //span[normalize-space()='Flights']

    await page.getByText('Flights', { exact: true })
    // await page.waitForTimeout(500);

});