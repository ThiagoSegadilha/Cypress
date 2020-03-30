export const StepperHelper = {
    irPara: function (titulo) {
        const tituloAjustado = ` ${titulo.trim()} `
        cy.get(`.bn-stepper-step:contains(${tituloAjustado})`)
            .click({force: true}).wait(500)
        cy.get(`.bn-stepper-step:contains(${tituloAjustado})`)
            .click({force: true})
        cy.get('.bn-stepper-step.current-step')
            .should('have.text', tituloAjustado)
    },
    passoAtualDeveEstarValido: function () {
        cy.get('.bn-stepper-step.current-step')
            .find('.bn-stepper-circle.bg-success')
    },
    passoAtualDeveEstarInvalido: function () {
        cy.get('.bn-stepper-step.current-step')
            .find('.bn-stepper-circle.stepper-pending')
    },
    exibirPendencias: function () {
        cy.get('[data-testid=stepComPendencias]')
            .click()
    },
}
