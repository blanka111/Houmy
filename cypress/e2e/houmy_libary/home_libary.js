import Adresar from '../houmy_pages/adresar';
import Home from '../houmy_pages/home';
import GeneralLib from '../houmy_libary/general_libary';


class HomeLib {

    addContact(lastName, name, mail) {
        Home.btnAdresar().get().wait(1000);
        GeneralLib.createStep('klik na pridat novy kontakt');
        Adresar.btncreateNewContact().get().wait(1000);
        GeneralLib.createStep('vlozeni prijmeni');
        Adresar.inputLastName().type(lastName).wait(1000);
        GeneralLib.createStep('vlozeni jmena');
        Adresar.inputFirstName().type(name).wait(1000);
        GeneralLib.createStep('vlozeni emailu');
        Adresar.inputEmail().type(mail).wait(1000);
        GeneralLib.createStep('ulozeni kontaktu');
        Adresar.btnSaveContact().wait(1000);
    }
}
    module.exports = new HomeLib();
