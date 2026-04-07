const{test,expect,request}=require('@playwright/test');
const{APIUtils}=require('./utlis/APIutils');
const LoginPayload={userEmail:"john.doe19021@example.com",userPassword:"John@1234"}
const OrderPayload= {orders:[{country:"India",productOrderedId:"6960eac0c941646b7a8b3e68"}]}
// let token;
// let orderid;
let response;

test.beforeAll(async()=>{
    const apiContext= await request.newContext();
    const apiutils=new APIUtils(apiContext,LoginPayload);
    response=await apiutils.createOrder(OrderPayload);

    //console.log(token);
    
})

test("Client App Login Test",async({page})=>{
    page.addInitScript(value=>{
        window.localStorage.setItem("token",value);
    },response.token);
    await page.goto("https://rahulshettyacademy.com/client");
    //await page.locator("//input[@id='userEmail']").type("john.doe19021@example.com");
    //await page.locator("//input[@id='userPassword']").type("John@1234");
    //await page.locator('[name="login"]').click();
    await expect(page).toHaveTitle("Let's Shop")
    await page.waitForLoadState('networkidle'); // Wait until network is idle
    
})