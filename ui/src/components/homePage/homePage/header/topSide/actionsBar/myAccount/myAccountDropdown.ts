import { Component } from '@Core/component';

export enum ActionProps {
    Login = 'Log in',
    SignOut = 'Sign out',
    MyAccount = 'My Account',
}

export class MyAccountDropdown extends Component {
    private LOCATORS = {
        action: (button: ActionProps) =>
            this.locator.locator(`//button[contains(text(),"${button}")]`),
    };

    public async isVisible(): Promise<boolean> {
        return await this.locator.isVisible();
    };

    public async clickToAction(button: ActionProps): Promise<void> {
        await this.LOCATORS.action(button).click();
    };
}
