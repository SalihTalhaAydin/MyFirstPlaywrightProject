import { test, expect } from "@playwright/test";
test("Task 1: Failed login and message validation", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.waitForTimeout(2_000);

  await page.locator('[id="user-name"]').fill("invalid_user");
  await page.waitForTimeout(2_000);
  await page.locator('[id="password"]').fill("wrong_password");
  await page.waitForTimeout(2_000);
  await page.locator('[id="login-button"]').click();
  await page.waitForTimeout(2_000);
  let errorText = await page.locator('h3[data-test="error"]').innerText();
  expect(errorText).toContain(
    "Epic sadface: Username and password do not match any user in this service"
  );
});
