import { Component } from '@Core/component';
import { MyAccount } from './actionsBar/myAccount';

export class ActionsBar extends Component {
    protected LOCATORS = {
        myAccount: this.locator.locator('//div[contains(@class, "myAccount__myAccountMenu")]'),
    };

    public MyAccount = new MyAccount(this.LOCATORS.myAccount, this.page);
}
