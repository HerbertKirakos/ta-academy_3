import { expect, test } from '@Test';
import { ActionProps } from "@Components/homePage/homePage/header/topSide/actionsBar/myAccount/myAccountDropdown";
import { TextFieldProps } from "@Components/homePage/homePage/registrationModal";

test.describe('UHC-1-pom', () => {
    test('Registration new customer with valid data and checking user data reset after logout', async ({
        page,
        homePage,
        categoryPage,
    }) => {
        const myAccount = homePage.Header.TopSide.ActionsBar.MyAccount;

        await test.step('Test-step 1 | hover my account and login', async () => {
            await homePage.open();
            await myAccount.hoverMyAccount();
            const AccountDropdown = myAccount.MyAccountDropdown;
            expect(await myAccount.MyAccountDropdown.isVisible()).toBe(true);

            await AccountDropdown.clickToAction(ActionProps.Login);

            expect(await homePage.LoginModal.isVisible()).toBe(true);
        });

        await test.step('Test-step 2 | click create account button', async () => {
            await homePage.LoginModal.clickCreateAccountButton();

            await expect(async () => {
                expect(await homePage.LoginModal.isVisible()).toBe(false);
                expect(await homePage.RegistrationModal.isVisible()).toBe(true);
            }).toPass();
        });

        await test.step('Test-step 3 | fill out form and click on “Create UHCGlasses.com Account” button ', async () => {
            await homePage.RegistrationModal.fillTextFields(TextFieldProps.firstname, 'Ivan');
            await homePage.RegistrationModal.fillTextFields(TextFieldProps.lastname, 'Ivanov');
            await homePage.RegistrationModal.fillTextFields(TextFieldProps.email, `test${Math.random()}@test.com`);
            await homePage.RegistrationModal.fillTextFields(TextFieldProps.password, 'Test1234!');

            await homePage.RegistrationModal.createNewAccountButton();

            await expect(async () => {
                expect(await homePage.RegistrationModal.isVisible()).toBe(false);
                expect(await homePage.WelcomePopup.isVisible()).toBe(true);
                expect(await homePage.WelcomePopup.getPopupTitle()).toStrictEqual('Welcome, Ivan');
                expect(await homePage.WelcomePopup.getPopupSubtitle()).toStrictEqual('You can start enjoying everything we have to offer');
            }).toPass();
        });

        await test.step('Test-step 4 | close welcome popup', async () => {
            await homePage.WelcomePopup.clickCloseButton()
            expect(await homePage.WelcomePopup.isVisible()).toBe(false);
            expect(await myAccount.accountState()).toStrictEqual('Hello, Ivan');
            expect(await homePage.Snackbar.getSnackbarTitle()).toStrictEqual('Hi Ivan');
        });

        await test.step('Test-step 5 | hover my account and sign out', async () => {
            await myAccount.hoverMyAccount()
            expect(await myAccount.MyAccountDropdown.isVisible()).toBe(true);

            await myAccount.MyAccountDropdown.clickToAction(ActionProps.SignOut);

            expect(await myAccount.accountState()).toStrictEqual('My Account');

            expect(await homePage.Snackbar.isVisible()).toBe(false);
        });
    });
});
