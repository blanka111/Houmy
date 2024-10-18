class Portfolio {
    btnPortfolio = () => cy.get('.paragraph').find('Portfolia');
    btnAddPortfolio = () => cy.get('.mr-1.5').find('Přidat portfolio');
    inputPortfoliName = () => cy.get('[id="name"]');
    btnSavePortfoliName = () => = () => cy.get('.flex').find('Přidat portfolio');
    inputAdress = () => cy.get('[id="react-select-4-live-region"]');
    btnSaveAdress = () => cy.get('.flex').find('Pokračovat');
    btnSaveAdressFlat = () => cy.get('.flex').find('Pokračovat');
    inputFlatNr = () => cy.get('[id="unitNumber"]');
    btnSaveHouse = () => cy.get('.flex').find('Uložit nemovitost')

}

module.exports = new Portfolio;