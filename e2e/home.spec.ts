import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Abhita e Suvidha Kendra/);
});

test("has get in touch link", async ({ page }) => {
  await page.goto("/");

  // Click the get in touch link.
  const link = page.getByRole("link", { name: /Contact Us/i }).first();
  await expect(link).toBeVisible();
});
