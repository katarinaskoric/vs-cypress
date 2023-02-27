/// <reference types="Cypress" />
import { loginPage } from "../../page_objects/js loginPage";
import { addBoardPage } from "../../page_objects/addBoard";

let credential = {
    validEmail: "rina.ns@hotmail.com",
    validPassword: "neznam"
};

describe("add board", () => {
    beforeEach("visit app and click the login link", () => {
        
      cy.intercept({
            method: "POST",
            url: "https://cypress-api.vivifyscrum-stage.com/api/v2/login",
        }).as("successfullogin");
       
        cy.visit("/");
        loginPage.login(credential.validEmail, credential.validPassword);
        cy.wait("@successfullogin").then((interception) => {
            expect(interception.response.statusCode).eq(200);
        });
    });
    it("add board", () => {
       addBoardPage.addBoard("nesto");
    })
})