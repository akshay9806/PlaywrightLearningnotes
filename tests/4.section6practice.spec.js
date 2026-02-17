const {test,expect}= require ('@playwright/test');

test('PracticeHomework',async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/client");
    //*************************************************************** */
    const email = "akki8794@gmail.com"
    const username=page.locator('#userEmail')
    const password=page.locator('#userPassword')
    const Loginbtn=page.locator('#login')
    const products=page.locator('.card-body')
    const productname="ZARA COAT 3"
    //******************************************************************* */
    await username.fill(email); //Practice>>akki8794@gmail.com>>Halliburton@2026
    await password.fill("Halliburton@2026");
    await Loginbtn.click();
    await page.locator('.card-body b').first().waitFor();



    // picking up item one by one through for loop and comparing it with required product name and if it matches add it to cart
    const count = await products.count();
    for (let i=0; i<count; ++i)
    {
       //chaining of locator>>search scope limited to left side parent locator instead of page(lect27.7min)

        if(await products.nth(i).locator("b").textContent()==productname)
        {
             //if product name matched click on add to cart
             await products.nth(i).locator("text= Add To Cart").click();
             break; ///once clicked on Add product no need to further run for loop so break applied
        }
    }  
    await page.locator("[routerlink*='cart']").click();
    //since cart page take some time to load so need to apply wait
    await page.locator("div li").first().waitFor();
    //playwright locator>>[tagname:has-text'textname']
    const bool= page.locator("h3:has-text'ZARA COAT 3'").isVisible ///isVisible dont have autowait so need to write above line of code
    expect(bool).toBeTruthy();
    //click on checkout
    await page.locator("text=Checkout").click();
    //wipe existing credicartnumber
    await page.locator("[value='4542 9931 9292 2293']").fill(" ");
    await page.locator("[value='4542 9931 9292 2293']").fill("12345678");
    //cvv
    await page.locator("(//input[@type='text'])[2]").fill("8794");
    //Name on card
    await page.locator("(//input[@type='text'])[3]").fill("Akshay Birajdar");
    await page.locator("//select[@class='input ddl'][1]").selectOption ("08");
    await page.locator("//select[@class='input ddl'][2]").selectOption("26");
    //**Handling Input dropdown */
    await page.locator("[placeholder='Select Country']").pressSequentially("ind",{delay:150});

    const dropdown=page.locator(".ta-results");
    await dropdown.waitFor();
    const optionscount= await dropdown.locator("button").count();

    for (let i=0; i<optionscount; ++i)
    {
       const text= await dropdown.locator("button").nth(i).textContent();
         if (text===" India") //need to give name same as given in DOM even need to check spaces,here India writtenas " India" space is there
        {
            await dropdown.locator("button").nth(i).click();
            break;
        }

    }
    //verifying our email at shipping info
    await expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
    await page.locator(".action__submit").click();
    await expect (page.locator(".hero-primary")).toHaveText(" Thankyou for the order. "); //always copy from console
    const orderid= await page.locator(".em-spacer-1 label").nth(1).textContent();
    console.log(orderid);
    //await page.locator("[routerlink*='myorders']").first().waitFor();
    //clicking on my orders
    await page.locator("//button[@routerlink='/dashboard/myorders']").click();

    await page.waitForSelector("tbody tr"); //waiting for selectors
    const rows= await page.locator("tbody tr");
    const ordercount = await page.locator("tbody tr").count();
    console.log(ordercount);

    for(let i=0; i<ordercount; ++i)
    {
        const roworderId= await rows.nth(i).locator("th").textContent();
        if(orderid.includes (roworderId))
        {
            await rows.nth(i).locator("button").first().click();
            break;
        }
    }
    const orderdetails= await page.locator(".col-text").textContent();
    expect (orderid.includes(orderdetails)).toBeTruthy();


})