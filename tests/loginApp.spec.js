import { test, expect } from '@playwright/test';
const LoginPage = require('../pages/loginpage')
const HomePage = require("../pages/homepage")

const testData=JSON.parse(JSON.stringify(require("../testdata.json")))

test("Valid Login",async function({page}) {

    await page.goto(testData.loginUrl);
    const loginPage = new LoginPage(page)
    const homePgae =new HomePage(page)
    await loginPage.loginToApp(testData.username,testData.password)
    await homePgae.verifyManageOption()
    await homePgae.logoutFromApp()
    await loginPage.verifySignIn()

})