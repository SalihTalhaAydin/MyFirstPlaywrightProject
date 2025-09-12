import { test, expect } from "@playwright/test";

test("Etsy search test", async ({ page }) => {
  await page.goto("https://www.etsy.com/");
  await page.waitForTimeout(10_000);
  let searchBar = page.locator("#global-enhancements-search-query");
  await searchBar.type("dress", { delay: 200 });
  await page.waitForTimeout(10_000);
  await searchBar.press("Enter");
  await page.waitForTimeout(10_000);
});
