const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'z49see',
  e2e: {
    experimentalSessionAndOrigin: true,
    baseUrl: 'http://lojaebac.ebaconline.art.br/',
    video: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
  },
});