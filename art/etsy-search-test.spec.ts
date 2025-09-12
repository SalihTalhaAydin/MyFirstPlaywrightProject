import {test, expect} from '@playwright/test'

test('Etsy search functionality test', async ({page}) => {
    //create etsy search functionality test case, manually test it and automate it
    await page.goto('https://www.etsy.com/')

    let searchBar = page.locator('input[id="global-enhancements-search-query"]')
    await searchBar.fill('knopa')
    await searchBar.press('Enter')
    await page.waitForTimeout(5_000)
})