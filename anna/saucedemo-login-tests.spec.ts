import { test, expect } from '@playwright/test'

test('Login with valid credentials', async ({ page }) => {
  // Step 1: Navigate
  await page.goto('https://www.saucedemo.com/')