class Home {
    btnAdresar = () => cy.contains('.flex.items-center.gap-4', 'Adresář');
}

module.exports = new Home;