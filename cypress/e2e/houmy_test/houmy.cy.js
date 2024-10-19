import GeneralLib from '../houmy_libary/general_libary';
import HomeLib from '../houmy_libary/home_libary';
import LoginPage from '../houmy_pages/login_pages';

import {createStep,createSession,createIntercept,urlLoad} from '../../support/helper';
const user = Cypress.env('user');

describe('Houmy', () => {
    beforeEach(() => {
        createSession('Prihlaseni',()=> LoginPage.login(user.email, user.pwd)
     );
        urlLoad('https://client.houmy.app/dashboard');

    });

    it('1.Vytvor kontakt', () => {
    HomeLib.addContact('Sysel','Pavel','pavel.sysel@email.cz');
});

    it('2.Vytvor portfolio', () => {
        HomeLib.addPortfolio('Beskydy');

    });

    it.only('3.Vytvor nemovitost v portfoliu', () => {
HomeLib.addItemToPortfolio('Beskydy','Chata Morava');
    });

});