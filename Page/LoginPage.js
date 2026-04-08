exports.LoginPage = class Login {
    constructor(page){
        this.page=page;
        this.username = '#user-name';
        this.password = '#password';
        this.loginBtn = '#login-button';

    }
    async login(standard_user, secret_sauce) {
        await this.page.fill(this.username, standard_user);
        await this.page.fill(this.password, secret_sauce);
        await this.page.click(this.loginBtn);
    }
}
