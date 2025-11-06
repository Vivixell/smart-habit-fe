describe('Home smoke', () => {
  it('loads homepage and shows navbar', () => {
    cy.visit('/');
    cy.contains('GrowTrack').should('exist');
    cy.contains('Testimonials').should('exist');
  });
});




