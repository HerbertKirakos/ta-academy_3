import { test as base, expect } from '@playwright/test';
import { HomePage } from '@Components/homePage/homePage';
import { CategoryPage } from '@Components/categoryPage/categoryPage';
import type { Browser, Page } from '@playwright/test';
import { RegistrationPopup } from '@Components/registrationPopup/registrationPopup';
import { RegistrationForm } from '@Components/registrationPopup/registrationForm/registrationForm';
import { UserAccount } from '@Components/userAccount/userAccount';

export type Options = {
    browser: Browser;
    page: Page;
    baseURL: string;
    homePage: HomePage;
    categoryPage: CategoryPage;
    registrationPopup: RegistrationPopup;
    registrationForm: RegistrationForm;
    userAccount: UserAccount;
};

const test = base.extend<Options>({
    page: async ({ page, context, baseURL }, use) => {
        await context.addCookies([
            {
                name: 'OptanonAlertBoxClosed',
                value: new Date().toISOString(),
                url: baseURL,
            },
        ]);
        await use(page);
    },
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    categoryPage: async ({ page }, use) => {
        await use(new CategoryPage(page));
    },
    registrationPopup: async ({ page }, use) => {
        await use(new RegistrationPopup(page));
    },
    registrationForm: async ({ page }, use) => {
        await use(new RegistrationForm(page));
    },
    userAccount: async ({ page }, use) => {
        await use(new UserAccount(page));
    },
});

export { test, expect };
