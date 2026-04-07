// @ts-check
const { devices } =require('@playwright/test');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config=({
  testDir: './tests',
  timeout:30*1000,
  reporter:'html',
  retries:2,
  workers:2, //it will run 2 test file in parallel //but inside test file the test will run sequentially
  expect:{
    timeout:5000,
    },
      projects:[
    {
        name:"Safari execution",
         use:{
        browserName:'webkit',
        headless:true,
        screenshot:'only-on-failure',
        video:'retain-on-failure',
        trace:'on',
        //viewport:{width:1280,height:720}
       // ...devices['iPhone 13 Pro']
       ignoreHTTPSErrors:true ,//why its use --> to ignore the SSL certificate error in Safari browser,
       permissions:['geolocation']
  }
    },
    {
        name:"Firefox execution",
         use:{
        browserName:'firefox',
        headless:true,
        screenshot:'only-on-failure',
        video:'retain-on-failure',
        trace:'on',
        //viewport:{width:1280,height:720}
        //...devices['Pixel 5']
        ignoreHTTPSErrors:true,
        permissions:['geolocation'] //if pernissions are not given then it will throw error 
        // like this --> Error: Uncaught (in promise) DOMException: Permission denied for geolocation
        //if want to not allow the geolocation then we can give the value as 'denied' like this --> permissions:['geolocation:denied']

  } 
    }

  ]
  
 
  
});
  
module.exports = config;

//test file will run parallel
//but inside test file the test will run sequentially
//if we want to run inside test file also in parallel then we have to use test.describe.parallel() method
//test.describe.configure({mode:'parallel'}) and then we have to write the test cases inside that describe block
//race condition --> when we run the test in parallel then there is a chance that the test will fail because of the data dependency
//if we want to run the test in parallel then we have to make sure that the test data is unique for each test case
