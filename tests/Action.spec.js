import {test, expect} from '@playwright/test'
import { checkPrime } from 'node:crypto';

test('Item Verification', async({page}) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('//div[@class="footer_copy"]').scrollIntoViewIfNeeded();
    await window.scrollTo(500, 0);
    await window.scrollBy(200,100);


    //upload
    await page.getByRole().setInputFiles();

    //download
    const downloadPromise = await page.waitForEvent('download');
    await page.getByText('download').click();

    const download = await downloadPromise;
    await download.saveAs('download/Sample.pdf');

    //Select dropdown or Select Option
    await page.getByLabel('Anil').selectOption();

    //check box
    await page.getByRole('Radio', {text : 'Anil'}).check();

    //Multiple Check option
    let CheckBox = ["Apple", "Chiku", "Banana"];

    await page.check(CheckBox);

    //screenshot
    await page.screenshot({path:sample.png, fullPage:true, quality: 100, type: png});

    



});