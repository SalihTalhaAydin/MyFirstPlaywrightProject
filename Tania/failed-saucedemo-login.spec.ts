import { test, expect } from '@playwright/test'

test('Task 1: Successful login and header validation', async ({ page }) => {
    await page.goto("https://www.saucedemo.com/")
    let usernameBar = page.locator('input[data-test="username"]') 
    let passwordBar = page.locator ('input[data-test="password"]')

    await usernameBar.fill("invalid_user")
    await passwordBar.fill("wrong_password")

    let loginButton = page.locator('input[class="submit-button btn_action"]')
    await loginButton.click()

    let expectedText = "Epic sadface: Username and password do not match any user in this service"
    let actualText = await page.locator('h3[data-test="error"]').innerText()
    expect(actualText).toBe(expectedText)










})