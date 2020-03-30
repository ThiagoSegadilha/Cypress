import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";

import {AutenticacaoHelper} from "./helpers/autenticacaoHelper";
import {UsuarioHelper} from "../common/helpers/usuarioHelper";

Given(/que estou (?:logado|autenticado) como cliente externo/i, () => {
    const usuario = UsuarioHelper.CLIENTE_EXTERNO
    cy.wrap(usuario).as('usuario')
    AutenticacaoHelper.autenticarUsuario(usuario);
})