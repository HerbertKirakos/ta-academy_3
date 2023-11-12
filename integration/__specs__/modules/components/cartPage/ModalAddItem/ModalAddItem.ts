import { fireEvent } from '@testing-library/react';
import { Component } from '@Core/component';

export class ModalAddItem extends Component {
    protected selectors = {
        inputName: '//input[contains(@data-testid, "input-name")]',
        inputPrice: '//input[contains(@data-testid, "input-price")]',
        inputQuantity: '//input[contains(@data-testid, "input-quantity")]',
        buttonCreate: '//button[text()="Create"]',
    };

    public async fillForm(): Promise<void> {
        const [name] = await this.element.waitForXpath(this.selectors.inputName);
        const [price] = await this.element.waitForXpath(this.selectors.inputPrice);
        const [quantity] = await this.element.waitForXpath(this.selectors.inputQuantity);

        fireEvent.change(name, { target: { value: 'Ray-Ban' } });
        fireEvent.change(price, { target: { value: 25 } });
        fireEvent.change(quantity, { target: { value: 2 } });
    }

    public async clickCreateButton(): Promise<void> {
        const [buttonCreate] = await this.element.waitForXpath(this.selectors.buttonCreate);
        fireEvent.click(buttonCreate);
    }
}
