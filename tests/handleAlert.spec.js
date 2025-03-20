import { test, expect } from '@playwright/test';

test("Handle Alert",async function({page}) {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    page.on("dialog",async (d)=>{
        expect(d.type()).toContain("alert")
        expect(d.message()).toContain("I am a JS Alert")
        await d.accept()

    })

    await page.locator("//button[normalize-space()='Click for JS Alert']").click()
    await page.waitForTimeout(3000)
})

test("Handle Confirm Alert",async function({page}) {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    page.on("dialog",async (dialogWindow)=>{
        expect(dialogWindow.type()).toContain("confirm")
        expect(dialogWindow.message()).toContain("I am a JS Confirm")
        // await dialogWindow.accept()
        await dialogWindow.dismiss()

    })

    await page.locator("//button[normalize-space()='Click for JS Confirm']").click()
    await page.waitForTimeout(3000)
})

test("Handle Prompt Alert",async function({page}) {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    page.on("dialog",async (dialogWindow)=>{
        expect(dialogWindow.type()).toContain("prompt")
        expect(dialogWindow.message()).toContain("I am a JS prompt")
        await dialogWindow.accept("Sushmita")
        // await dialogWindow.dismiss()

    })

    await page.locator("//button[normalize-space()='Click for JS Prompt']").click()
    await page.waitForTimeout(5000)
})