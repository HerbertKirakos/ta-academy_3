import { Component } from '@Core/component';
import { ActionsBar } from "@Components/homePage/homePage/header/topSide/actionsBar";

export class TopSide extends Component {
    private LOCATORS = {
        actionsBar: this.locator.locator('//div[contains(@class, "topStripMenu__menu")]'),
    };

    public ActionsBar = new ActionsBar(this.LOCATORS.actionsBar, this.page)
}
