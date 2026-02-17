class DashboardPage
{
    constructor (page)
    {
        this.page=page
        this.products=page.locator('.card-body');
        this.producttext=page.locator('.card-body b');
        this.cartlink=page.locator("[routerlink*='cart']");

    }

    













}