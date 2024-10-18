class Adresar {

    btncreateNewContact = () => cy.contains('.flex','Vytvořit nový kontakt');
    inputLastName = () => cy.get('[id="lastName"]');
    inputFirstName = () => cy.get('[id="firstName"]');
    inputEmail = () => cy.get('[id="email"]');
    btnSaveContact = () => cy.contains('.flex','Uložit');
}
module.exports = new Adresar;