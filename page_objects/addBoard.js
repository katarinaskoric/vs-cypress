class AddBoardPage{
    get addBoardLink (){
       return cy.get("/my-organization");
    }
    get organizationCard() {
        return cy.get(".organization-list-item").first()
    }
    get addBoardPolje(){
        return cy.get(".vs-c-organization-boards__item--add-new");
    }
    get addBoardModal() {
       return cy.get("div[class='vs-c-modal vs-c-modal--starter vs-c-modal--create-board']")
    }
    get boardTitle(){
        return this.addBoardModal.find("input").last();
    }
    get nextBtn(){
        return this.addBoardModal.find("button").last();
    }
    get radioBtn(){
        return cy.get("div[class='vs-c-radio vs-u-cursor--pointer']").first();
    }
    get okBtn(){
        return cy.get(".vs-c-modal--features-button")
    }
    addBoard(title){
        this.organizationCard.click()
        this.okBtn.click()
        this.addBoardPolje.click()
        this.boardTitle.type(title)
        this.nextBtn.click()
        this.radioBtn.click()
        // this.nextBtn.click()
        // this.nextBtn.click()
        // this.nextBtn.click()
        // this.nextBtn.click()
    }
}
export const addBoardPage = new AddBoardPage();