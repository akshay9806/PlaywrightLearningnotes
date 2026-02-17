const{test,expect}= require ('@playwright/test');

test("Handling Calender", async({page})=>
{
  await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
  const monthnumber="7";
  const date="8";
  const year="2025";
  const ExpectedList = [monthnumber,date,year];

  //identify locator which covers whole box of calender
  await page.locator(".react-date-picker__wrapper").click();///calender page opens
  //1st click opens list of months and 2nd click opens list of years
  await page.locator(".react-calendar__navigation__label").click();
  await page.locator(".react-calendar__navigation__label").click();//>>clcicking 2nd time
  await page.getByText(year).click();
  //maping 7 to july
  await page.locator(".react-calendar__tile").nth(Number(monthnumber)-1).click();//converting string to Number
  //selecting date
  await page.locator("//abbr[text()='"+date+"']").click();

  //figure out common locator for month, date and year and get text and compare with expected list

  const inputs =page.locator(".react-date-picker__inputGroup input")
  for(let i =0; i<ExpectedList.length;i++)
    {
        const value = await inputs.nth(i).inputValue();
        expect(value).toEqual(ExpectedList[i]);
 
    }

    ///old date kasa select karaycha, common havay current year and old yearsathi
  
  
  
  
})