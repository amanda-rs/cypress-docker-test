/// <reference types="cypress" />

describe('Dagens nyheter', () => {
    it('test one', () => {
        cy.visit('https://www.dn.se/');
        cy.contains('kaos').should('exist');
        console.log('Hej');
        
    })
})