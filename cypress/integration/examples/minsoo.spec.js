/// <reference types="cypress" />

context("Actions", () => {
  it("Login", () => {
    cy.visit("http://127.0.0.1:8080/");
    cy.get(".test-login").click();
    cy.get(".test-input-email input").click().type("zlemzlem5656@naver.com");
    cy.get(".test-input-password input")
      .click()
      .type("rlaalstn")
      .type("{enter}");
    cy.location().should((location) => {
      expect(location.href).to.eq("http://127.0.0.1:8080/mypage");
    });
  });
});
