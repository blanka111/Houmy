class Nemovitost {
    inputNemovitost = () => cy.get('.css-b62m3t-container');
    btnNemovitostPokracovat = () => cy.contains('.flex','Pokračovat');
    checkDUM = ()=> cy.get('[id="House"]');
    sliderInfo = ()=> cy.get('[name="isMoreInfo"]');
    inputDispozice = () => cy.get('.css-n9qnu9');
    dropDownDispList = ()=> cy.get('[name="disposition"]');
    inputUzitnaPlocha = ()=> cy.get('[id="livingArea"]');
    btnUlozitNemovitost = () => cy.contains('.flex','Uložit nemovitost');



}

module.exports = new Nemovitost();
