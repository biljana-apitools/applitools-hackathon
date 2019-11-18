describe('Dynamic test2', function() {

  it('Dynamic test2', function() { 

   
    cy.eyesOpen({
      appName: 'Dynamic test',
      browser: { width: 800, height: 600 },
    });




  	 //cy.visit('https://demo.applitools.com/hackathon.html')

     cy.visit('https://demo.applitools.com/hackathonV2.html')

  	  cy.get('#username').type('testuser')

  	  cy.get('#password').type('testuser')

      cy.get('button').click() 

      cy.visit('https://demo.applitools.com/hackathonAppV2.html?showAd=true')

      cy.eyesCheckWindow('Dynamic test');

      cy.eyesClose();

  })
  	    })
