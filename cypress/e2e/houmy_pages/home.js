class Home {
    btnAdresar = () => cy.contains('.flex.items-center.gap-4','Adresář');
    btnPortfolio = () => cy.contains('.paragraph-md','Portfolia');
    btnAddPortfolio = () => cy.contains('.flex','Přidat portfolio');
    btnArrowPortfolio = () => cy.get('.ml-auto.-rotate-90');
    tableRowPortfolio = (text) => cy.contains('.overflow-hidden',text);
    btnChoosePortfolio = (text) => this.tableRowPortfolio(text).contains('.truncate',text);
    tableKonciciSmlouvy= () => cy.contains('.flex','Končící smlouvy');
    btnAddFirstItemToPortfolio = () => cy.contains('.flex.w-full','Přidat nemovitost');
    btnCreatedPortfolio = (name) => cy.contains('li',name);
}
module.exports = new Home;