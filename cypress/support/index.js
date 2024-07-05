Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

// cypress/support/index.js
import './commands';
import './disable-animations.css';