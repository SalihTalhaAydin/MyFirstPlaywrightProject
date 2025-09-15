import { test, expect } from '@playwright/test'

test('Task 1: Successful login and header validation', async({ page }) => {
    // Test Case: Login with valid credentials and validate header
    // 1. Navigate to saucedemo.com
    await page.goto("https://www.saucedemo.com/")
    await page.waitForTimeout(5_000)
     // 2. Enter valid username: "standard_user"
     let usernameBar = page.locator('input[id="user-name"]')
     await usernameBar.fill('standard_user')
     await page.waitForTimeout(5_000)
     await console.log('Typed in username')
    // 3. Enter valid password: "secret_sauce"
    let passwordBar = page.locator('input[id="password"]')
    await passwordBar.fill('secret_sauce')
    await page.waitForTimeout(5_000)
    console.log('Typed in password')
    // 4. Click login button
    let loginButton = page.locator('input[id="login-button"]')
    await loginButton.click()
    await page.waitForTimeout(5_000)
    console.log('Clicked login button')
    // 5. Find the header element with "Swag Labs"
    let swagLabsHeader = page.locator('div[class="app_logo"]')
    // 6. Extract the text using innerText()
    console.log(swagLabsHeader.innerText())
    // 7. Validate header text equals "Swag Labs"
    let expectedHeader = "Swag Labs"
    expect(await swagLabsHeader.innerText()).toBe(expectedHeader) 
    // Write your automation code here!

});