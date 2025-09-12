import { test, expect } from '@playwright/test'


test('Task 2: Failed login and error message validation', async ({ page }) => { 
    
 await page.goto('https://www.saucedemo.com/');
 let loginInput = page.locator('div[class="form_group"] [id="user-name"]');
     loginInput.type("standard_user")
     await page.waitForTimeout(2_000)
let passwordInput = page.locator('div[class="form_group"] [id="password"]');
     passwordInput.type("secret_sauce")
     await page.waitForTimeout(2_000)
let loginbutton = page.locator('div[id="login_button_container"] [id="login-button"]');
     loginbutton.press("Enter");
     await page.waitForTimeout(2_000)
let pageHeader = await page.locator('div[class="primary_header"] [class="app_logo"]').innerText();
     
let expectedHeader= "Swag Labs";

    expect (pageHeader).toBe(expectedHeader);


   
    // Product name validation let productName = await firstProduct.innerText() expect(productName).toContain('Sauce Labs') 
let firtProduct = await page.locator('a[id="item_4_title_link"] [class="inventory_item_name "]').innerText();
    let expectedFirstProduct = "Sauce Labs Backpack";
expect (firtProduct).toBe(expectedFirstProduct);
    // Product price validation let productPrice = await priceElement.innerText() expect(productPrice).toMatch(/\$\d+\.\d{2}/) 
let backpack = page.locator('.inventory_item').filter({ hasText: 'Sauce Labs Backpack' });
let price = await backpack.locator('[data-test="inventory-item-price"]').innerText();
console.log('Sauce Labs Backpack price:', price); // "$29.99"

  
  expect(price).toBe('$29.99');
});