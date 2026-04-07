class LoginPage {

    constructor(page) {
        this.page = page;
        this.signInButton = page.locator('input[name="login"]')
        this.emailField = page.locator("//input[@id='userEmail']")
        this.passwordField = page.locator("//input[@id='userPassword']")
    }


    async goTo(){
        await page.goto("https://rahulshettyacademy.com/client");

    }

    async  validateLogin(username, password) {
        await this.emailField.type(username);
        await this.passwordField.type(password);
        await this.signInButton.click();
    }

}

module.exports = { LoginPage };