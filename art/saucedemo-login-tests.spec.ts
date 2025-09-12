import {test, expect} from '@playwright/test'

test('Task 1: Successful login and header validation', async ({ page }) => {
    // Test Case: Login with valid credentials and validate header
    // 1. Navigate to saucedemo.com
    console.log('Navigating to Saucedemo page')
    await page.goto('https://www.saucedemo.com/')

    // 2. Enter valid username: "standard_user"
    console.log('Entering valid username')

    let usernameField = await page.locator('input[id="user-name"]')
    let validUsername = "standard_user"

    await usernameField.fill(validUsername)

    // 3. Enter valid password: "secret_sauce"
    console.log('Entering valid password')

    let passwordField = await page.locator('input[id="password"]')
    let validPassword = "secret_sauce"

    await passwordField.fill(validPassword)

    // 4. Click login button
    console.log('Clicking Log In button')

    let logInButton = await page.locator('input[class="submit-button btn_action"]')

    await logInButton.click()

    // 5. Find the header element with "Swag Labs"
    // 6. Extract the text using innerText()
    console.log('Looking for header element')

    let actualHeader = await page.locator('div[class="app_logo"]').innerText()

    // 7. Validate header text equals "Swag Labs"
    console.log('Validating header text')

    let expectHeader = "Swag Labs"

    expect(actualHeader).toBe(expectHeader)

    // Write your automation code here!
});

test('Task 2: Failed login and error message validation', async ({ page }) => {
    // Test Case: Login with invalid credentials and validate error
    // 1. Navigate to saucedemo.com
    console.log('Navigating to Saucedemo page')
    await page.goto('https://www.saucedemo.com/')

    // 2. Enter invalid username: "invalid_user"
    console.log('Entering invalid username')

    let usernameField = await page.locator('input[id="user-name"]')
    let invalidUsername = "invalid_user"

    await usernameField.fill(invalidUsername)

    // 3. Enter invalid password: "wrong_password"
    console.log('Entering invalid password')

    let passwordField = await page.locator('input[id="password"]')
    let invalidPassword = "wrong_password"

    await passwordField.fill(invalidPassword)

    // 4. Click login button
    console.log('Clicking Log In button')

    let logInButton = await page.locator('input[class="submit-button btn_action"]')

    await logInButton.click()

    // 5. Find the error message element
    // 6. Extract the error text using innerText()
    console.log('Looking for error message')

    let actualErrorMessage = await page.locator('h3[data-test="error"]').innerText()

    // 7. Validate error contains "Epic sadface: Username and password do not match any user in this service"
    console.log('Validating error message')

    let expectedErrorMessage = "Epic sadface: Username and password do not match any user in this service"

    expect(actualErrorMessage).toBe(expectedErrorMessage)

    // Write your automation code here!
});