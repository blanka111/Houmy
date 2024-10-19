import Adresar from '../houmy_pages/adresar';
import Home from '../houmy_pages/home';
import GeneralLib from '../houmy_libary/general_libary';
import Portfolio from '../houmy_pages/portfolio';
import {createStep,createSession,createIntercept,urlLoad} from '../../support/helper';

class HomeLib {

    addContact(lastName, name, mail) {
        Home.btnAdresar().click().wait(1000);
        createStep('klik na pridat novy kontakt');
        Adresar.btncreateNewContact().click().wait(1000);
        createStep('vlozeni prijmeni');
        Adresar.inputLastName().type(lastName).wait(1000);
        createStep('vlozeni jmena');
        Adresar.inputFirstName().type(name).wait(1000);
        createStep('vlozeni emailu');
        Adresar.inputEmail().type(mail).wait(1000);
        createStep('ulozeni kontaktu');
        Adresar.btnSaveContact().click().wait(1000);
    }
    addPortfolio(namePortfolio) {
        Home.btnPortfolio().click().wait(1000);
        createStep('klik na pridat portfolio');
        Home.btnAddPortfolio().click().wait(1000);
        createStep('zapis nazvu portfolia');
        Portfolio.inputPortfoliName().type(namePortfolio).wait(1000);
        createStep('Ulozeni portfolia');
        Portfolio.btnSavePortfoliName().click({force:true}).wait(1000);
    }

    addItemToPortfolio(namePortfolio,ItemName) {
        Home.btnArrowPortfolio().click().wait(1000);
        createStep('klik na existujici porfolio');
        Home.btnChoosePortfolio(namePortfolio).click().wait(1000);
        createStep('klik na pridani prvni nemovitosti');
        Home.btnAddFirstItemToPortfolio().click().wait(1000);


    }

}
    module.exports = new HomeLib();
