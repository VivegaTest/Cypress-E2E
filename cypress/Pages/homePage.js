export class homePage{


webLocators = {

    search_input: '.form-control.input-lg',
    click_search: '.input-group-btn > .btn > .fa',
    product: 'img[title=""]',
    addtocart: 'Add to Cart',
    successMessages: 'div.alert.alert-success.alert-dismissible'
}

searchProduct( productName){
    cy.get(this.webLocators.search_input).type(productName)
    cy.get(this.webLocators.click_search).click()
}

addtocart(){
    cy.contains(this.webLocators.addtocart).first().click()
}

verifySuccessMessage(){
    return cy.get(this.webLocators.successMessages);
}

}