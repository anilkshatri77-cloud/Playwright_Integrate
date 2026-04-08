import { test, expect } from '@playwright/test'
import {  LoginPage } from '../Page/LoginPage.js'

test ('Valid Login Credential @smoke', async({page}) => {
    const login = new LoginPage(page);
    await page.goto('https://www.saucedemo.com/');
    await login.login('standard_user','secret_sauce');
    await expect(page.getByText('Swag Labs')).toBeVisible();

});