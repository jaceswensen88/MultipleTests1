import Creds from './Creds.js';
import Logout from './Loging.out.js'
import Login from './Loging.in.js'
class BuyItem {
    get onise () {
        return $('[id="item_2_title_link"]');
    }
    get addToCart (){
        return $('[id="add-to-cart"]');
    }
    get cart (){
        return $('[class="shopping_cart_badge"]');
    }

    get checkoutBtn (){
        return $('[class="btn btn_action btn_medium checkout_button "]');
    }

    get firstName (){
        return $('[id="first-name"]');
    }
    
    get lastName (){
        return $('[id="last-name"]');
    }
    
    get postalCode (){
        return $('[id="postal-code"]');
    }

    get continueBtn (){
        return $('[id="continue"]');
    }

    get finishBtn (){
        return $('[id="finish"]');
    }

    get backToHome (){
        return $('[id="back-to-products"]');
    }

    async buyOnise () {
        await Login.oneUser();
        await this.onise.waitForClickable();
        await this.onise.click();
        await this.addToCart.click();
        await this.cart.click();
        await this.checkoutBtn.click();
        await this.firstName.setValue(Creds.firstNameCred);
        await this.lastName.setValue(Creds.lastNameCred);
        await this.postalCode.setValue(Creds.postalCred);
        await this.continueBtn.click();
        await this.finishBtn.click();
        await this.backToHome.click();
        await Logout.logOutTask();
    }
}
export default new BuyItem();
