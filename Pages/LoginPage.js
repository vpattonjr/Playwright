import { loginSelectors } from '../Selectors/LoginPageSelectors';

export class LoginPage {
    constructor(page) {
        this.page = page;
    }

    async goToLogin() {
        await this.page.goto(process.env.LOGIN_URL || 'https://example.com/login');
    }

    async enterUsername(username) {
        await this.page.fill(loginSelectors.inputs.usernameInput, username || process.env.USER_NAME);
    }

    async enterPassword(password) {
        await this.page.fill(loginSelectors.inputs.passwordInput, password || process.env.PASSWORD);
    }

    async submitLogin() {
        await this.page.click(loginSelectors.buttons.submitButton);
    }

    async checkForErrorMessage() {
        await this.page.waitForSelector(loginSelectors.generation.errorMessages);
        return this.page.isVisible(loginSelectors.generation.errorMessages);
    }
}

export default LoginPage;