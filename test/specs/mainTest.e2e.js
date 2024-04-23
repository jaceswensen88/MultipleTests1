import Login from '../pageobjects/Loging.in.js';
import BuyItem from '../pageobjects/PurchasingItem.js'

describe('test', () => {
    it('vaildLogin', async () => {
        await Login.open();
        await Login.falseUser();
        await Login.falsePassowrd();
        await BuyItem.buyOnise();
    });
})