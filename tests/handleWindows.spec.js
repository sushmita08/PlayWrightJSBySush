import { test, expect } from '@playwright/test';
import { promises } from 'dns';

test("Handle Frames",async function({browser}) {

    const context = await browser.newContext()
    const page= await context.newPage()

    page.goto("https://freelance-learn-automation.vercel.app/login")


    const [page1] = await Promise.all([
        context.waitForEvent("page") ,
        page.locator("(//a[contains(@href,'facebook')])[1]").click()
    ])

    await page1.waitForTimeout(3000)

    await page1.locator("(//input[@name='email'])[2]").fill("s@gmail.com")

    await page1.close()

    await page.getByPlaceholder("Enter Email").type("admin@email.com")
    await page.waitForTimeout(3000)



})
