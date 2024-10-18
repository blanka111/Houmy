import GeneralLib from '../houmy_libary/general_libary';
import HomeLib from '../houmy_libary/home_libary';

describe('Houmy', () => {
    beforeEach(() => {
        // GeneralLib.createSession('Prihlaseni danym  mailem',()=>

        GeneralLib.login('blanka.demangeon@gmail.com', 'Ferari.2025')
    // )
        ;
    });

    it('1.Vytvor kontakt', () => {
    HomeLib.addContact('Sysel','Pavel','pavel.sysel@email.cz');
});

    it.only('2.Vytvor portfolio', () => {
        HomeLib.addPortfolio('Beskydy');

    });

    it('3.Vytvor nemovitost v portfoliu', () => {

    });

});