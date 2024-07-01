import LoginPage from '../Pages/LoginPage';
import BaseController from './BaseController';

export class LoginController extends BaseController {
    constructor(page) {
        super();
        this.page = page;
        this.loginPage = new LoginPage(page);
    }
    
    async login(username, password) {
        try {
            await this.loginPage.goToLogin();
            await this.loginPage.enterUsername(username);
            await this.loginPage.enterPassword(password);
            await this.loginPage.submitLogin();
        } catch (error) {
            console.error("Login failed:", error);
            throw error;
        }
    }

    async checkForErrorMessage() {
        return await this.loginPage.checkForErrorMessage();
    }
}

export default LoginController;
