import { test, expect } from '@playwright/test'

test('negative login with incorrect username and password', async ({ page }) => {
  // 1. Go to Swag Labs
  await page.goto('https://www.saucedemo.com/')

  // 2. Type wrong username
  await page.locator('input[id="user-name"]').fill('wrong_user')

  // 3. Type wrong password
  await page.locator('input[id="password"]').fill('wrong_pass')

  // 4. Press login button
  await page.locator('input[id="login-button"]').click()

  // 5. Verify error message
  const errorMessage = page.locator('[data-test="error"]')
  await expect(errorMessage).toHaveText(
    'Epic sadface: Username and password do not match any user in this service'
  )
})