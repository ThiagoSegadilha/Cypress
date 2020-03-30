// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import {TestIdHelper} from "../integration/common/helpers/testidHelper";

Cypress.Commands.overwrite("get", (originalFn, testIdOrCssSelector, options) => {
  const tipo = typeof testIdOrCssSelector;
  console.debug("get", testIdOrCssSelector, tipo)

  let customSelector = TestIdHelper.expandirTestId(testIdOrCssSelector);
  return originalFn(customSelector, options)
});
Cypress.Commands.overwrite("contains", (originalFn, subject, testIdOrCssSelector, content, options) => {
  const customSelector = subject ? testIdOrCssSelector : TestIdHelper.expandirTestId(testIdOrCssSelector);
  console.log('contains', subject)
  return originalFn(subject, customSelector, content, options)
});
Cypress.Commands.overwrite("find", (originalFn, subject, testIdOrCssSelector, content, options) => {
  const customSelector = TestIdHelper.expandirTestId(testIdOrCssSelector);
  return originalFn(subject, customSelector, content, options)
});


import 'cypress-file-upload';

Cypress.Commands.add('upload_file', (fixturePath, mimeType, selector) => {
  const encoding = 'binary'
  cy.fixture(fixturePath, encoding).then(fileContent => {
    cy.get(selector).upload(
      {
        fileContent,
        fileName: fixturePath,
        mimeType,
        encoding
      },
      {subjectType: 'drag-n-drop'},
    );
  });
});


import {FormHelper} from "../integration/common/helpers/formHelper.js";

Cypress.Commands.add('preencherFormulario', (camposValores) => {
  FormHelper.preencherFormulario(camposValores)
})
Cypress.Commands.add('preencherCampo', (campo, valor) => {
  FormHelper.preencherCampo(campo, valor)
})


Cypress.Commands.add(
  'shouldHaveTrimmedText',
  {
    prevSubject: true,
  },
  (subject, expectedValue) => {
    expect(subject.text().trim()).to.eq(expectedValue.toString().trim());
    return subject;
  },
);
