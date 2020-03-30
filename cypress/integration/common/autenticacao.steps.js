import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";

import {AutenticacaoHelper} from "./helpers/autenticacaoHelper";
import {UsuarioHelper} from "../common/helpers/usuarioHelper";

Given(/que estou (?:logado|autenticado) como master bndes/i, () => {
    const usuario = UsuarioHelper.MASTER_INTERNO
    cy.wrap(usuario).as('usuario')
    AutenticacaoHelper.autenticarUsuario(usuario);
})
