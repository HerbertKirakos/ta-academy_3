import {Component} from '@Core/component';

export class LoginNavigation extends Component {
    private LOCATORS = {
        text: this.locator.locator('//div[contains(@class, "myAccount__accountContainer")]'),
        loginNavigation: this.locator.locator('//button[text()="Log in"]'),
        myAccountTitleNavigation: this.locator.locator(
            '//div[contains(@class,"myAccount__title")]'
        ),
    };

    public async hoverMyAccount(): Promise<void> {
        await this.LOCATORS.text.hover({ noWaitAfter: true });
    };

    public async clickLoginNavigation(): Promise<void> {
        await this.LOCATORS.loginNavigation.click();
    };

    public async checkAccountTitle(): Promise<string | null> {
        return await this.LOCATORS.myAccountTitleNavigation.textContent();
    };
}
