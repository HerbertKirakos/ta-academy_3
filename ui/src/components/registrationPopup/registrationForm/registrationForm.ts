import { Container } from '@Core/container';

export class RegistrationForm extends Container {
    private LOCATORS = {
        firstName: this.page.getByLabel('First Name'),
        lastName: this.page.getByLabel('Last Name'),
        email: this.page.getByLabel('Email'),
        password: this.page.getByLabel('Password'),
        createNewAccountButton: this.page.locator('//button[@aria-label="Create new account"]'),
    };

    public async fillFields(): Promise<void> {
        await this.LOCATORS.firstName.fill('Ivan');
        await this.LOCATORS.lastName.fill('Ivanov');
        await this.LOCATORS.email.fill(`Test${Date.now()}@test.com`);
        await this.LOCATORS.password.fill('Test1234');
    }

    public async clickCreateNewAccountButton(): Promise<void> {
        await this.LOCATORS.createNewAccountButton.click();
    }
}
