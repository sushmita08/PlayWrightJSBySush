const {expect} = require("@playwright/test")

class HomePage
{
    constructor(page){
        this.page = page
        this.manageOption = "//span[normalize-space()='Manage']"
        this.menu = "//img[@alt='menu']"
        this.logout = "//button[normalize-space()='Sign out']"
    }

    async logoutFromApp(){
        await this.page.click(this.menu)
        await this.page.click(this.logout)
        // await this.page.pause()

    }
    async verifyManageOption(){
        await expect(this.page.locator(this.manageOption)).toBeVisible()

    }
}

module.exports = HomePage;