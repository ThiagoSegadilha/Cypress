export const FormHelper = {
    verificarCamposObrigatorios: function (cssSelectors) {
        cssSelectors.forEach(seletor => {
            //cy.get(seletor)
            cy.contains('Preenchimento obrigatório')
        })
    },

    upload: function (selector, fileName) {
        cy.fixture(fileName).then(fileContent => {
            cy.get(selector).upload(
                {fileContent, fileName, mimeType: 'application/pdf'},
                {subjectType: 'drag-n-drop', force: true},
            );
        });
    },

    preencherFormularioComJson: function (fileUri) {
        cy.readFile(fileUri).then(camposValores => {
            FormHelper.preencherFormulario(camposValores);
        })
    },

    preencherFormulario: function (camposValores) {
        Object.entries(camposValores).forEach(([testId, value]) => {
            if (testId.startsWith("mixin-")) {
                this.preencherFormularioComJson(value)
            } else {
                this.preencherCampoPorTestId(testId, value)
            }
        })
    },
    preencherCampoPorTestId: function (testId, value) {
        const selector = this.converterEmTestId(testId);
        this.preencherCampo(selector, value)
    },
    converterEmTestId: function (testId) {
        return testId.split(',')
            .map((testIdSemVirgulas) => testIdSemVirgulas
                .trim()
                .split(' ')
                .map((testIdSemEspacos) => `[data-testid=${testIdSemEspacos}]`)
                .join(' ')
            )
            .join(',');
    },
    preencherCampo: function (selector, value) {
        cy.get(selector)
            .each($element => {
                const tagName = $element.prop("tagName").toLowerCase()
                const type = ($element.attr("type") || "").toLowerCase()
 
                switch (tagName) {
                    case 'textarea':
                    case 'input':
                        if (type === 'checkbox') {
                            this.preencherCheckbox(selector, value);
                        } else {
                            this.preencherTexto(selector, value)
                        }
                        break;
                    case 'input-sim-nao':
                        this.preencherInputSimNao(selector, value)
                        break;
                    case 'mat-select':
                        this.preencherMatSelect(selector, value)
                        break;
                    case 'select':
                        this.preencherSelect(selector, value)
                        break;
                    case 'mat-slide-toggle':
                        this.clicarMatToggle(selector, value)
                        break;
                    case 'mat-form-field':
                        this.preencherMatSelect(selector, value)
                        break;
                    case 'bn-datepicker':
                        this.preencherBnDatePicker(selector, value)
                        break;
                    case 'bn-autocomplete':
                    case 'bn-autocomplete-pais':
                    case 'bn-autocomplete-uf':
                    case 'bn-autocomplete-municipio':
                        this.preencherAutocomplete(selector, value)
                        break;
                    default:
                        throw `"Não sei preecher o campo com tag [${tagName}]`
                }
            })
    },

    preencherTexto: function (selector, value) {
        cy.log('preencherTexto', selector, value)

        cy.get(selector)
            .clear({force: true})

        if (value !== '') {
            cy.get(selector)
                .type(value, {force: true})
        }
    },

    preencherCheckbox: function (selector, value) {
        cy.log('preencherCheckbox', selector, value)

        const elementPromise = cy.get(selector)
        if (value && value.toString().trim().toLowerCase() !== 'false') {
            elementPromise.check({force: true})
        } else {
            elementPromise.uncheck({force: true})
        }
    },

    preencherInputSimNao: function (selector, value) {
        cy.log('preencherInputSimNao', selector, value)

        let label;
        let cleanValue = value.toString().trim().toLowerCase();
        if (!value || ['false', 'nao', 'não'].includes(cleanValue)) {
            label = 'Não';
        } else {
            label = 'Sim';
        }
        cy.get(selector)
            .find(`label:contains(${label})`)
            .click({force: true})
    }
    ,

    preencherMatSelect: function (selector, optionText) {
        cy.log('preencherMatSelect', selector, optionText)

        cy.get(selector)
            .as('select')

        cy.get('@select').find('.loading').should('have.length', 0)

        cy.get('@select')
            .click()

        cy.get('mat-option')
            .contains(optionText)
            .click()
    }
    ,

    preencherSelect: function (selector, optionTextOrValue) {
        cy.log('preencherSelect', selector, optionTextOrValue)

        cy.get(selector)
            .select(optionTextOrValue, {force: true});
    }
    ,

    clicarMatToggle: function (selector, value) {
        cy.log('clicarMatToggle', selector, value)

        if (value === "true") {
            cy.get(selector)
                .click()
        }
    }
    ,

    preencherBnDatePicker: function (selector, value) {
        cy.log('preencherBnDatePicker', selector, value)

        cy.get(selector)
            .find('input')
            .clear({force: true})
            .type(value, {force: true});
    }
    ,

    preencherAutocomplete: function (selector, value) {
        cy.log('preencherAutocomplete', selector, value)

        cy.get(selector)
            .find('input')
            .clear({force: true})
            .type(value, {force: true})
            .wait(1000)
            .type('{enter}');
    }
}
