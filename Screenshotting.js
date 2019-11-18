describe('Screenshot', function() {

  it('Screenshot', function() { 

   
    cy.eyesOpen({
       appName: 'Login',
       batchId: '2422342',
       batchName: 'test123',
       setForceFullPageScreenshot:true,
    });

  	 cy.visit('https://demo.applitools.com/hackathon.html')

  	  cy.get('#username').type('testuser')

  	  cy.get('#password').type('testuser')

      cy.get('button').click() 

      cy.eyesCheckWindow('Screenshot');

      cy.eyesClose();

  })
  	    })
