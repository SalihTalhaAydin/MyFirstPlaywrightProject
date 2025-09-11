import { test, expect } from '@playwright/test'

test('Simple website test', async ({ page }) => {
    // goto method -> it goes to url you specify
    // most of the time you will navigate once at the beginning

    // waitForTimeout -> debugging

    // await -> just wait for action to be done
    // when are you gonna use await?
    // whenever you want to use any playwright actions.
    await page.goto('https://www.google.com/')
    await page.waitForTimeout(5_000)


    // locating search bar
    // textarea[name="q"] -> selector/locator for search bar
    
    let searchBar = page.locator('textarea[name="q"]')
    await searchBar.fill('copart auction')
    await searchBar.press('Enter')
    await page.waitForTimeout(10_000)

    





});