import { test, expect } from '@playwright/test';
const testData=JSON.parse(JSON.stringify(require("../testdata.json")))
const testData1=JSON.parse(JSON.stringify(require("../usersdata.json")))

test.describe("Login Multiple Users", function (){

    for(const data of testData1){
        test.describe(`Login with users ${data.id}`, function(){

            test("Valid Login",async ({page}) => {

                await page.goto(testData.loginUrl);
                await page.getByPlaceholder("Enter Email").fill(data.username)
                await page.getByPlaceholder("Enter Password").fill(data.password)
                await page.getByRole("button",{"name":"Sign in"}).click();

                await page.waitForTimeout(3000)

            })
            
            

        })
    }

})

