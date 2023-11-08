import { Component } from "@Core/component";

export enum TextFieldProps {
    firstname = 'First Name',
    lastname = 'Last Name',
    email = 'Email',
    password = 'Password',
}

export class RegistrationModal extends Component {
    private LOCATORS = {
        textFields: (text: TextFieldProps) => this.locator.locator(`//input[contains(@placeholder, "${text}")]`),
        createNewAccountButton: this.locator.locator('//button[contains(@aria-label, "Create new account")]'),
    };

    public async fillTextFields(field: TextFieldProps, text: string): Promise<void> {
        await this.LOCATORS.textFields(field).type(text);
    };

    public async createNewAccountButton(): Promise<void> {
        await this.LOCATORS.createNewAccountButton.click();
    };

    public async isVisible(): Promise<boolean> {
        return this.locator.isVisible();
    };
}