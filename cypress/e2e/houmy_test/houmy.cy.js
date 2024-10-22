
import HomeLib from '../houmy_libary/home_libary';
import LoginPage from '../houmy_pages/login_pages';

import {createStep, createSession, createIntercept, urlLoad, generateRandomText} from '../../support/helper';
const user = Cypress.env('user');

describe('Houmy', () => {
    beforeEach(() => {
        createSession('Prihlaseni',()=> LoginPage.login(user.email, user.pwd));
        urlLoad('https://client.houmy.app/dashboard');
    });

    it('1.Vytvor kontakt', () => {
    HomeLib.addContact();
});

    it('2.Vytvor portfolio', () => {
        const portfolio = generateRandomText(6);
        HomeLib.addPortfolio(portfolio);
    });

    it('3.Vytvor nemovitost v portfoliu', () => {
        const portfolio = generateRandomText(6);
        HomeLib.addPortfolio(portfolio);
        urlLoad('https://client.houmy.app/dashboard');
        HomeLib.addItemToPortfolio(portfolio);
    });

});