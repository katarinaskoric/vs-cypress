/// <reference types="Cypress" />

import { loginPage } from "../../page_objects/js loginPage";

const credentials ={
    validanEmail:"rina.ns@hotmail.com",
    validPassword:"neznam"
};
describe("login test", () =>{
    beforeEach ("visit app and click the login link",() => {
      cy.visit("https://cypress.vivifyscrum-stage.com/login");
      cy.url().should("include","/login");
        loginPage.loginPageHeading
       .should("be.visible")
       .and("have.text","Log in with your existing account");
    })
    it("login with valid credentials", () => {
      cy.intercept({
            method:"POST",
            url:"https://cypress-api.vivifyscrum-stage.com/api/v2/login",
    }).as("successfullogin");
        loginPage.login(credentials.validanEmail,credentials.validPassword);
        cy.wait("@successfullogin").then((interception) =>{
            console.log("INTERCEPTION", interception);
            expect(interception.response.statusCode).eq(200);
        });
        cy.url().should("not.include","/login");
})
})
