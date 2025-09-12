import { test, expect } from '@playwright/test'

test('Etsy test page', async ({ page }) => {
  await page.goto('https://www.etsy.com/')
  
  let searchBar = page.locator('input[name="search_query"]')
  await searchBar.waitFor({ state: 'visible' })

  await searchBar.press('mug', { delay: 200 })
  
  await searchBar.press('Enter')
  
  
})