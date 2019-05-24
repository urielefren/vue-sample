class LoginService {
    private isLogged = false;

    public getStatusLogin() {
        return this.isLogged;
    }

    public setStatusLogin(isLogged: boolean) {
        this.isLogged = isLogged;
    }
}

export const loginService = new LoginService();
