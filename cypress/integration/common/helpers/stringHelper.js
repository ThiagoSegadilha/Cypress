export const StringHelper = {
    apenasNumeros: function(texto) {
        return texto.toString().replace(/\D/gi, '');
    },
}
