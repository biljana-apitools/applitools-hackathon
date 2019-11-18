describe('Visual testtt', () => {
  beforeEach(() => {
    cy.eyesOpen({
      appName: 'Log',
      browser: { width: 800, height: 600 },
    });
  });

  afterEach(() => {
    cy.eyesClose();
  });

  it('Login', () => {
     //cy.visit('https://demo.applitools.com/hackathon.html');
    cy.visit('https://demo.applitools.com/hackathonV2.html');
    cy.eyesCheckWindow('Login From');
  });
});