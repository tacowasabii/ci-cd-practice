describe("template spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it('should contain "App Router" text', () => {
    cy.contains("App Router");
  });
});
