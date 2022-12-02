import { Page } from "@playwright/test";
import EligibilityPage from "../pageobjects/eligibilityPage";


export default class HomePage {


    constructor(public page: Page) { }
    async clickOnHomePage(page) {
        const eligibilityPage = new EligibilityPage(page);
        await page.goto('./');
        await eligibilityPage.clickAcceptCookies();

    }
}