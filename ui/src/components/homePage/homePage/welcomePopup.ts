import { Component } from "@Core/component";

export class WelcomePopup extends Component {
    private LOCATORS = {
        closeButton: this.locator.locator('//button[contains(@class, "rc-dialog-close")]'),
        popupTitle: this.locator.locator('//h2[contains(@class, "welcomePopup")]'),
        popupSubtitle: this.locator.locator('//p[contains(text(), "You can start")]'),
    };

    public async isVisible(): Promise<boolean> {
        return await this.locator.isVisible();
    }

    public async clickCloseButton(): Promise<void> {
        await this.LOCATORS.closeButton.click();
    }

    public async getPopupTitle(): Promise<string | null> {
       return await this.LOCATORS.popupTitle.textContent();
    }

    public async getPopupSubtitle(): Promise<string | null> {
        return await this.LOCATORS.popupSubtitle.textContent();
    }
}