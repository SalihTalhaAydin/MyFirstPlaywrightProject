
import { test, expect } from '@playwright/test'
test('Eatsy test page', async ({ page }) => {

    await page.goto('https://www.etsy.com/')
    await page.waitForTimeout(5_000)
    let loginString = page.locator('button[class="wt-menu__trigger wt-btn wt-btn--transparent header-button wt-mr-xs-1 wt-btn--small"]')
    await loginString.click
    await page.waitForTimeout(5_000)
    let loginWithGoogle = page.locator('button [class="wt-btn wt-btn--secondary wt-width-full is-disabled wt-btn--is-loading"]')
    await loginWithGoogle.click
    await page.waitForTimeout(5_000)
})