import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";

import {AutenticacaoHelper} from "./helpers/autenticacaoHelper";
import {UsuarioHelper} from "../common/helpers/usuarioHelper";

Given(/que estou (?:logado|autenticado) como cliente externo/i, () => {
    UsuarioHelper.login_externo()
})
