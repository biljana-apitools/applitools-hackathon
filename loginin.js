describe('Loginn', function() {

  it('Login buttonn', function() { 

   
    cy.eyesOpen({
      appName: 'Logn',
      browser: { width: 800, height: 600 },
       batchId: '788',
       batchName: 'My batch name1',
    });


      cy.visit('https://demo.applitools.com/hackathonV2.html')

      cy.get('button').click() 

      cy.get('.alert.alert-warning')
      .should('contain', 'Both Username and Password must be present ')
      .should('be.visible')
      
         cy.eyesCheckWindow('Login From');

        
         })
  it('Login with username', function() {

      cy.visit('https://demo.applitools.com/hackathonV2.html')

      cy.get('#username').type('testuser')

      cy.get('button').click() 

      cy.get('.alert.alert-warning')
      .should('contain', 'Password must be present')
      .should('be.visible')
      
      cy.eyesCheckWindow('Login From');


  })
  it('Login with password', function() {


      cy.visit('https://demo.applitools.com/hackathonV2.html')

      cy.get('#password').type('testuser')

      cy.get('button').click() 

      cy.get('.alert.alert-warning')
      .should('contain', 'Username must be present')
      .should('be.visible')
      
      cy.eyesCheckWindow('Login From');

  })
it('Login', function() { 


  	  cy.visit('https://demo.applitools.com/hackathonV2.html')

  	  cy.get('#username').type('testuser')

  	  cy.get('#password').type('testuser')

      cy.get('button').click() 

      cy.url().should('include', '/hackathonApp.html')

      cy.eyesCheckWindow('Login From');

      cy.eyesClose();




  })
  	  })   
