import { test, expect } from '@playwright/test'

test('Etsy search test', async ({ page }) => {
   
    await page.goto('https://www.etsy.com/')
    await page.waitForTimeout(5_000)
    let searchBar = page.locator('div[data-id="search-bar"]')
    await searchBar.type('T-Shirt', { delay: 200 })
    await page.waitForTimeout(5_000)
    await searchBar.press('Enter')
    await page.waitForTimeout(5_000)
})
