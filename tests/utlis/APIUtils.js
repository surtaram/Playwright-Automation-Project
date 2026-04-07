const {expect}=require("@playwright/test"); // Import the expect function from the Playwright testing library

class APIUtils
{
        constructor(apiContext,LoginPayload)
        {
            this.apiContext=apiContext; // Initialize the API context
            this.LoginPayload=LoginPayload;
        }


    async getToken(){
        const loginresponse=await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", 
            //this keyword is used to refer to the current instance of the class, which allows us to access 
            // the apiContext property that was initialized in the constructor.
                {
                data:this.LoginPayload
            })
        expect(loginresponse.ok()).toBeTruthy();
        const apiresponseJson=await loginresponse.json();
        const token=apiresponseJson.token;
        return token;
    }

    async createOrder(OrderPayload){
        let response ={};
        response.token=await this.getToken();
        const orderresponse=await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",{
                data:OrderPayload,
                headers:{
                    'Authorization':response.token,
                    'Content-Type':'application/json'
                }
        
            })
        
            expect(orderresponse.ok()).toBeTruthy();
            const orderresponsejson=await orderresponse.json();
            console.log(orderresponsejson);
            const orderid=orderresponsejson.orders[0];
            response.orderid=orderid;
            return response;
    }
}




module.exports={APIUtils}; // Export the APIUtils class so that it can be imported and used in other files