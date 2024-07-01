import { chromium } from 'playwright';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

export class BaseController {
    constructor() {
        this.browserType = process.env.BROWSER_TYPE || 'chromium'; // Default to 'chromium' if not specified
        this.headless = process.env.HEADLESS === 'true'; // Convert to boolean
        this.browser = null;
    }

    async launchBrowser() {
        try {
            this.browser = await chromium.launch({ headless: this.headless });
            this.context = await this.browser.newContext();
            this.page = await this.context.newPage();
            return this.page;
        } catch (error) {
            console.error("Failed to launch browser:", error);
            return null;
        }
    }

    async closeBrowser() {
        if (this.browser) {
            try {
                await this.browser.close();
            } catch (error) {
                console.error("Failed to close browser:", error);
            }
        }
    }
}

export default BaseController;