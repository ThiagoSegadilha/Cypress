export const TestIdHelper = {
    expandirTestId: function (testIdOrCssSelector) {
        let customSelector = testIdOrCssSelector;
        if (this.podeSerTestId(testIdOrCssSelector)) {
            customSelector = `[data-testid=${testIdOrCssSelector}], ${testIdOrCssSelector}`;
        }
        console.debug('expandirTestId', testIdOrCssSelector, customSelector)
        return customSelector;
    },

    podeSerTestId: function (testIdOrCssSelector) {
        return testIdOrCssSelector
            && (!(testIdOrCssSelector instanceof RegExp))
            && testIdOrCssSelector.match(/^(\w|-|_)+$/);
    },
}
