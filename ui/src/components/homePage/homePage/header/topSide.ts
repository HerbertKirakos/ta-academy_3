import { Component } from '@Core/component';
import { LoginNavigation } from './topSide/loginNavigation';

export class TopSide extends Component {
    private LOCATORS = {
        myAccount: this.locator.locator(
            '//div[contains(@class, "topStripMenu__menu___mVIts topStripMenu__dHelpCenterUHCG")]'
        ),
    };

    public LoginNavigation = new LoginNavigation(this.LOCATORS.myAccount, this.page);
}
