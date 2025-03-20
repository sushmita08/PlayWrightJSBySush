import { test, expect } from '@playwright/test';
const testData=JSON.parse(JSON.stringify(require("../testdata.json")))

test("Valid Login",async function({page}) {

    await page.goto(testData.loginUrl);
    await page.getByPlaceholder("Enter Email").fill(testData.username)
    await page.getByPlaceholder("Enter Password").fill(testData.password)
    await page.getByRole("button",{"name":"Sign in"}).click();

    // await page.locator("//span[normalize-space()='Manage']").hover({force:true})
    // await page.locator("//a[normalize-space()='Manage Courses']").click()
    await page.waitForTimeout(3000)





})
