
class FirstPage{
    btnLogin = ()=> cy.contains('[data-testid="stylablebutton-label"]','Přihlásit se');


}

module.exports = new FirstPage();