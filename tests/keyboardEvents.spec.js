import { test, expect } from '@playwright/test';

test("Keyboard Events",async function({page}) {
    await page.goto("https://www.google.com/")
    await page.locator("textarea[name='q']").focus()
    await page.keyboard.type("playwright tutorial!")
    await page.keyboard.press("ArrowLeft")
    await page.keyboard.down("Shift")

    for(let i=0;i<8;i++){
        await page.keyboard.press("ArrowLeft")
    }
    // await page.keyboard.press("Meta+A")
    // await page.keyboard.press("Meta+C")

    await page.keyboard.press("Backspace")
    // await page.keyboard.press("Meta+V")

    // await page.keyboard.press("Enter")
    await page.waitForTimeout(1000)
   
})