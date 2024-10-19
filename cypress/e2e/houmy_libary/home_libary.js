import Adresar from '../houmy_pages/adresar';
import Home from '../houmy_pages/home';
import Portfolio from '../houmy_pages/portfolio';
import Nemovitost from '../houmy_pages/nemovitost';
import {createStep,createSession,createIntercept,urlLoad,generateRandomSurname,generateEmail,generateRandomFirstName,generateRandomAddress,generateRandomNr} from '../../support/helper';

class HomeLib {

    addContact() {
        Home.btnAdresar().click().wait(1000);
        createStep('klik na pridat novy kontakt');
        Adresar.btncreateNewContact().click({timeout:1000});
        createStep('vlozeni prijmeni');
        Adresar.inputLastName().type(generateRandomSurname({timeout:1000}));
        createStep('vlozeni jmena');
        Adresar.inputFirstName().type(generateRandomFirstName({timeout:1000}));
        createStep('vlozeni emailu');
        Adresar.inputEmail().type(generateEmail(8));
        createStep('ulozeni kontaktu');
        Adresar.btnSaveContact().click({timeout:1000});
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
        createStep('Vlozeni adresy nemovitosti + enter');
        Nemovitost.inputNemovitost().type(generateRandomAddress({timeout:1000})).wait(1000).type("{enter}").type("{enter}");
        Nemovitost.btnNemovitostPokracovat().click({timeout:1000});
        createStep('Vyber Dum + pokracovat');
        Nemovitost.checkDUM().check().wait(1000);
        Nemovitost.btnNemovitostPokracovat().click({timeout:1000});
        createStep('Dalsi dispozice');
        // Nemovitost.sliderInfo().click({timeout:1000});
        Nemovitost.inputUzitnaPlocha().type(generateRandomNr(2));
        Nemovitost.inputDispozice().type('2').wait(1000).type("{enter}");
        createStep('Ulozeni nemovitosti');
        Nemovitost.btnUlozitNemovitost().click({timeout:1000});


    }

}
    module.exports = new HomeLib();
