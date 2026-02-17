const{test,expect}= require ('@playwright/test');

test("testname", async({page})=>
{
 await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
})