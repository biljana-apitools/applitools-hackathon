describe('Login', function() {

  
  it('Login button', function() {

    beforeEach(() => {
    cy.eyesOpen({
      appName: 'Log',
      browser: { width: 800, height: 600 },
    });
  });

   afterEach(() => {
    cy.eyesClose();
  });

  	  cy.visit('https://demo.applitools.com/hackathon.html')

      cy.get('button').click() 

      cy.get('.alert.alert-warning')
      .should('contain', 'Both Username and Password must be present ')
      .should('be.visible')
  	  
         cy.eyesCheckWindow('Login From');

  })
})