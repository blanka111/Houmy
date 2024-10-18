class Home {
    btnAdresar = () => cy.contains('.flex.items-center.gap-4','Adresář');
    btnPortfolio = () => cy.contains('.paragraph-md','Portfolia');
    btnAddPortfolio = () => cy.contains('.flex','Přidat portfolio');
}
module.exports = new Home;