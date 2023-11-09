import { Mock } from '@Core/mock';
import { CartPage } from '@Components/cartPage/cartPage';
import { GetCartItemsMock } from '@Mocks/api/mockio/v2/id/get';

describe('UHC-1-int', () => {
    const mock = Mock.getInstance();
    let cartPage: CartPage;

    beforeAll(async () => {
        cartPage = new CartPage();
        mock.addMocks(new GetCartItemsMock());
    });

    afterAll(() => {
        cartPage.destroy();
    });

    test('Add-Delete cart items', async () => {
        await cartPage.fulfill();
        const cartList = await cartPage.getCartList();

        reporter.startStep('Click Add Cart Item button');
            const modalAddItem = await cartPage.openModalAddItem();
        reporter.endStep();

        reporter.startStep('Fill all required fields & press Create');
            await modalAddItem.fillForm();
            await modalAddItem.clickCreateButton();

            const addedProduct = (await cartList.getCartItems())[0];
            expect(await addedProduct.getProductName()).toStrictEqual('Ray-Ban');
            expect(await addedProduct.getProductPrice()).toStrictEqual(25);
            expect(await addedProduct.getQuantity()).toStrictEqual(2);
        reporter.endStep();

        reporter.startStep('Click on Delete button of last added item');
            await addedProduct.deleteProduct();
            const cartListAfterRemove = await cartList.getCartItems();
            expect(cartListAfterRemove.includes(addedProduct)).toBe(false);
        reporter.endStep();
    });
});
