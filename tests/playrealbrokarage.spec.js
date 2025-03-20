const {test,expect} = require("@playwright/test")
const exp = require("constants")



test("Login and validate",async function({page}) {
    await page.goto("https://bolt.playrealbrokerage.com/login?redirectTo=%2Ftransactions%2Ff952c7b8-f069-4a9f-92c9-92c6e4b3bb3e%2Fdetail")
    await page.getByPlaceholder("Enter username or email").type("sahilagent")
    await page.getByPlaceholder("Password").type(" P@ssw0rd")
    await page.locator("//button[@type='submit']").click()
    // const popupText = await page.locator("//div[@class='flex flex-row']/div[@class='font-bold text-lg text-center w-full']").textContent()
    // if(popupText == "Transaction Update"){
    //     await page.locator("//button[@class='absolute right-5']").click();
    // }

    await page.locator("//div[@class='ml-auto']/div/div[@class='flex items-center ml-3 cursor-pointer primary-light text-primary-blue']").click()
    const result = await page.locator("//div[@class='space-y-1.5']/h2").textContent()
    expect(result.includes("Total Commission")).toBeTruthy() 
    // let arr =[100,200,300]

    // let toggles = page.locator("//div[@data-testid='toggle-switch']").nth(0).click()
    // let text = page.locator("//div[@class='flex items-stretch border rounded-lg overflow-hidden text-zen-dark-9 border-zen-dark-5 border-none']/input[@type='text']")
    // for(let element in toggles){
    //     // console.log(element);
        
    //     await element.click()
    // }
    // for(el in text){
    //     for(i in arr){
    //        await el.type(arr[i])
    //     }
    // }
    // page.waitForTimeout(10000)

    // const msg = await page.locator("//div[@class='flex flex-col items-end']").textContent()
    // expect(msg.includes("The total commission amounts must add up to USD 1,200.00")).toBeTruthy()
    // const button = await page.locator("//button[@type='submit']").getAttribute('disabled',{timout:1000})
    

    // expect(button).toBeTruthy()
    // expect(button).toBeFalsy()



})

