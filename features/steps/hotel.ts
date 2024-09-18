import { When } from "./fixtures";

When("I click on the Accommodation menu", async function () {
  const element = await this.getText("Accommodation");
  await element.click();
});

When("I click on the Hotel menu", async function () {
  const element = await this.getText("Hotel");
  await element.click();
});

When("I click on the Create Hotel button", async function () {
  const element = await this.getButton("Create Hotel");
  await element.click();
});

When("I see a hotel modal dialog creation", async function () {
  await this.getText("Hotel Vendor Creation");
});

When("I see a hotel name field", async function () {
  await this.getText("Hotel name");
});
