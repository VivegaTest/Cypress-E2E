import { registerPage } from "../../Pages/registerPage"
import registerdata from '../../fixtures/resgisterdata.json'

const registerObj = new registerPage()

describe('test automation',()=>{


    it ('register flow' ,()=>{
        registerObj.openURL();
        registerObj.enterFirstName(registerdata.firstName);
        registerObj.enterLasttName(registerdata.lastName);
        registerObj.enterEmail(registerdata.email);
        registerObj.enterTelephone(registerdata.telephone);
        registerObj.enterPassword(registerdata.password);
        cy.get('input[type="radio"]').eq(1).check()
        registerObj.selectCheckBox();
        registerObj.clickOnContinue();

    })
})