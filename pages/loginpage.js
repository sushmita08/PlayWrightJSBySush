const {expect} = require("@playwright/test")

class LoginPage{

    constructor(page){

    this.page = page
    this.username = "//input[@id='email1']"
    this.password = "//input[@id='password1']"
    this.Submit="//button[normalize-space()='Sign in']"
    this.header = "//h2[normalize-space()='Sign In']"
    }

    async loginToApp(usrnm,pwd){

        await this.page.fill(this.username,usrnm)
        await this.page.fill(this.password,pwd)
        await this.page.click(this.Submit)

    }

    async verifySignIn(){
        await expect(this.page.locator(this.header)).toBeVisible()
    }



}
module.exports = LoginPage;