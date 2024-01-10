const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://www.automationpractice.pl",
    env: {
      apiUrl: "https://api.trello.com/1"
    },
    chromeWebSecurity: false
  }
})