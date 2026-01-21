const {test,expect} = require('@playwright/test');


test('First playwright test', async ({page}) => {
    //chrome plugin /cookies
    // const context   =browser.newContext();
    // const page =  await context.newPage();
    await page.goto('https://www.google.com');
    console.log(await page.title());
    await expect(page).toHaveTitle('Google');


});

test('Rahul Shetty Academy Test', async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await page.title());
    await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');
    await page.locator('#username').type('rahulshettyacademy');
})