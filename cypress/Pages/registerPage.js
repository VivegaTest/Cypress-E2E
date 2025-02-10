export class registerPage{


webLocators={

    firstName: '#input-firstname',
    lastName: '#input-lastname',
    email: '#input-email',
    telephone: '#input-telephone',
    password: '#input-password',
    passwordConfirm: '#input-confirm',
    policyCheckbox: 'input[type="checkbox"]',
    continue: '.btn.btn-primary'
}

openURL(){
    cy.visit(Cypress.env('URL'))
}

enterFirstName(FName){
   cy.get(this.webLocators.firstName).type(FName)
}

enterLasttName(LName){
    cy.get(this.webLocators.lastName).type(LName)
 }

 enterEmail(emailId){
    cy.get(this.webLocators.email).type(emailId)
 }

 enterTelephone(number){
    cy.get(this.webLocators.telephone).type(number)
 }

 enterPassword(pwd){
    cy.get(this.webLocators.password).type(pwd)
    cy.get(this.webLocators.passwordConfirm).type(pwd)
 }

 selectCheckBox(){
    cy.get(this.webLocators.policyCheckbox).check()
 }

 clickOnContinue(){
    cy.get(this.webLocators.continue).click()    
 }
}