const {test,expect}= require ('@playwright/test');

test('PracticeHomework',async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/client");
    await page.pause();
    await page.locator('#userEmail').fill("akki8794@gmail.com"); //Practice>>akki8794@gmail.com>>Halliburton@2026
    await page.locator('#userPassword').fill("Halliburton@2026");
    await page.locator('#login').click();
    console.log(await page.locator("div[class='left mt-1'] h3").textContent());
    await expect(page.locator("div[class='left mt-1'] h3")).toContainText('Automation');
    //await page.locator('.card-body b').nth(0).textContent();
    //await page.waitForLoadState('networkidle'); //but its little flaky so can use following alternative
    await page.locator('.card-body b').first().waitFor(); ///use of .waitFor()
    console.log(await page.locator('.card-body b').allTextContents());// to print all text content
    console.log(await page.locator('.card-body b').nth(3).textContent());
    //Add to cart
    await page.locator('button.btn.w-10.rounded').nth(3).click();
    //Click on cart icon
    await page.locator("[routerlink='/dashboard/cart']").click();
    //verifying zara coat added
    console.log(await page.locator("div[class='cartSection'] h3").textContent());
    //click on buy now
    await page.locator("div[class='cartSection removeWrap'] button[class='btn btn-primary']").click()
    console.log(await page.locator("(//div[@class='payment__title'])[1]").textContent());
  
  




})