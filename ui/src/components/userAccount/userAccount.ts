import { Container } from '@Core/container';

export class UserAccount extends Container {
    private LOCATORS = {
        welcomePopup: this.page.locator('//div[contains(@class, "rc-dialog-body")]'),
        myAccount: this.page.locator('//div[contains(@class, "myAccount__myAccountMenu")]'),
        closeButtonNavigation: this.page.locator('//button[contains(@class, "rc-dialog-close")]'),
        signOutNavigation: this.page.locator('//li/button[text()="Sign out"]'),
    };

    public async isVisibleWelcomePopup(): Promise<boolean> {
        return await this.LOCATORS.welcomePopup.isVisible();
    }

    public async closeButton(): Promise<void> {
        await this.LOCATORS.closeButtonNavigation.click();
    }

    public async hoverMyAccountTitle(): Promise<void> {
        await this.LOCATORS.myAccount.hover({ noWaitAfter: true });
    }

    public async signOutButton(): Promise<void> {
        await this.LOCATORS.signOutNavigation.click();
    }
}
