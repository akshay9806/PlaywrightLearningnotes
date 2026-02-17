const{test,expect}= require ('@playwright/test');

test("PopUpValidation", async({page})=>
{
 await page.goto("https://rahulshettyacademy.com/Automationpractice/");
 //await page.goto("https://google.com/");
 //await page.goBack();
 //await page.goForward();
 await expect(page.locator(".inputs.displayed-class")).toBeVisible();///tobevisible() & tobeHidden()
 await page.locator("#hide-textbox").click();
 await expect(page.locator(".inputs.displayed-class")).toBeHidden();
 await page.pause(); 

 //Handling Java popups(dialogs)//not web dont have html so cant have locators
 //.accept for postive button and .dismiss for -ve buttons
 page.on('dialog',dialog=>dialog.accept());//no need of await once dialog open it will executes automatically
 await page.locator("#confirmbtn").click();

 //for Hovering>>.hover
 await page.locator("#mousehover").hover();

 //Hande and Automate Frames>>check frame name or frameid
 //lets enter into frame first
 const framepage = page.frameLocator("#courses-iframe");
 //click on "All access plan" in frames
 //in loactor if invisible element is there then add ":visible"
 await framepage.locator("li a[href*='lifetime-access']:visible").click();
 //after clicking grab text and split to grab number
 const textcheck= await framepage.locator(".text h2").textContent();
 console.log(textcheck.split(" ")[1]);







})