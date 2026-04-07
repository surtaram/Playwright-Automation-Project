const {test,expect} = require('@playwright/test');
const {chromium} = require('playwright');

// let browser;
// let context;
// let page;


// test.beforeAll(async()=>{
//     goto('https://rahulshettyacademy.com/loginpagePractise/');
// });


// test('First playwright test', async ({page}) => {
//     //chrome plugin /cookies
//     // const context   =browser.newContext();
//     // const page =  await context.newPage();
//     await page.goto('https://www.google.com');
//     console.log(await page.title());
//     await expect(page).toHaveTitle('Google');
// });



test.describe('Rahul Shetty Academy Login Tests', () => {
    test.beforeEach(async ({page}) => {

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

});
test('TC-01,Rahul Shetty Academy login Test with incorrect password @smoke', async ({page}) => {
    //await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const username=page.locator('#username');
    const password=page.locator('[type="password"]');
    const signInButton=page.locator('[type="submit"]');
    console.log(await page.title());
    await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');
    await username.type('rahulshettyacademy');
    await password.type('Learning@830$3mK211');
    await signInButton.click();
    await page.waitForTimeout(3000) //"hard wait" (or static wait) is generally discouraged in favor of dynamic waits
    //wait until the element is visible
    console.log(await page.locator("[style*='block']").textContent())
    await expect(page.locator("[style*='block']")).toContainText('Incorrect')
})

test('TC-02,Rahul Shetty Academy login Test with incorrect username @sanity', async ({page}) => {
    //await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const username=page.locator('#username');
    const password=page.locator('[type="password"]');
    const signInButton=page.locator('[type="submit"]');
    console.log(await page.title());
    await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');
    await username.type('rahulshettyacademy');
    await password.type('Learning@830$3mK211');
    await signInButton.click();
    await page.waitForTimeout(3000) //"hard wait" (or static wait) is generally discouraged in favor of dynamic waits
    //wait until the element is visible
    console.log(await page.locator("[style*='block']").textContent())
    await expect(page.locator("[style*='block']")).toContainText('Incorrect')
})

test('TC-03,Rahul Shetty Academy login Test with correct username & password @smoke', async ({page}) => {
    //await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const username=page.locator('#username');
    const password=page.locator('[type="password"]');
    const signInButton=page.locator('[type="submit"]');
    console.log(await page.title());
    await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');
    await username.type('rahulshettyacademy');
    await password.type('Learning@830$3mK2');
    await signInButton.click();
    await page.waitForTimeout(3000) //"hard wait" (or static wait) is generally discouraged in favor of dynamic waits
    //wait until the element is visible
    // console.log(await page.locator("[style*='block']").textContent())
    // await expect(page.locator("[style*='block']")).toContainText('Incorrect')
})

test('TC-04,UI Control test', async ({page}) => {
    const username=page.locator('#username');
    const password=page.locator('[type="password"]');
    const signInButton=page.locator('[type="submit"]');
    const dropdown=page.locator('select.form-control');
    await dropdown.selectOption('consult'); //static dropdown selection handling
    //await page.pause(); // Pause execution to inspect UI state
    await page.locator('span.checkmark').nth(1).click(); //radio button selection
    await page.locator('#okayBtn').click(); //handling alert popup
    await expect(page.locator('span.checkmark').nth(1)).toBeChecked(); //assertion for radio button
//    await page.pause();

})

test("TC-05,Handling Child windows", async ({page}) => {
    const username=page.locator('#username');
    const password=page.locator('[type="password"]');
    const signInButton=page.locator('[type="submit"]');
    const linkclick=page.locator("//A[@class='blinkingTextss']");
    //await linkclick.click();
    //await expect(page).toHaveTitle('RS Academy');
    const[newPage]=await Promise.all([  // why promise.all -> to run both the tasks simultaneously
        page.waitForEvent('popup'), // Waits for the popup to open
        linkclick.click(), // Triggers the popup
    ]);
    console.log(await newPage.title());
    await expect(newPage).toHaveTitle('RS Academy');
})

});


