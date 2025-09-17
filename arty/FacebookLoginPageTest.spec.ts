import { test, expect } from '@playwright/test'

test('Welcome text test', async ({ page }) => {

    await page.goto('https://www.facebook.com/')
    await page.waitForTimeout(5_000)
    let expectedText = "Create a Page for a celebrity, brand or business.";
    let actualText = page.locator('div[id="reg_pages_msg"]')
    expect(await actualText.innerText()).toBe(expectedText);

    let expectedWelcomeMessage = "Connect with friends and the world around you on Facebook.";
    let actualWelcomeMessage = page.locator('h2[class="_8eso"]')
    expect(await actualWelcomeMessage.innerText()).toBe(expectedWelcomeMessage);




})