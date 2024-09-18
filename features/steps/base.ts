import { LOGIN_URL } from "../../data/routes";
import { ADMIN_USER } from "../../data/user";
import { Given, When } from "./fixtures";

Given("I am logged in as an admin user", async function () {
  await this.navigate(LOGIN_URL);
  await this.getText("Welcome back");
  const email = await this.getPlaceholder("Enter email");
  await email.fill(ADMIN_USER.email);
  const password = await this.getPlaceholder("Enter password");
  await password.fill(ADMIN_USER.password);
  const button = await this.getButton("Login");
  await button.click();
  await this.getText("Welcome to CEH System");
});

When("I hover on sidebar button", async function () {
  const button = await this.getButtonSidebar();
  await button.hover();
});

When("I wait for {int} seconds", async function (seconds: number) {
  await this.page.waitForTimeout(seconds * 1000);
});
