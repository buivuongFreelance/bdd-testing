import { LOGIN_URL } from "../../data/routes";
import { When } from "./fixtures";

When("I see a Logout button", async function () {
  await this.getButtonLogout();
});

When("I click on the Logout button", async function () {
  const button = await this.getButtonLogout();
  await button.click();
});

When("I should see a login page", async function () {
  await this.shouldHaveUrl(LOGIN_URL);
});
