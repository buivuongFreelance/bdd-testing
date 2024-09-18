import { Page } from "@playwright/test";
import { LARGE_TIMEOUT, TIMEOUT, TINY_TIMEOUT } from "../../data/utils";

export class World {
  constructor(public page: Page) {}

  async navigate(url: string) {
    return await this.page.goto(url);
  }

  async pause() {
    return await this.page.pause();
  }

  async getText(text: string, isLongTimeout = false) {
    const selector = `text=${text}`;
    return await this.page.waitForSelector(selector, {
      timeout: isLongTimeout ? LARGE_TIMEOUT : TIMEOUT,
    });
  }

  async getPlaceholder(text: string, isLongTimeout = false) {
    const selector = `input[placeholder='${text}']`;
    return await this.page.waitForSelector(selector, {
      timeout: isLongTimeout ? LARGE_TIMEOUT : TIMEOUT,
    });
  }

  async getSelectOption(
    text: string,
    index: number = 1,
    isLongTimeout = false
  ) {
    const selector = `input[placeholder='${text}']`;
    const element = await this.page.waitForSelector(selector, {
      timeout: isLongTimeout ? LARGE_TIMEOUT : TIMEOUT,
    });
    await element.click();
    await this.page.waitForTimeout(TINY_TIMEOUT);
    return await element.waitForSelector(`(//*[@role="option"])[${index}]`, {
      timeout: isLongTimeout ? LARGE_TIMEOUT : TIMEOUT,
    });
  }

  async getTextPlaceholder(text: string, isLongTimeout = false) {
    const selector = `textarea[placeholder='${text}']`;
    return await this.page.waitForSelector(selector, {
      timeout: isLongTimeout ? LARGE_TIMEOUT : TIMEOUT,
    });
  }

  async getButton(text: string, isLongTimeout = false) {
    const selector = `button:has-text('${text}')`;
    return await this.page.waitForSelector(selector, {
      timeout: isLongTimeout ? LARGE_TIMEOUT : TIMEOUT,
    });
  }

  async getButtonByRole(text: string, isLongTimeout = false) {
    const selector = `role=button[name=${text}]`;
    return await this.page.waitForSelector(selector, {
      timeout: isLongTimeout ? LARGE_TIMEOUT : TIMEOUT,
    });
  }

  async getSelectorByClass(className: string, isLongTimeout = false) {
    const selector = `.${className}`;
    return await this.page.waitForSelector(selector, {
      timeout: isLongTimeout ? LARGE_TIMEOUT : TIMEOUT,
    });
  }

  async getSelectorById(id: string, isLongTimeout = false) {
    const selector = `#${id}`;
    return await this.page.waitForSelector(selector, {
      timeout: isLongTimeout ? LARGE_TIMEOUT : TIMEOUT,
    });
  }

  async getButtonLogout(isLongTimeout = false) {
    const selector = ".ceh-1in44b7";
    return await this.page.waitForSelector(selector, {
      timeout: isLongTimeout ? LARGE_TIMEOUT : TIMEOUT,
    });
  }

  async getButtonSidebar(isLongTimeout = false) {
    const selector = ".ceh-4g6ai3";
    return await this.page.waitForSelector(selector, {
      timeout: isLongTimeout ? LARGE_TIMEOUT : TIMEOUT,
    });
  }

  async shouldHaveUrl(url: string) {
    return await this.page.waitForURL(url);
  }
}
