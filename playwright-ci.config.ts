import { defineConfig, PlaywrightTestConfig } from '@playwright/test';
import { join } from 'node:path';

const config: PlaywrightTestConfig = {
    testDir: join(__dirname ),
    timeout: 30_000,
    reporter: [
        ['line'], // в консоль во время прогона
        ['html', {
            outputFolder: 'playwright-report', // папка (по умолчанию)
            open: 'never', // 'always' | 'never' | 'on-failure'
        }],
        ['allure-playwright', {
            detail: true, // шаги внутри теста
            outputFolder: 'allure-results', // сырые JSON файлы
            suiteTitle: false, // не дублировать describe в заголовке
        }],
    ],
    globalTimeout: 30_000,
    use: {
        // testIdAttribute: TEST_ID_ATTR,
        defaultBrowserType: 'chromium',
        browserName: 'chromium',
        headless: true,
        launchOptions: {
            args: [
                '--no-sandbox',
                /** window width / height */
                '--window-size=1920,1080',
                /** open devtools by default */
                // '--auto-open-devtools-for-tabs'
            ],
            headless: true,
            executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
            timeout: 30_000,
            // slowMo: 1000
        },
        contextOptions: {
            viewport: null,
            // baseURL: TEST_BASE_URL
        },
    },
};
export default defineConfig(config );