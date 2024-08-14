import 'cypress-iframe';
class Pom {

    constructor() {

    }

    textInput = cy.get('#myTextInput');
    hoverDropdown = cy.get('.dropdown .dropbtn');
    selectDropdown = cy.get('#mySelect');
    selectProgressBar = cy.get('#meterBar');
    iFrame = cy.iframe('#myFrame2');

    // Fill the text input and check value
    checkInputText(text) {
        this.textInput.type(text);
        this.textInput.should('have.value', text);
    }

    checkHoverDropdown() {
        this.hoverDropdown.trigger('mouseover');
        cy.get('.dropdown-content a').invoke('show');//force hover
        this.hoverDropdown.should('have.length', 3);
    }

    checkSelect() {
        //select dropdown values
        let dropDownValues = ['50', '75', '100'];

        dropDownValues.forEach(v => {
            this.selectDropdown.select(`Set to ${v}%`)
            cy.wait(500);
            this.selectProgressBar.should('have.value', parseFloat(v / 100));
        })

    }

    checkIframeText() {   
        this.iFrame.find('h4').should('have.text', 'iFrame Text');
    }


}


export default Pom;