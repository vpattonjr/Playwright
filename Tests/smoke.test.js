import { test, expect } from '@playwright/test';
import TestController from '../Controllers/TestController';

test.describe('Smoke Test Suite', () => {
    let setup, page, loginController;

    test.beforeAll(async () => {
        setup = new TestController();
        const result = await setup.setup();
        if (!result) {
            console.error("Failed to initialize test setup.");
            return;
        }
        ({ page, loginController } = result);
    });

    test.afterAll(async () => {
        await setup.teardown();
    });

    test('Can login', async () => {
        await loginController.login(process.env.USER_NAME, process.env.PASSWORD);
        await expect(page).toHaveURL(process.env.HOMEPAGE_URL);
    });

    test('Can see data in service location tab', async () => {
        // TODO: Get requirements for Service Location Tab
    });
});
