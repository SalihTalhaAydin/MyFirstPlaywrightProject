import { test, expect } from '@playwright/test'

test('Facebook test page', async ({ page }) => {
  await page.goto('https://facebook.com/')
  let connectText = page.locator('text=Connect with friends and the world around you on Facebook.')
  await connectText.waitFor({ state: 'visible' })
  await expect(connectText).toBeVisible()
  let pageText = page.locator('text=Create a Page for a celebrity, brand or business.')
  await pageText.waitFor({ state: 'visible' })
  await expect(pageText).toBeVisible()
})