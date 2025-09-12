import { test, expect } from '@playwright/test'
test('Amazon', async ({ page }) => { 

    await page.goto('https://www.amazon.com/?tag=amazusnavi-20&hvadid=675149238952&hvpos=&hvnetw=g&hvrand=12012722391625290968&hvpone=&hvptwo=&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9021716&hvtargid=kwd-10573980&ref=pd_sl_7j18redljs_e&hydadcr=28883_14580410');
    await page.waitForTimeout(2_000)
    let searchBar = page.locator( 'input [id="twotabsearchtextbox" ]')
    await searchBar.type('Headphones');
    await page.waitForTimeout(2_000)
    await searchBar.press('Enter')
    await page.waitForTimeout(2_000)

})