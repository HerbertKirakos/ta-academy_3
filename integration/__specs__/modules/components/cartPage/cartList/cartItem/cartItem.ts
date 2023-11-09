import { Component } from '@Core/component';

export class CartItem extends Component {
    protected selectors = {
        productName: 'h2',
        productPrice: './/div[contains(@class, "price-for-one")]',
        totalPrice: './/div[contains(@class, "fullprice")]',
        quantity: './/div[@data-testid="quantity-current"]',
        buttonAdd: './/button[text()="+"]',
        buttonDelete: '//button[@data-testid="delete-btn"]',
    };

    public async getProductName(): Promise<string> {
        const [productName] = await document.waitForQuerySelector(this.selectors.productName);
        return productName.textContent;
    }

    public async getProductPrice(): Promise<number> {
        const totalPrice = await this.getTotalPrice();
        const quantity = await this.getQuantity();
        return Number(totalPrice / quantity);
    }

    public async getTotalPrice(): Promise<number> {
        const [totalPrice] = await this.element.waitForXpath(this.selectors.totalPrice);
        return Number(totalPrice.textContent.replace('$', '').trim());
    }

    public async getQuantity(): Promise<number> {
        const [quantity] = await this.element.waitForXpath(this.selectors.quantity);
        return Number(quantity.textContent);
    }

    public async addOne(): Promise<void> {
        await this.element.clickByXpath(this.selectors.buttonAdd);
    }

    public async deleteProduct(): Promise<void> {
        await this.element.clickByXpath(this.selectors.buttonDelete);
    }
}
