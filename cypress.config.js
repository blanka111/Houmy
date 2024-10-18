const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth:1920,
  viewportHeight:1080,
  watchForFileChanges:false,
  e2e: {
    testIsolation:false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
