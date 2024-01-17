const { defineConfig } = require('cypress')
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://www.automationpractice.pl",
    env: {
      apiUrl: "https://api.trello.com/1"
    },
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
    chromeWebSecurity: false
  }
})