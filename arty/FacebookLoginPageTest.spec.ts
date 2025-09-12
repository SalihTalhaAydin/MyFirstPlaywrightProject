import { test, expect } from '@playwright/test'

test('Welcome text test', async ({ page }) => {

    await page.goto('https://www.facebook.com/')
    await page.waitForTimeout(5_000)
    let expectedText = "Create a Page for a celebrity, brand or business.";
    let actualText = page.locator('div[id="reg_pages_msg"]')
    expect(await actualText.innerText()).toBe(expectedText);
})