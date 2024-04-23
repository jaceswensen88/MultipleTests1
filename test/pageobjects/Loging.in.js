import { $ } from '@wdio/globals';
import Logout from './Loging.out.js';
import BaseUrl from './website.js';
import { expect } from '@wdio/globals';
import Creds from './Cred.js'

class Login extends BaseUrl {

    get usernameType () {
        return $('[id="user-name"]');
    }
    get loginError (){
        return $('[data-test="error"]');
    }

    get passwordType () {
        return $('[id="password"]');
    }

    get submitBtn () {
        return $('[class="submit-button btn_action"]');
    }

    async loginTask (username, password) {
        await this.usernameType.setValue(username);
        await this.passwordType.setValue(password);
        await this.submitBtn.click();
    }

    async oneUser(){
        await this.usernameType.setValue(Creds.sinlgeUser);
        await this.passwordType.setValue(Creds.allPassword);
        await this.submitBtn.click();
    }

    async falseUser(){
        for (let i = 0; i < Creds.badUsers.length; i++) {  
            await this.loginTask(Creds.badUsers[i],Creds.allPassword);
                if (Creds.badUsers[i] === 'NOTGOINGTOWORK','BROKEN','NOTACCETPING','notAcceteable','hotDog','cornDog') {
                await expect(this.loginError).toExist();  
                }
            } 
    }

    async falsePassowrd(){
        for (let i = 0; i < Creds.allUsers.length; i++) {  
            await this.loginTask(Creds.allUsers[i],Creds.badPasswords[i]);
                if (Creds.badPasswords[i] === 'BADPASSWORD','GOODPASSWORD','VERYGOOD PASSWORD','NOGOOD','NOTRIGHT','HOTSAUCE') {
                await expect(this.loginError).toExist();  
                }
            } 
    }
}

export default new Login();