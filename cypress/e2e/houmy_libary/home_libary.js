import Adresar from '../houmy_pages/adresar';
import Home from '../houmy_pages/home';
import GeneralLib from '../houmy_libary/general_libary';
import Portfolio from '../houmy_pages/portfolio';


class HomeLib {

    addContact(lastName, name, mail) {
        Home.btnAdresar().click().wait(1000);
        GeneralLib.createStep('klik na pridat novy kontakt');
        Adresar.btncreateNewContact().click().wait(1000);
        GeneralLib.createStep('vlozeni prijmeni');
        Adresar.inputLastName().type(lastName).wait(1000);
        GeneralLib.createStep('vlozeni jmena');
        Adresar.inputFirstName().type(name).wait(1000);
        GeneralLib.createStep('vlozeni emailu');
        Adresar.inputEmail().type(mail).wait(1000);
        GeneralLib.createStep('ulozeni kontaktu');
        Adresar.btnSaveContact().click().wait(1000);
    }
    addPortfolio(namePortfolio) {
        Home.btnPortfolio().click().wait(1000);
        GeneralLib.createStep('klik na pridat portfolio');
        Home.btnAddPortfolio().click().wait(1000);
        GeneralLib.createStep('zapis nazvu portfolia');
        Portfolio.inputPortfoliName().type(namePortfolio).wait(1000);
        GeneralLib.createStep('Ulozeni portfolia');
        Portfolio.btnSavePortfoliName().click({force:true}).wait(1000);
    }

}
    module.exports = new HomeLib();
