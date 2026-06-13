import { Locator, Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly basURL: string;
    readonly sourceCode: Locator;
    readonly logo: Locator;
    readonly tagList: Locator;
    readonly popularTags: Locator;

    constructor(page: Page) {
        this.page = page;
        this.basURL = 'https://realworld.qa.guru/';
        this.sourceCode = page.locator('nav a[href*="github"]');
        this.logo = page.locator('#root h1');
        this.tagList = page.locator('div.tag-list');
        this.popularTags = page.locator('//*[@id="root"]/main/div/div[2]/div/aside/div/div/button[1]');
    }

    async goto() {
        await this.page.goto(this.basURL);

    }

    async clickSourceCode() {
        await this.sourceCode.waitFor({ state: 'visible' });
        await this.sourceCode.click();
    }

    async clickPopularTags() {
        await this.popularTags.waitFor({ state: 'visible' });
        await this.popularTags.click();
    }

}
