import { Component } from "@Core/component";

export class LoginModal extends Component {
    private LOCATORS = {
        createAccountButton: this.locator.locator('//button[span/span[contains(text(), "Create UHCGlasses.com Account")]]'),
    };

    public async clickCreateAccountButton(): Promise<void> {
        await this.LOCATORS.createAccountButton.click();
    }

    public async isVisible(): Promise<boolean> {
        return await this.locator.isVisible();
    }
}