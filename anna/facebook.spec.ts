import { test, expect } from '@playwright/test'

test('Simple website test', async ({ page }) => {
    // Test case
    // Amazon search functionality test
    // 1. go to amazon
    // 2. click on continue button
    // 3. inspect and locate and store search
    // 4. type 'chair'
    // 5. click enter
    // 6. validate if the results are having 'chair'
    console.error('Going to facebook.com')
    await page.goto('https://www.facebook.com/')

//  validate the 'Connect with friends and the world around you on Facebook.'
//  validate the 'Create a Page for a celebrity, brand or business.'

    let expectedHeaderMessage = 'Connect with friends and the world around you on Facebook.'
    let facebookHeaderMessage = page.locator('h2[class="_8eso"]')
    // let actualSearchText = searchResultNumber.textContent()
    expect(await facebookHeaderMessage.innerText()).toBe(expectedHeaderMessage)

    let facebookPageText = page.locator('a:has-text("Create a Page for a celebrity, brand or business.")')

    // console.log(await searchResultNumber.innerText())

    // number of search results
    // search results locator
    // 

});