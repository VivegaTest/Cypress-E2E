import { homePage } from "../../Pages/homePage";
import testdata from '../../fixtures/testData.json'

const homePageObj = new homePage()

describe('test automation', ()=>{
    before(()=> {
        cy.login(testdata.login.username, testdata.login.password);
    })

    it('Add to cart flow',()=>{

        homePageObj.searchProduct(testdata.product.productName);
        homePageObj.addtocart();
        homePageObj.verifySuccessMessage().should('contain',testdata.message.successMessage).and('contain',testdata.product.productName);
    })
})