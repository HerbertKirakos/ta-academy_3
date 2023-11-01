import { test, expect } from '@Test';

test.describe('UHC-1 (test ID)', () => {
    test('Registration new customer with valid data and checking user data reset after logout (test title)', async ({ browser, page, baseURL  }) => {
        await page.goto(baseURL as string, {waitUntil: 'domcontentloaded'});

        const hoverMyAccount = page.locator('//div[text()="My Account"]');
        await hoverMyAccount.hover({noWaitAfter: true});

        const loginButton = page.locator('//ul//li//button[text()="Log in"]');
        await loginButton.click();

        const registrationButton = page.locator('//div//button//span//span[text()=\'Create UHCGlasses.com Account\']');
        await registrationButton.click();

        const firstName = page.getByLabel('First Name');
        await firstName.type('Ivan', { delay: 100 });

        const lastName = page.getByLabel('Last Name');
        await lastName.type('Ivanov', { delay: 100 });

        const email = page.getByLabel('Email')
        const randomEmail = Math.random();
        await email.type(`test@test${randomEmail}.com`, { delay: 100 });

        const password = page.getByLabel('Password')
        await password.type('Test1234', { delay: 100 });

        const createNewAccount = page.locator('//button[@aria-label="Create new account"]');
        await createNewAccount.click();

        const welcomePopupTitleLocator = page.locator('//h2[contains(., "Welcome, Ivan")]');
        const welcomePopupTitle = await welcomePopupTitleLocator.textContent();
        expect(welcomePopupTitle).toStrictEqual('Welcome, Ivan');

        const welcomePopupSubtitleLocator = page.locator('//p[contains(., "You can start enjoying everything we have to offer")]');
        const welcomePopupSubtitle = await welcomePopupSubtitleLocator.textContent();
        expect(welcomePopupSubtitle).toStrictEqual('You can start enjoying everything we have to offer');

        const closeButton = page.locator('//button[@aria-label="Close"]')
        await  closeButton.click();

        const myAccountTitleLocator = page.locator('//div[text()="Hello, Ivan"]');
        const myAccountTitle = await myAccountTitleLocator.textContent();
        expect(myAccountTitle).toStrictEqual('Hello, Ivan');

        const snackbarTitleLocator = page.locator('//header//p[contains(., "Hi")]');
        const snackbarTitle = await snackbarTitleLocator.textContent();
        expect(snackbarTitle).toStrictEqual('Hi Ivan');

        const hoverLogedMyAccount = page.locator('//div[text()="Hello, Ivan"]');
        await hoverLogedMyAccount.hover({noWaitAfter: true});

        const signoutButton = page.locator('//ul//li//button[text()="Sign out"]');
        await signoutButton.click();

        const afterSignoutMyAccountTitleLocator = page.locator('//div[text()="My Account"]');
        const afterSignoutMyAccountTitle = await afterSignoutMyAccountTitleLocator.textContent();
        expect(afterSignoutMyAccountTitle).toStrictEqual('My Account');
    });
});
