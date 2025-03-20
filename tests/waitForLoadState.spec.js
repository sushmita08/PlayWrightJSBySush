import { test, expect } from '@playwright/test';

test("Wait for load state",async function({page}) {

   await page.goto("https://freelance-learn-automation.vercel.app/login")
    await page.locator("//a[normalize-space()='New user? Signup']").click()
    await page.waitForLoadState("networkidle")


    const cnt = await page.locator("//input[@type='checkbox']").count()

    expect(cnt).toBe(20)



})