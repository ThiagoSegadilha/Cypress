export const SpinnerHelper = {
    aguardarSpinnerDesaparecer: () => {
        cy.get('.loading-overlay').should('not.be.visible')
    },
}
