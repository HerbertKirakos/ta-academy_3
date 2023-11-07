import { expect, test } from '@Test';

test.describe('UHC-1-pom', () => {
    test('Registration new customer with valid data and checking user data reset after logout', async ({
        page,
        registrationForm,
        registrationPopup,
        homePage,
        categoryPage,
        userAccount,
    }) => {
        await test.step('Test-step 1-5 | Open Home page and do registration', async () => {
            await homePage.open();
            const navigation = homePage.Header.TopSide.LoginNavigation;
            await navigation.hoverMyAccount();
            await navigation.clickLoginNavigation();

            expect(await registrationPopup.isVisiblePopUp()).toBe(true);

            await registrationPopup.clickCreateUHCGlassesAccountButton();

            await registrationForm.fillFields();
            await registrationForm.clickCreateNewAccountButton();

            await expect(async () => {
                expect(await userAccount.isVisibleWelcomePopup()).toBe(true);
            }).toPass();

            await userAccount.closeButton();
            await userAccount.hoverMyAccountTitle();
            await userAccount.signOutButton();
            expect(await navigation.checkAccountTitle()).toBe('My Account');
        });
    });
});
