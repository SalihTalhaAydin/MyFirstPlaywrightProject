import { test, expect } from '@playwright/test'

test('Facebook text validation test', async ({ page }) => {

    await page.goto("https://www.facebook.com/")
    await page.waitForTimeout(5_000)
    let expectedTextResult = 'Connect with friends and the world around you on Facebook.'
    let searchTextResult = page.locator('h2[class="_8eso"]')
    expect(await searchTextResult.innerText()).toBe(expectedTextResult)

    let expectedTextResult2 = 'Create a Page for a celebrity, brand or business.'
    let searchTextResult2 = page.locator('div[id="reg_pages_msg"]')
    expect(await searchTextResult2.innerText()).toBe(expectedTextResult2)

    console.log(await searchTextResult.innerText())
    console.log(await searchTextResult2.innerText())

})