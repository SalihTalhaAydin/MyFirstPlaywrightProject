import { test, expect } from '@playwright/test'
test('Amazon', async ({ page }) => { 

    await page.goto('https://www.amazon.com/');
    await page.waitForTimeout(2_000)
let searchBar = page.locator( 'input [id="twotabsearchtextbox"]')
await searchBar.type('Headphones');
await page.waitForTimeout(2_000)
 await searchBar.press('Enter')
await page.waitForTimeout(2_000)

 })