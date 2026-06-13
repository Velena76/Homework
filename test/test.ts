import { expect, test, Page } from '@playwright/test';

import { HomePage } from '../page/main';

test.only('Проверка загрузки главной страницы', async ({ page }: { page: Page }) => {
    const homePage = new HomePage(page);

    await homePage.goto();
    await expect(page).toHaveURL('https://realworld.qa.guru/');
});

test.only('Проверка видимости логотипа на главной странице', async ({ page }: { page: Page }) => {
    const homePage = new HomePage(page);

    await homePage.goto();
    await expect(homePage.logo).toBeVisible();
});

test.only('Проверка перехода по ссылке "Source Code"', async ({ page }: { page: Page }) => {
    const homePage = new HomePage(page);

    await homePage.goto();
    await homePage.clickSourceCode();
    await expect(page).toHaveURL('https://github.com/TonyMckes/conduit-realworld-example-app');
});

test.only('Проверка видимости списка тегов на главной странице', async ({ page }: { page: Page }) => {
    const homePage = new HomePage(page);

    await homePage.goto();
    await expect(homePage.tagList).toBeVisible();
});

test.only('Проверка навигации по популярным тегам', async ({ page }: { page: Page }) => {
    const homePage = new HomePage(page);

    await homePage.goto();
    const originalURL = page.url();

    await homePage.clickPopularTags();
    const newURL = page.url();

    await expect(newURL !== originalURL);
});