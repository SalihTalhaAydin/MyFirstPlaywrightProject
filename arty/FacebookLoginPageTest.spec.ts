import { test, expect } from '@playwright/test'

test('Welcome text test', async ({ page }) => {

    await page.goto('https://www.facebook.com/')
    await page.waitForTimeout(5_000)
    let expectedText = "Connect with friends and the world around you on Facebook.";
    let actualText = page.locator('h2[class="_8eso"]')
    expect(await actualText.innerText()).toBe(expectedText);
})