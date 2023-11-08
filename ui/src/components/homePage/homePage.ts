import { Container } from '@Core/container';
import { Header } from '@Components/homePage/homePage/header';
import { LoginModal } from "@Components/homePage/homePage/loginModal";
import { RegistrationModal } from "@Components/homePage/homePage/registrationModal";
import { WelcomePopup } from "@Components/homePage/homePage/welcomePopup";
import { Snackbar } from "@Components/homePage/homePage/snackbar";

export class HomePage extends Container {
    protected LOCATORS = {
        header: this.page.locator('//div[contains(@class, "header__wrapHeader")]'),
        loginModal: this.page.locator('//div[contains(@class, "ReactModal__Content ReactModal__Content--after-open") and .//h2[contains(., "Access")]]'),
        registrationModal: this.page.locator('//div[contains(@class, "ReactModal__Content ReactModal__Content--after-open") and .//h2[contains(., "No vision")]]'),
        welcomePopup: this.page.locator('//div[contains(@class, "rc-dialog-content")]'),
        snackbar: this.page.locator('//article[contains(@class, "eligibilityWidget__wrap")]'),
    };

    public Header = new Header(this.LOCATORS.header, this.page);

    public LoginModal = new LoginModal(this.LOCATORS.loginModal, this.page);

    public RegistrationModal = new RegistrationModal(this.LOCATORS.registrationModal, this.page);

    public WelcomePopup = new WelcomePopup(this.LOCATORS.welcomePopup, this.page);

    public Snackbar = new Snackbar(this.LOCATORS.snackbar, this.page);

    public async open(): Promise<void> {
        await this.page.goto('/', { waitUntil: 'domcontentloaded' });
    }
}
