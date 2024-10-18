
class LoginPage{
    inputLogin = ()=> cy.get('[name="email"]');
    inputPassword = ()=> cy.get('[name="password"]');
    btnLogin = ()=> cy.get('.relative').last();


}

module.exports = new LoginPage();


