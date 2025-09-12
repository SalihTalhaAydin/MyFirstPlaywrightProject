import { test, expect } from '@playwright/test'


test('Task 1: Successful login and header validation', async ({ page }) => {
     // Test Case: Login with valid credentials and validate header
     // 1. Navigate to saucedemo.com
     await page.goto('https://www.saucedemo.com/');
     // 2. Enter valid username: "standard_user" 
     let loginInput = page.locator('div[class="form_group"] [id="user-name"]');
     loginInput.type("standard_user")
     await page.waitForTimeout(2_000)
     // 3. Enter valid password: "secret_sauce" 
     let passwordInput = page.locator('div[class="form_group"] [id="password"]');
     passwordInput.type("secret_sauce")
     await page.waitForTimeout(2_000)
     // 4. Click login button
     let loginbutton = page.locator('div[id="login_button_container"] [id="login-button"]');
     loginbutton.press("Enter");
     await page.waitForTimeout(2_000)
     // 5. Find the header element with "Swag Labs"
     // 6. Extract the text using innerText()
     let pageHeader = await page.locator('div[class="primary_header"] [class="app_logo"]').innerText();
    
     // 7. Validate header text equals "Swag Labs"
     let expectedHeader= "Swag Labs";

    expect (pageHeader).toBe(expectedHeader);
})
