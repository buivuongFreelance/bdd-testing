import { expect } from "@playwright/test";
import { Given, When, Then } from "./fixtures";

Given("I am on Playwright home page", async ({ page, baseURL }) => {
  await page.goto("/");
});

When("I click link {string}", async ({ page }, name: string) => {
  await page.getByRole("link", { name }).click();
});

Then("I see in title {string}", async ({ page }, text: string) => {
  await expect(page).toHaveTitle("hehe");
});
