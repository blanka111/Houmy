import FirstPage from '../houmy_pages/first_page';
import LoginPage from '../houmy_pages/login_pages';


class GeneralLib {

    login (username, password) {
    cy.clearCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    cy.visit(' https://client.houmy.app/sign-in');
    // cy.visit('https://www.houmy.cz/');
    // FirstPage.btnLogin().click().wait(5000);
    LoginPage.inputLogin().type(username);
    LoginPage.inputPassword().type(password);
    cy.wait(1000);
    LoginPage.btnLogin().click().wait(5000);
    cy.wait(500);

    }
    createStep(step) {
        cy.step(step)
    }

    createIntercept(method, url) {
        return cy.intercept(method, url);                //need to return so i can use in alias.as
    }

    createSession(sessionId, setupFnc) {
        cy.session(sessionId, setupFnc);
    }


}
module.exports = new GeneralLib();