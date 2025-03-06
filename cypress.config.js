const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    experimentalSessionAndOrigin: true,
    baseUrl: 'http://lojaebac.ebaconline.art.br/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
  },
});