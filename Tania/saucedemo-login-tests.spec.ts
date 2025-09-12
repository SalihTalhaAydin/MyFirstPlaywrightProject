
import { test, expect } from '@playwright/test'

test('Task 1: Successful login and header validation', async ({ page }) => {
  await page.goto("https://www.saucedemo.com/")

  let usernameBar = page.locator('input[data-test="username"]')
  let passwordBar = page.locator('input[data-test="password"]')

  await page.waitForTimeout(5_000)
  await usernameBar.fill('standard_user')
  await page.waitForTimeout(5_000)
  await passwordBar.fill('secret_sauce')

  await page.waitForTimeout(5_000)
  let loginButton = page.locator('input[data-test="login-button"]')
  await loginButton.click()

    await page.waitForTimeout(5_000)

  let expectedMessage = page.locator('div.app_logo')
  await expect(expectedMessage).toHaveText("Swag Labs");
});