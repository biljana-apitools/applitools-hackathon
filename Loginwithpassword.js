describe('Login with password', function() {

	eyes.setBatch("Login", "1"); 

  it('Login with password', function() {

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

  	  cy.get('#password').type('testuser')

      cy.get('button').click() 

      cy.get('.alert.alert-warning')
      .should('contain', 'Username must be present')
      .should('be.visible')
  	  
      cy.eyesCheckWindow('Login From');

  })
})