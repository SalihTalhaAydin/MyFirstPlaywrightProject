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

    await page.goto('https://www.amazon.com/')
    // await page.waitForTimeout(1)
    await page.locator('button[alt="Continue shopping"]').click()
    // await page.waitForTimeout(5_000)
    let searchBar = page.locator('input[id="twotabsearchtextbox"]')
    await searchBar.fill('chair')
    await searchBar.press('Enter')
    await page.waitForTimeout(5_000)

});