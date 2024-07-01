import BaseController from './BaseController';
import LoginController from './LoginController';

export class TestController extends BaseController {
    constructor() {
        super();
        this.page = null;
        this.loginController = null;
    }

    async setup() {
        this.page = await this.launchBrowser();
        if (!this.page) {
            console.error('Setup failed: Page not initialized');
            return null;
        }
        this.loginController = new LoginController(this.page);
        return { page: this.page, loginController: this.loginController };
    }

    async teardown() {
        if (this.page) {
            await this.page.close();
        }
        await this.closeBrowser();
    }
}

export default TestController;