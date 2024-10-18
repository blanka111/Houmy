class Adresar {

    btncreateNewContact = () => cy.get('.mr-1.5').find('Vytvořit nový kontakt');
    inputLastName = () => cy.get('[id=lastName"]');
    inputFirstName = () => cy.get('[id="firstName"]');
    inputEmail = () => cy.get('[id="email"]');
    btnSaveContact = () => cy.get('.flex').find('Uložit');
}
module.exports = new Adresar;