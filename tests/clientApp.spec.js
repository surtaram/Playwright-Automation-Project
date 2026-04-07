const{test,expect}=require('@playwright/test');
const{LoginPage}=require('../pageobjects/LoginPage');


//test.describe('client app tests',()=>{
    //test.beforeEach(async({page})=>{
      //  await page.goto('https://rahulshettyacademy.com/client');
   // });

test.skip("Client App Registration Test",async({page})=>{
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator('a.btn1').click();
    ;
    await page.waitForLoadState('networkidle'); // Wait until network is idle
    await page.locator("//input[@id='firstName']").type("John");
    await page.locator("//input[@id='lastName']").type("Doe");
    await page.locator("//input[@id='userEmail']").type("john.doe1902112@example.com");
    await page.locator("//input[@id='userMobile']").type("9876543211");
    await page.locator('select[formcontrolname="occupation"]')
          .selectOption({ label: 'Doctor' });
    await page.locator("input[type='radio']").nth(1).click();
    await page.locator("//input[@id='userPassword']").type("John@1234");
    await page.locator("//input[@id='confirmPassword']").type("John@1234");
    await page.locator("//input[@type='checkbox']").click();
    await page.locator('input[name="login"]').click();
    console.log(await page.title());
    await expect(page).toHaveTitle("Let's Shop")
});

test.only("Client App Login Test",async({page})=>{
    //await page.goto("https://rahulshettyacademy.com/client");
    const loginPage=new LoginPage(page);
    loginPage.goTo();
    loginPage.validateLogin("john.doe19021@example.com", "John@1234");
    await expect(page).toHaveTitle("Let's Shop")

})

test.skip("Extract all product names",async({page})=>{
    //await page.goto("https://rahulshettyacademy.com/client");
    const loginPage=new LoginPage(page);
    loginPage.goTo();
    loginPage.validateLogin("john.doe19021@example.com", "John@1234");
    await page.waitForLoadState('networkidle'); // Wait until network is idle
    const card_titles=await page.locator(".card-body b").allTextContents()
      console.log(card_titles);


})

test.skip("Add specific product to cart",async({page})=>{

    const loginPage=new LoginPage(page);
    loginPage.goTo();
    loginPage.validateLogin("john.doe19021@example.com", "John@1234");
    await expect(page).toHaveTitle("Let's Shop")
    await page.locator("//button[@class='btn w-10 rounded']").nth(1).click();
    const productName=await page.locator("b:has-text('AUTOMATION 8')").nth(1).textContent();
    console.log('productName:', productName);
    await page.getByText('Cart 1').click();
    const cartproductname=await page.locator("h3:has-text('AUTOMATION 8')").textContent();
    console.log('cartproductname:', cartproductname);
    expect(productName).toBe(cartproductname);
})

test.skip("Add multiple products to cart",async({page})=>{
    const loginPage=new LoginPage(page);
    loginPage.goTo();
    loginPage.validateLogin("john.doe19021@example.com", "John@1234");
    await expect(page).toHaveTitle("Let's Shop")
    const productNames=[];
    const numberOfProducts=await page.locator('.card-body b').count();
    for(let i=0;i<numberOfProducts;i++){
        const productName=await page.locator('.card-body b').nth(i).innerText();
        console.log('productName:', productName);
        productNames.push(productName.trim());
        await page.locator("//button[@class='btn w-10 rounded']").nth(i).click();
    }    
    console.log('productNames:', productNames);    
    console.log('numberOfProducts:', numberOfProducts);

})



//});


test("Popup validation",{tag:"@smoke"},async({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    // await page.goto("https://www.google.com/");
    // await page.goBack();
    // await page.goForward();
    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator("#displayed-text").screenshot({path:'displayed-text.png'});
    await page.locator("#hide-textbox").click();
    await expect(page.locator("#displayed-text")).toBeHidden();
    await page.screenshot(
        {path:'screenshot.png',fullPage:true}
    )
    await page.pause();
    page.on('dialog', dialog => dialog.dismiss());
    await page.locator("#confirmbtn").click();
    await page.locator("#mousehover").hover();
});

test("iFrame handling",async({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    const framepages = page.frameLocator("#courses-iframe")
    await framepages.locator("li a[href*='lifetime-access']:visible").click();
    //await page.pause();
    const textContent = await framepages.locator(".text h2").textContent();
    console.log(textContent);
    console.log(textContent.split(" ")[1]);;

});

