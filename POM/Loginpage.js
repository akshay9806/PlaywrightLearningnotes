
class LoginPage{

    
    
        //define locators in constructor
        //this.represent it as class variable
        //when object created for this class all variables in constructor get initialized automatically

        constructor(page)//list of locators
        { 
            this.page=page;
            this.Loginbtn=page.locator('#login');
            this.username=page.locator('#userEmail');
            this.password=page.locator('#userPassword');

        }
//Method creation
    async goto()
    {
        await this.page.goto("https://rahulshettyacademy.com/client");
    }

    async validlogin(username,password)//actions for "Login operations"
        {
            await this.username.fill(username); //Practice>>akki8794@gmail.com>>Halliburton@2026
            await this.password.fill(password);
            await this.Loginbtn.click();

        }

       

}
//at end of class export it so that it can be used in another folder or file
module.exports={LoginPage};