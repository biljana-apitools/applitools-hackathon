describe('Traditional test', function() {
  it('Check all elements on the log in form', function() {

  	  cy.visit('https://demo.applitools.com/hackathon.html')

  
  	  cy.get('.auth-header')
      .should('contain', 'Login Form')
      .should('be.visible')

      cy.get(':nth-child(1) > label')
      .should('contain', 'Username')
      .should('be.visible')

      cy.get('#username')
      .should('have.attr', 'placeholder', 'Enter your username')
      .should('be.visible')

      cy.get(':nth-child(1) > .pre-icon')
      .should('be.visible') 
      .should('be.visible') 

	  cy.get(':nth-child(2) > .pre-icon')
      .should('be.visible')  
      .should('be.visible')

      cy.get(':nth-child(2) > label')
      .should('contain', 'Password')
      .should('be.visible')

      cy.get('#password')
      .should('have.attr', 'placeholder', 'Enter your password')
      .should('be.visible')

      cy.get('#log-in')
      .should('contain', 'Log In')
      .should('be.visible')

      cy.get('.form-check-input')
      .should('be.visible')
      .should('not.be.checked')
      .should('be.visible')

      cy.get('.form-check-label')
      .should('contain', 'Remember Me')
      .should('be.visible')


      cy.get(':nth-child(1) > img')
      .should('be.visible') 

      cy.get(':nth-child(2) > img')
      .should('be.visible')

      cy.get(':nth-child(3) > img')
      .should('be.visible')


  })
})