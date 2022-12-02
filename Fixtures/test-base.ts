import {test as baseTest} from "@playwright/test";
import EligibilityPage from "../pageobjects/eligibilityPage";
import EligibilityValidation from "../pageobjects/eligibilityValidation";

const test = baseTest.extend<{
    eligibilityCriteria:EligibilityPage;
    eligibilityValidationMsg: EligibilityValidation;
}>({
    eligibilityCriteria: async({page},use)=>{
        await use(new EligibilityPage(page));
    },
    eligibilityValidationMsg: async({page},use)=>{
        await use(new EligibilityValidation(page));
    }
})
export default test;
export const expect = test.expect;


