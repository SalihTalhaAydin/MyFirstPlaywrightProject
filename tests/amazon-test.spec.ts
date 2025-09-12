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
    console.error('Going to amazon.com')
    await page.goto('https://www.amazon.com/')

    console.info('Clicking on continue button')
    await page.locator('button[alt="Continue shopping"]').click()
    // await page.waitForTimeout(5_000)
    let searchBar = page.locator('input[id="twotabsearchtextbox"]')
    await searchBar.fill('chair')
    await searchBar.press('Enter')

    let expectedResultText = '1-48 of over 100,000 results for "protein bars"'
    let searchResultNumber = page.locator('h2[class="a-size-base a-spacing-small a-spacing-top-small a-text-normal"]')
    // let actualSearchText = searchResultNumber.textContent()
    expect(await searchResultNumber.innerText()).toBe(expectedResultText)

    // console.log(await searchResultNumber.innerText())

    // number of search results
    // search results locator
    // 

});