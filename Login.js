describe('Login with username and password', function() {

	cy.eyessetBatch("Login", "1"); 

  it('Login with username and password', function() {

  	beforeEach(() => {
    cy.eyesOpen({
      appName: 'Log',
       browser:[ {name: 'chrome', width: 1024, height: 768},
        {name: 'chrome', width: 800, height: 600},
        {name: 'firefox', width: 1024, height: 768},
        ]
    });
  });
  	 afterEach(() => {
    cy.eyesClose();
  });

  	  cy.visit('https://demo.applitools.com/hackathon.html')

  	  cy.get('#username').type('testuser')

  	  cy.get('#password').type('testuser')

      cy.get('button').click() 

      cy.url().should('include', '/hackathonApp.html')

      cy.eyesCheckWindow('Login From');

   })
})
  	  
