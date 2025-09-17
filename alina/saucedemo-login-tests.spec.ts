import { test, expect } from "@playwright/test";
test("Task 1: Successful login and header validation", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.waitForTimeout(2_000);

  await page.locator('[id="user-name"]').fill("standard_user");
  await page.waitForTimeout(2_000);
  await page.locator('[id="password"]').fill("secret_sauce");
  await page.waitForTimeout(2_000);
  await page.locator('[id="login-button"]').click();
  await page.waitForTimeout(2_000);
  let header = await page.locator('div[class="app_logo"]');
  let headerText = await header.innerText();
  expect (headerText).toBe("Swag Labs");
});
