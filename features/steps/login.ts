import { Given, When, Then } from "./fixtures";
import { LOGIN_URL } from "../../data/routes";
import { ADMIN_USER } from "../../data/user";
import { isEmpty } from "lodash";
import { isEmail } from "../../data/utils";

let invalidEmail = "";
let invalidPassword = "";

Given("I am on the login page", async function () {
  await this.navigate(LOGIN_URL);
});

When("I see a Welcome back title", async function () {
  await this.getText("Welcome backs");
});

When("I enter an admin email address into Login form", async function () {
  const email = await this.getPlaceholder("Enter email");
  await email.fill(ADMIN_USER.email);
});

When("I enter an admin password into Login form", async function () {
  const password = await this.getPlaceholder("Enter password");
  await password.fill(ADMIN_USER.password);
});

When("I click on the Login button", async function () {
  const button = await this.getButton("Login");
  await button.click();
});

Then("I should see a dashboard page", async function () {
  await this.getText("Welcome to CEH System");
});

When("I enter email {string} into Login form", async function (email: string) {
  invalidEmail = email;
  const locator = await this.getPlaceholder("Enter email");
  await locator.fill(email);
});

When(
  "I enter password {string} into Login form",
  async function (password: string) {
    invalidPassword = password;
    const locator = await this.getPlaceholder("Enter password");
    await locator.fill(password);
  }
);

Then("I should see error messages", async function () {
  if (isEmpty(invalidEmail)) {
    await this.getText("Email address is required");
  } else if (!isEmail(invalidEmail)) {
    await this.getText("Email address nots found. Please check and try again.");
  }
  if (isEmpty(invalidPassword)) {
    await this.getText("Password is required");
  }
});
