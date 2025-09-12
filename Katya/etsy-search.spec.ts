import {test, expect} from '@playwright/test'
import { serialize } from 'v8'

test('Etsy search test', async ({ page }) => {

await page.goto("https://www.etsy.com/")
await page.waitForTimeout(5_000)
let searchBar = page.locator(
    'input[id="global-enhancements-search-query"]')
await searchBar.fill('spoons')
await page.waitForTimeout(5_000)
await searchBar.press('Enter')
await page.waitForTimeout(5_000)

})
