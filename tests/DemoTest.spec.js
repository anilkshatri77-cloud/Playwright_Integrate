import { test, expect } from '@playwright/test';
import { LoginPage } from '../Page/LoginPage.js';
import { DashboardPage } from '../Page/DashboardPage.js';

test.describe('Demo Test - Login and Dashboard Validation', () => {

    test('Validate Login, Header and First Product', async ({ page }) => {
        // Initialize Page Objects
        const loginPage = new LoginPage(page);
        const dashboardPage = new DashboardPage(page);

        // Step 1: Open the URL
        await page.goto('https://www.saucedemo.com/');

        // Step 2: Enter Username and Password
        await loginPage.login('standard_user', 'secret_sauce');

        // Step 3: Validate the header on the dashboard
        await expect(dashboardPage.isHeaderVisible()).toBeTruthy();
        const headerText = await dashboardPage.getHeaderText();
        console.log('Header Text:', headerText);
        expect(headerText).toContain('Swag Labs');

        // Step 4: Validate the first product in the page
        await expect(dashboardPage.isFirstProductVisible()).toBeTruthy();
        const firstProductName = await dashboardPage.getFirstProductName();
        console.log('First Product Name:', firstProductName);
        expect(firstProductName).toBeTruthy();
    });
});