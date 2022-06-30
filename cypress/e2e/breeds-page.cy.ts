describe('breed page spec', () => {
  beforeEach(() => {
      cy.visit("http://localhost:5555")
  })
  it("it should find breeds page and message", () => {
    // The new page should contain an h1 with "Count"
    cy.get("h1").contains("Count")
  })
  it("it should contain /breeds route", () => {
    cy.visit("http://localhost:5555/breeds")
    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href*="breeds"]').click()
    // Should be on a new URL which
    // includes '/commands/actions'
    cy.url().should('include', '/breeds')
    // The new page should contain an h1 with "List of Cat Breeds"
    cy.get("h1").contains("List of Cat Breeds")
  })
})