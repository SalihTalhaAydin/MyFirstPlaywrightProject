import { test, expect } from '@playwright/test'

let mainURLLocator = "https://www.saucedemo.com/"
let usernameLocator = 'input[data-test="username"]'
let passwordLocator = 'input[data-test="password"]'
let loginLocator = 'input[class="submit-button btn_action"]'
let shoppingCartLocator = 'a[class="shopping_cart_link"]'
let websiteMessageLocator = 'span[class="title"]'
let expectedText = "Your cart"

test.beforeEach(async ({ page }) => {
    await page.goto(mainURLLocator)
    await page.locator(usernameLocator).fill('standard_user')
    await page.locator(passwordLocator).fill('secret_sauce')
    await page.locator(loginLocator).click()
})

test("cart-functionality-happy-test", async ({ page }) => {
    await page.locator(shoppingCartLocator).click()
    await expect(page.locator(websiteMessageLocator)).toHaveText(expectedText)
})