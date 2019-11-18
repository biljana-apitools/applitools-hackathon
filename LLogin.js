describe('LOg innn', function() {

  it('Loginnn', function() { 

   
    cy.eyesOpen({
      appName: 'Login',
      browser: { width: 800, height: 600 },
       batchId: '12344564',
       batchName: 'Test loginn',
    });


      cy.visit('https://demo.applitools.com/hackathonV2.html')

      cy.get('button').click() 
      
         cy.eyesCheckWindow('Login From');

        


     cy.visit('https://demo.applitools.com/hackathonV2.html')

      cy.get('#username').type('testuser')

      cy.get('button').click() 

      cy.eyesCheckWindow('Login From');


  


      cy.visit('https://demo.applitools.com/hackathonV2.html')

      cy.get('#password').type('testuser')

      cy.get('button').click() 
      
      cy.eyesCheckWindow('Login From');




  	 cy.visit('https://demo.applitools.com/hackathonV2.html')

  	  cy.get('#username').type('testuser')

  	  cy.get('#password').type('testuser')

      cy.get('button').click() 

      cy.eyesCheckWindow('Login From');

      cy.eyesClose();

  })
  	    })
