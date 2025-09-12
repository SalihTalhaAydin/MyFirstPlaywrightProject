
import { test, expect } from '@playwright/test'
test('Eatsy test page', async({ page })) => {

    await page.goto('https://www.etsy.com/')
    await page.waitForTimeout(5_000)
    let searchBar = page.locator('input[name="search_query"]')
    await searchBar.type('pants', { delay: 200 })
    await page.waitForTimeout(5_000)
    await searchBar.press('Enter')
    await page.waitForTimeout(5_000)






}