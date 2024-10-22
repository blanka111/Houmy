import {createStep,createSession,createIntercept,urlLoad} from '../../support/helper';
import Home from '../houmy_pages/home';

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
        this.btnLogin().click();
        Home.tableKonciciSmlouvy().should('be.visible');
    }


}

module.exports = new LoginPage();


