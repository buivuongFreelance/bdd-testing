import { When } from "./fixtures";

When("I click on the Guest Management menu", async function () {
  const element = await this.getText("Guest Management");
  await element.click();
});

When("I click on the Guest Group menu", async function () {
  const element = await this.getText("Guest Group");
  await element.click();
});

When("I see a guest group modal dialog creation", async function () {
  await this.getText("Create Group");
});

When("I click a guest group Create button", async function () {
  const element = await this.getText("Create Group");
  await element.click();
});
