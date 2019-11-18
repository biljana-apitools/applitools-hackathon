describe('Canvas chart test1', function() {

  it('Canvas chart test1', function() { 

   
    cy.eyesOpen({
       appName: 'Canvas chart test1',
       setForceFullPageScreenshot:true,
    });

  	 cy.visit('https://demo.applitools.com/hackathonV2.html')

  	  cy.get('#username').type('testuser')

  	  cy.get('#password').type('testuser')

      cy.get('button').click() 

      cy.eyesCheckWindow('Canvas chart test1')

      cy.get('#showExpensesChart').click() 

      cy.eyesCheckWindow('Canvas chart test1')

      cy.get('#addDataset').click()

      cy.eyesCheckWindow('Canvas chart test1')

      cy.eyesClose();

  })
  	    })
