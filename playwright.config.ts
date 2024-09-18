import { defineConfig, devices } from "@playwright/test";
import { defineBddConfig, cucumberReporter } from "playwright-bdd";

const testDir = defineBddConfig({
  features: "features/*.feature",
  steps: "features/steps/*.ts",
  tags: "@regression",
});

export default defineConfig({
  testDir,
  reporter: [
    cucumberReporter("html", {
      outputFile: "cucumber-report/report.html",
    }),
  ],
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"], headless: false },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"], headless: false },
    },

    {
      name: "webkit",
      use: { ...devices["Desktop Safari"], headless: false },
    },
  ],
  use: {
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
    video: "retain-on-failure",
    baseURL: "https://ceh-admin.trisma.io.vn",
    extraHTTPHeaders: {
      "Content-Type": "application/json",
    },
  },
});
