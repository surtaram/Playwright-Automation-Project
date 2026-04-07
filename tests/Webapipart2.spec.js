const{test,expect,request}=require('@playwright/test');



test.beforeAll(async({browser})=>{
    const context= await browser.newContext();
    const page=await context.newPage();

    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("//input[@id='userEmail']").type("john.doe19021@example.com");
    await page.locator("//input[@id='userPassword']").type("John@1234");
    await page.locator('[name="login"]').click();
    await page.waitForLoadState('networkidle');
    await context.storageState({path:'clientapp.json'});
    webcontext=await browser.newContext({storageState:'clientapp.json'});

});



test("Client App Login Test",async({page})=>{
   
    await expect(page).toHaveTitle("Let's Shop")

})