import { test, expect } from '@playwright/test';

test("Select value from dropdown",async function({page}) {
    await page.goto("https://freelance-learn-automation.vercel.app/signup");

    await page.locator("#state").selectOption({label:"Goa"})

    await page.waitForTimeout(1000)
    await page.locator("#state").selectOption({value:"Andaman and Nicobar Islands"})
    await page.waitForTimeout(1000)
    await page.locator("#state").selectOption({index:5})
    // await page.waitForTimeout(1000)

    // const val = await page.locator("#state").textContent()
    // console.log("All dropdowns: "+val);
    // await expect(val.includes("Kerala")).toBeTruthy()


    let state = await page.$("#state");
    let allElements = await state.$$("option")
    let isDelhiPresent = false;

    for(let i=0;i<=allElements.length-1;i++){
        let element = await allElements[i]
        let text = await element.textContent();
        console.log("All values: " +text);

        if(text == "Delhi"){
            isDelhiPresent = true;
            break;
        }
    }
    await expect(isDelhiPresent).toBeTruthy();

    await page.locator("#hobbies").selectOption(['Reading','Singing','Dancing'])
    await page.waitForTimeout(3000)


})