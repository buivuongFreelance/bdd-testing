import { expect } from "@playwright/test";
import { When } from "./fixtures";

const dataAddSuccess = {
  name: "Restaurant Name 1",
  address: "Restaurant Address 1",
  contact: "Contact 1",
};

When("I click on the FNB menu", async function () {
  const element = await this.getText("Food and Beverages");
  await element.click();
});

When("I click on the Create FNB button", async function () {
  const element = await this.getButton("Create Restaurant sssss");
  await element.click();
});

When("I see a fnb modal dialog creation", async function () {
  await this.getText("Restaurant Vendor Creation");
});

When("I see a fnb input restaurant name", async function () {
  await this.getText("Restaurant Name");
  await this.getPlaceholder("Enter restaurant name");
});

When("I see a fnb textarea restaurant address", async function () {
  await this.getText("Address");
  await this.getTextPlaceholder("Enter restaurant address");
});

When("I see a fnb select cuisine type", async function () {
  await this.getText("Cuisine Type");
  await this.getPlaceholder("Select cuisine type");
});

When("I see a fnb textarea contact", async function () {
  await this.getText("Contact");
  await this.getTextPlaceholder("Enter contact");
});

When("I click a fnb Create button", async function () {
  const element = await this.getButtonByRole("Create");
  await element.click();
});

When("I see a required error message of Restaurant Name", async function () {
  await this.getText("Required field.0/50");
});

When("I see a required error message of Restaurant Address", async function () {
  await this.getText("Required field.0/200");
});

When("I see a required error message of Cuisine Type", async function () {
  const element = await this.getSelectorById(
    "single-select-autocomplete-helper-text"
  );
  const elementText = await element.innerText();
  expect(elementText).toBe("Required field.");
});

When("I enter FNB Restaurant name", async function () {
  const element = await this.getPlaceholder("Enter restaurant name");
  await element.fill(dataAddSuccess.name);
});

When("I enter FNB Restaurant address", async function () {
  const element = await this.getTextPlaceholder("Enter restaurant address");
  await element.fill(dataAddSuccess.address);
});

When("I select first value of FNB select cuisine type", async function () {
  const element = await this.getSelectOption("Select cuisine type", 1);
  await element.click();
});

When("I enter FNB Contact", async function () {
  const element = await this.getTextPlaceholder("Enter contact");
  await element.fill(dataAddSuccess.contact);
});
