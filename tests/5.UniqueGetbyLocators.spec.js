const{test,expect}= require ('@playwright/test');

test("PlaywrightGetByLocators", async({page})=>
{
 await page.goto("https://rahulshettyacademy.com/angularpractice/");
 //GetByLabel>>having label tags inDOM>>for Checkbox/Radio/dropdown
 //its efficient for clicks not for textboxes
 await page.getByLabel("Check me out if you Love IceCreams!").click();///for checkbox
 await page.getByLabel("Employed").check();///for Radio
 await page.getByLabel("Gender").selectOption("Male");//for dropdown
 ///GetByRole,GetByText and perform chaining methods in step
 //getby placeholder can be used "only if placeholder is present in DOM"
 await page.getByPlaceholder("Password").fill("Pass123");
 //Get by role>>clicking submit button
 await page.getByRole("button",{name:'submit'}).click();
 await page.getByText("SuSuccess! The Form has been submitted successfully!").isVisible();
 await page.getByRole("link",{name:'shop'}).click();
 //To filter items on page>>like "Zara coat"
 //.filter().getByRole>>>Chaining
 await page.locator("app-card").filter({hasText:"iphone X"}).getByRole("button",{name:'Add'});






})