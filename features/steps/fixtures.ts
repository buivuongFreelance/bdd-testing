import { test as base, createBdd } from "playwright-bdd";
import { World } from "./world";

type Fixtures = {
  world: World;
};

export const test = base.extend<Fixtures>({
  world: ({ page }, use) => use(new World(page)),
});

export const { Given, When, Then } = createBdd(test, {
  worldFixture: "world",
});
