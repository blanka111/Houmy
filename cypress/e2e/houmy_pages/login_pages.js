import {createStep,createSession,createIntercept,urlLoad} from '../../support/helper';

class LoginPage{
    inputLogin = ()=> cy.get('[name="email"]');
    inputPassword = ()=> cy.get('[name="password"]');
    btnLogin = ()=> cy.get('.relative').last();


    login (username, password) {
        cy.clearCookies();
        cy.clearAllLocalStorage();
        cy.clearAllSessionStorage();
        urlLoad(' https://client.houmy.app/sign-in');
        // cy.visit(' https://client.houmy.app/sign-in');
        this.inputLogin().type(username);
        this.inputPassword().type(password);
        cy.wait(1000);
        this.btnLogin().click().wait(5000);
    }


}

module.exports = new LoginPage();


