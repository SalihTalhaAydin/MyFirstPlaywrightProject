import { test, expect } from '@playwright/test'

test('Facebook test', async ({ page }) => {
    await page.goto('https://www.facebook.com/')
    await page.waitForTimeout(5_000);
    let expectedResultText = 'Connect with friends and the world around you on Facebook.'
    let searchResulText = page.locator(
      'h2 ["class="_8eso""]'
    );

 expect(await searchResulText.innerText()).toBe(expectedResultText)
    })