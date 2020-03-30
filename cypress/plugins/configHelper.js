module.exports = {
    getConfigurationByFile: function (file) {
        const pathToConfigFile = path.resolve('cypress', 'config', `${file}.json`)
        return fs.readJson(pathToConfigFile)
    },
}

const fs = require('fs-extra')
const path = require('path')
