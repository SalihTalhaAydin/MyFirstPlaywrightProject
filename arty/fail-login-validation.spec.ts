import { test, expect } from '@playwright/test'


test('Task 2: Failed login and error message validation', async ({ page }) => { 
    // Test Case: Login with invalid credentials and validate error 
// 1. Navigate to saucedemo.com 
 await page.goto('https://www.saucedemo.com/');
// 2. Enter invalid username: "invalid_user"
 let loginInput = page.locator('div[class="form_group"] [id="user-name"]');
     loginInput.type("invalid_user")
     await page.waitForTimeout(2_000)
// 3. Enter invalid password: "wrong_password" 
let passwordInput = page.locator('div[class="form_group"] [id="password"]');
     passwordInput.type("wrong_password")
     await page.waitForTimeout(2_000)
// 4. Click login button 
let loginbutton = page.locator('div[id="login_button_container"] [id="login-button"]');
     loginbutton.press("Enter");
     await page.waitForTimeout(2_000)
// 5. Find the error message element
// 6. Extract the error text using innerText() 
let errorMessage = await page.locator('h3[data-test="error"]').innerText();

// 7. Validate error contains "Epic sadface: Username and password do not match any user in this service" 
let expErrMess = "Epic sadface: Username and password do not match any user in this service";

expect (errorMessage).toBe(expErrMess);

});