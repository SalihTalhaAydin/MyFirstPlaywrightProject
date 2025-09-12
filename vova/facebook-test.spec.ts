import { test, expect } from '@playwright/test'
test('Eatsy test page', async ({ page }) => {

    await page.goto('https://www.facebook.com/')
    await page.waitForTimeout(5_000)
    let expectedResultTest = 'Facebook помогает вам всегда оставаться на связи и общаться со своими знакомыми.'
    let expectingMesage = page.locator('h2[class="_8eso"]')



    let expectedResultTest2 = 'Создать Страницу знаменитости, музыкальной группы или компании.'
    let expectingMesage2 = page.locator('div{id="reg_pages_msg"]')
    expect(await expectedResultTest2.innerText()), toBe(expectingMesage2)

})