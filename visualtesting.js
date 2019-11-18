  describe('visual validation 2', () => {


    it('works', () => {
    cy.visit('https://demo.applitools.com/hackathon.html');

    cy.eyesOpen({
      appName: 'Login',
      testName: 'Login',
      browser: [
        {name: 'chrome', width: 1024, height: 768},
        {name: 'firefox', width: 1024, height: 768},
       ]

      });

       cy.eyesCheckWindow("Login check")

       cy.visit('https://demo.applitools.com/hackathonV2.html')

       cy.eyesCheckWindow("Login check")

       cy.eyesClose()
})
    })
 