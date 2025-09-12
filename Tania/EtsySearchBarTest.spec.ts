import { test, expect } from '@playwright/test'

test('Etsy search test', async ({ page }) => {
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

    await page.goto("https://www.etsy.com/featured/hub/halloween-costumes-and-decor-ideas?ref=hp_shoppable_hero_primary")
    let searchBar = page.locator("input [aria-controls = 'global-enhancements-search-suggestions']")
    await searchBar.fill("t shirt")
    await searchBar.press("Enter")
    await page.waitForTimeout(5_000)

})