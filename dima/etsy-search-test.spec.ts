

import { test, expect } from '@playwright/test'

test('Simple website test', async ({ page }) => {
    await page.goto('https://www.etsy.com/')
    await page.locator('[global-enhancements-search-query]').click()
    let searchBar = page.locator('input[id="global-enhancements-search-query"]')
    await searchBar.fill('T-Shirt')
    await searchBar.press('Enter')
    await page.waitForTimeout(5_000)

})

