import { Component } from '@Core/component';
import { MyAccountDropdown } from "@Components/homePage/homePage/header/topSide/actionsBar/myAccount/myAccountDropdown";

export class MyAccount extends Component {
    private LOCATORS = {
        title: this.locator.locator('//div[contains(@class, "myAccount__title")]'),
        dropdown: this.locator.locator('//div[contains(@class, "myAccount__activeClass")]'),
    };

    public hoverMyAccount = async (): Promise<void> => {
        await this.locator.hover();
    }

    public async accountState(): Promise<string | null> {
        return await this.LOCATORS.title.textContent();
    }

    public MyAccountDropdown = new MyAccountDropdown(this.LOCATORS.dropdown, this.page);
}
