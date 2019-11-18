describe('Login error2', function() {

  it('Login button2', function() { 

   
    cy.eyesOpen({
      appName: 'Log2',
      browser: { width: 800, height: 600 },
       batchId: '222690',
       batchName: 'test2',
    });


      cy.visit('https://demo.applitools.com/hackathonV2.html')

      cy.get('button').click() 

      cy.get('.alert.alert-warning')
      .should('contain', 'Both Username and Password must be present ')
      .should('be.visible')
      
         cy.eyesCheckWindow('Login From2');

        
         })
  it('Login with username2', function() {

      cy.visit('https://demo.applitools.com/hackathonV2.html')

      cy.get('#username').type('testuser')

      cy.get('button').click() 

      cy.get('.alert.alert-warning')
      .should('contain', 'Password must be present')
      .should('be.visible')
      
      cy.eyesCheckWindow('Login From2');


  })
  it('Login with password2', function() {


      cy.visit('https://demo.applitools.com/hackathonV2.html')

      cy.get('#password').type('testuser')

      cy.get('button').click() 

      cy.get('.alert.alert-warning')
      .should('contain', 'Username must be present')
      .should('be.visible')
      
      cy.eyesCheckWindow('Login From2');

  })

it('Login2', function() { 


  	  cy.visit('https://demo.applitools.com/hackathonV2.html')

  	  cy.get('#username').type('testuser')

  	  cy.get('#password').type('testuser')

      cy.get('button').click() 

      cy.url().should('include', '/hackathonApp.html')

      cy.eyesCheckWindow('Login From2');

      cy.eyesClose();


})

  })
  	  
