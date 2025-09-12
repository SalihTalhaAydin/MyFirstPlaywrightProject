import {test, expect} from '@playwright/test'

test('Facebook text validation', async ({page}) => {
    // test case facebook.com
    // 1. go to facebook.com
    console.log('Navigating to Facebook page')
    await page.goto('https://www.facebook.com/')

    // 2. validate the 'Connect with friends and the world around you on Facebook.'
    console.log('Validating Title')
    let expectedTitle = 'Connect with friends and the world around you on Facebook.'
    expect(await page.locator('h2[class="_8eso"]').innerText()).toBe(expectedTitle)

    // 3. validate the 'Create a Page for a celebrity, brand or business.'
    console.log('Validating Create a Page text')
    let expectedCreateText = 'Create a Page for a celebrity, brand or business.'
    let actualCreateText = await page.locator('div[id="reg_pages_msg"]').innerText()

    expect(actualCreateText).toBe(expectedCreateText)
    // NOTE: validate should remind you 'expect method'
})