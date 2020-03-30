export const BooleanHelper = {

    paraSimNao(valorBooleano) {
        if (valorBooleano == false) {
            return "Não"
        }
        if (valorBooleano == true) {
            return "Sim"
        }
        return valorBooleano
    }
}
