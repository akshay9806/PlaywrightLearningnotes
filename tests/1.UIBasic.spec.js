const {test,expect}= require ('@playwright/test'); //Importing Annotation of test and expect to start testcase writing and assertion writing

test('Using browser fixture', async({browser})=>
{
   const context = await browser.newContext();
   const page = await context.newPage();
   //storing in variable
   const Username = page.locator("#username");
   const Signinbuttn = page.locator("#signInBtn");
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/"); //launching page page.goto
   console.log (await page.title());///printing
   await Username.fill("rahulshett");
    ///.fill locator by #Id
   await page.locator("[type='password']").fill("Learning@830$3mK2");  ///.fill locator by [attribute='value']
   await Signinbuttn.click(); 
   //**when given wrong username toaster message displayed for some time want to extract text in that toaster
   //extracting text from toaster messages {use>> .textcontent}and applying assertion
   await page.locator("[style*='block']").textContent();
     //Loactor identification is imp>>[attribute*='partialvalue'] ??section4>>14
   console.log(await page.locator("[style*='block']").textContent()); //.textcontent to grab the text
   await expect(page.locator("[style*='block']")).toContainText('Incorrect');
   //**To Wipe out existing content .fill("") */
   await Username.fill("");
   await Username.fill("rahulshettyacademy"); ///enetered corrrect username, 
   // no need of password as its stored not wiping out on page
   await Signinbuttn.click();
    //**Now want to grab title of first product after login
   await page.locator(".card-title a").first().waitFor(); ///.wait for() use to wait complete the display of elements
   //OR
   //await page.waitForLoadState('networkidle'); ///to wait till page loads, complete the API calls in network
   console.log(await page.locator(".card-title a").first().textContent())
   console.log(await page.locator(".card-title a").nth(1).textContent());//nth()//.first()//.last()
   console.log(await page.locator(".card-title a").last().textContent())
   const Alltitles=await page.locator(".card-title a").allTextContents();//To fetch all text title present on page//by Anju 
   console.log(Alltitles
  
   );


});

test ('page fixture', async ({page})=>
 {
    await page.goto ("https://google.com");
    console.log(await page.title());
    await expect (page).toHaveTitle("Google");
  });  



