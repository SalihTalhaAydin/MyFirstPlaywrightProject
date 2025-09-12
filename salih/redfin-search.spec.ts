import { test, expect } from '@playwright/test'

test('Redfin search test', async ({ page }) => {
    // my goal is creating a test case -> manual run -> automation
    // Test Case:
    // 1. go to https://www.redfin.com/
    // 2. find/locate search bar
    //    a. inspect
    //    b. tag, attributes -> elements have these
    //    c. best to worst | id, css, xpath -> name, class, etc. -> ...
    //             *  locating something with CSS = tagName[attributeKey = 'attributeValue'], tagName[attributeKey]
    // 3. type/fill '60090'
    // 4. press Enter
    // 5. validate the results

    await page.goto('https://www.redfin.com/')
    await page.waitForTimeout(5_000)
    let searchBar = page.locator('div[id="homepageTabContainer"] input[id="search-box-input"]')
    await searchBar.type('60090', { delay: 200 })
    await page.waitForTimeout(5_000)
    await searchBar.press('Enter')
    await page.waitForTimeout(5_000)
})


