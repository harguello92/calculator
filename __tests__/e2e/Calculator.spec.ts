import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {});
test("Normal behavior", async ({ page }) => {
  await page.goto("http://127.0.0.1:5173/");
  await page.getByRole("button", { name: "8" }).click();
  await page.locator("button:nth-child(16)").click();
  await page.getByRole("button", { name: "3" }).click();
  await page.locator("button:nth-child(20)").click();
  await page.locator("button:nth-child(8)").click();
  await page.getByRole("button", { name: "8" }).click();
  await page.locator("button:nth-child(20)").click();
  await page.locator("._key_1s4ew_1").first().click();
  await page.getByRole("button", { name: "C" }).click();
  await page.getByRole("button", { name: "7" }).click();
  await page.locator("button:nth-child(12)").click();
  await page.getByRole("button", { name: "9" }).click();
});
