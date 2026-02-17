const{test,expect,request}= require ('@playwright/test');
//login payload copied from payload in network tab
////just remove quotes for property,keep for value
const loginpayload={userEmail:"akki8794@gmail.com",userPassword:"Halliburton@2026"}
let token;
test.beforeAll(async()=>
{
 const apicontext= await request.newContext();
 const loginResponse=await apicontext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
    {
            data:loginpayload,
    })///this post call will give us response so stored it in loginResponse variable
    expect(loginResponse.ok()).toBeTruthy();
    //objectname.json>>will return JSON representation of response body
    const loginResponseJson=await loginResponse.json();//grabbing response in Json
    const token=loginResponseJson.token;
    console.log(token)

    



})



test("testname", async({page})=>

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
    //await username.fill(email); //Practice>>akki8794@gmail.com>>Halliburton@2026
    //await password.fill("Halliburton@2026");
   // await Loginbtn.click();
    //****webAPI */
    //we grabbed token now to insert in local stoarge need following steps
    //addinitscript has page function and Argument
    await page.addInitScript(value=>
        {window.localStorage.setItem('token',value);},token);

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



});