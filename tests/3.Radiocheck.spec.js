const {test, expect} = require ('@playwright/test');

test("HandlingUIComp_", async ({page})=>
{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    //****************************************************************************/
    const Username = page.locator("#username");
    const Password = page.locator("[type='password']");
    const Signinbuttn = page.locator("#signInBtn");
    const dropdown = page.locator("select.form-control")
    const blinkingText= page.locator("[href*='documents-request']")
    //****************************************************************************/
    await Username.fill("rahulshettyacademy");
    await Password.fill("Learning@830$3mK2");
    //**Static dropdown**//
    await dropdown.selectOption("Consultant")  // .selectoption("Value name")>>for "static dropdown"
    //**Radio button**//
    await page.locator(".radiotextsty").last().click(); ///Radio button>>.last().click()//.first()//nth()
    await page.locator("#okayBtn").click();
    await expect(page.locator(".radiotextsty").last()).toBeChecked(); ///Assertion for Radiobutton
    //**Checkbox- check and Uncheck**//
    await page.locator("#terms").click(); //.click() for checkbox
    await expect(page.locator("#terms")).toBeChecked();
    await page.locator("#terms").uncheck();
    expect(await page.locator("#terms").isChecked()).toBeFalsy(); ///observe await written inside expect as action is within it
    //Compare line 19 and line 24>>in 19>>in expect just passing locator infor actual action is outside the expect bracket so await is outside
    //whereas for line 24 action performed with expect()so await written inside expect bracket
    //**Blinking Text**//>>>.toHaveAttribute(name,value)
    await expect(blinkingText).toHaveAttribute("Class","blinkingText");
   
    
});

test.only("HandlingChildwindow and Tabs",async ({browser})=>
{
    const context=await browser.newContext();
    const page= await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const blinkingText= page.locator("[href*='documents-request']")
    const Username = page.locator("#username")

 const [newpage]=await Promise.all(        // promise.all([passin array,comma seprated])//this is to combine the action altogether>>>will return new page
   //warap newpage in array as dont know how many pages getopen on click
    [
        context.waitForEvent('page'),///it should be in listening state just before clicking
        blinkingText.click(),
    ])
const text=await newpage.locator(".red").textContent();
console.log(text);
//**TestSplit**//
//want to split"Please email us at mentor@rahulshettyacademy.com with below template" and grab email
//first at @ left side stored in 0th index right side at index 1
const arrayText= text.split("@") 
//again further split at space level then at 0th index will get mail
const email=arrayText[1].split(" ")[0]///here grabbed 1st index of first split then further split it anf grabbed 0th index
console.log(email);
//Now this captured email want to paste in parent page username then
await Username.fill(email);
//console.log(await Username.textContent());///.textcontent not worked as it capture email value dynamically
console.log(await Username.inputValue())



 


})