import { Component } from "@Core/component";

export class Snackbar extends Component {
    private LOCATORS = {
        snackbarTitle: this.locator.locator('//header//p[contains(., "Hi")]'),
    };

    public async getSnackbarTitle(): Promise<string | null> {
        return await this.LOCATORS.snackbarTitle.textContent();
    };

    public  async isVisible(): Promise<boolean> {
        return await this.locator.isVisible();
    };
}