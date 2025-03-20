import { test, expect } from '@playwright/test';

test("File Upload",async function({page}) {
    await page.goto("https://the-internet.herokuapp.com/upload")
    await page.locator("#file-upload").setInputFiles("upload/AddharCard.png")
    await page.locator("#file-submit").click()
    await page.waitForTimeout(3000)
    expect(await page.locator("//h3")).toHaveText("File Uploaded!")
})