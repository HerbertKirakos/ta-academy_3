import { Container } from '@Core/container';

export class RegistrationPopup extends Container {
    private LOCATORS = {
        createUHCGlassesAccountButton: this.page.locator(
            '//div[contains(@class,"bottomBlock__ctaButton")]'
        ),
        popupNavigation: this.page.locator(
            '//div[contains(@class, "ReactModal__Content ReactModal__Content--after-open")]'
        ),
    };

    public async clickCreateUHCGlassesAccountButton(): Promise<void> {
        await this.LOCATORS.createUHCGlassesAccountButton.click();
    }

    public async isVisiblePopUp(): Promise<boolean> {
        return await this.LOCATORS.popupNavigation.isVisible();
    }
}
