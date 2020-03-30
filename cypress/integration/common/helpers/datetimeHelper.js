export const DateTimeHelper = {
  tomorrow: function() {
    return Cypress.moment(new Date()).add(1,'days')
  },
  tomorrowBr() {
    return this.tomorrow().format('DD/MM/YYYY')
  },
}
