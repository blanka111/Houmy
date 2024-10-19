class Portfolio {

    inputPortfoliName = () => cy.get('[id="name"]');
    btnSavePortfoliName = () => cy.get('.flex.w-full.items-center.justify-center').last();
    // btnSavePortfoliName = () => cy.contains('.mt-4.flex','Přidat portfolio');
    inputAdress = () => cy.get('[id="react-select-4-live-region"]');
    btnSaveAdress = () => cy.get('.flex').find('Pokračovat');
    btnSaveAdressFlat = () => cy.get('.flex').find('Pokračovat');
    inputFlatNr = () => cy.get('[id="unitNumber"]');
    btnSaveHouse = () => cy.get('.flex').find('Uložit nemovitost')
}

module.exports = new Portfolio;