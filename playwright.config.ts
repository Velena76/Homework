import { defineConfig, PlaywrightTestConfig } from '@playwright/test';
import { join } from 'node:path';

const config: PlaywrightTestConfig = {
    testDir: join(__dirname ),
    timeout: 1_000_000,
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
    globalTimeout: 1_000_000,
    use: {
        // testIdAttribute: TEST_ID_ATTR,
        defaultBrowserType: 'chromium',
        browserName: 'chromium',
        headless: false,
        launchOptions: {
            args: [
                '--no-sandbox',
                /** window width / height */
                '--window-size=1920,1080',
                /** open devtools by default */
                // '--auto-open-devtools-for-tabs' // всегда открывает devTools
            ],
            headless: false,
            executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
            timeout: 1_000_000,
            // slowMo: 1000
        },
        contextOptions: {
            viewport: null,
            // baseURL: TEST_BASE_URL
        },
    },
};
export default defineConfig(config );