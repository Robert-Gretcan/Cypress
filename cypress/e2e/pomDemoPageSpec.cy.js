import Pom from '../../Page/pageObject'


describe('Testing spec for on selenium demo page', () => {
    before(() => {
        // Visit the demo page before each test
        cy.visit('https://seleniumbase.io/demo_page')
    })

    it('performs demo page actions', () => {
        const pom = new Pom();  
            
        pom.checkInputText('first Text');
        pom.checkHoverDropdown();
        pom.checkSelect();
        pom.checkIframeText();
    })

})
