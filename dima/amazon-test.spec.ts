
import { test, expect } from '@playwright/test'

test('Facebook website test', async ({ page }) => {
    console.error('Going to facebook.com')
    await page.goto('https://www.facebook.com/')
    await page.waitForTimeout(5_000)
    let expectedResultText = 'Facebook pomaga kontaktować się z innymi osobami oraz udostępniać im różne informacje i materiały."'
    let searchResultNumber = page.locator('h2[class="_8eso"]')
    expect(await searchResultNumber.innerText()).toBe(expectedResultText)

    let expectedResultText2 = 'Utwórz stronę dla gwiazdy, marki lub firmy.'
    let searchResultNumber2 = page.locator('<a href="/pages/create/?ref_type=registration_form" class="_8esh">Utwórz stronę</a>')
     expect(await searchResultNumber2.innerText()).toBe(expectedResultText2)

})