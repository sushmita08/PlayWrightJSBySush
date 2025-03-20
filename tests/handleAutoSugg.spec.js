import { test, expect } from '@playwright/test';

test("Handle Auto suggestions using keyboard",async function({page}) {
    await page.goto("https://www.google.com/")
    await page.locator("textarea[name='q']").type("Playwright Tutorials")
    await page.waitForSelector("//li[@role='presentation']")
    await page.keyboard.press("ArrowDown")
    await page.keyboard.press("ArrowDown")
    await page.keyboard.press("Enter")
    await page.waitForTimeout(3000)
})

test.only("Handle Auto suggestions usiong loop",async function({page}) {
    await page.goto("https://www.google.com/")
    await page.locator("textarea[name='q']").type("Playwright Tutorials")
    await page.waitForSelector("//li[@role='presentation']")
    const allEl = await page.$$("//li[@role='presentation']")
    for(let i=0;i<allEl.length-1;i++){
        let el = await allEl[i].textContent()
        if(el.includes("python")){
            await allEl[i].click()
            break
        }
    }
    
})