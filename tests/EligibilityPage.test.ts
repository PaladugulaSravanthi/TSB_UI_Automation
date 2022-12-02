//import test,{expect} from "@playwright/test";
import test, {expect} from "../Fixtures/test-base";
import HomePage from "../Utils/homePage";

//test.describe.configure({ mode: 'serial'});
// test.describe("group", () => {
//   let page;

//   test.beforeAll(async({browser}) => {
//        page = await browser.Page();
//      });

//   test.afterAll(async () => {
//   await page.close();
//  });
  test.describe("Verify Error text when applicant does not meet Eligibility Crtiteria", () => {

    test('Verify the title of the page', async ({eligibilityCriteria,page}) => {
     // await eligibilityCriteria.navigateToLaunchScreen;
      await page.goto('./');
      await eligibilityCriteria.clickAcceptCookies();
      await expect(page).toHaveTitle("TSB Mortgages - Mortgage Promise");
    });

    test('Verify Validation message when Release Equity option is selected', async ({eligibilityCriteria,page}) => {
      await page.goto('./');
      await eligibilityCriteria.clickAcceptCookies();
      await eligibilityCriteria.selectReleaseEquity();
      await page.getByText('If you want to release equity on an unmortgaged property, please call us on 0800').isVisible();
    });

    test('Verify Validation message when Buy-to-let option selected', async ({eligibilityCriteria,page}) => {
      await page.goto('./');
      await eligibilityCriteria.clickAcceptCookies();
      await eligibilityCriteria.selectBuyToLetProperty();
      await page.getByText('If you are looking to buy to let / purchase a second home, please call us on 0800').isVisible();
    });

    test('Verify Validation message when a new deal on TSB mortgage selected', async ({eligibilityCriteria,page}) => {
      await page.goto('./');
      await eligibilityCriteria.clickAcceptCookies();
      await eligibilityCriteria.selectDealOnTsbMort();
      await page.getByText('If you are looking for a new deal on your existing TSB mortgage, please visit our website.').isVisible();
    });

    test('Verify Validation message when Apply for further advance', async ({eligibilityCriteria,page}) => {
      await page.goto('./');
      await eligibilityCriteria.clickAcceptCookies();
      await eligibilityCriteria.selectApplyForFurtherAdvance();
      await page.getByText('If you want to borrow more on an existing TSB mortgage, please call us on 0800 056 1088 or use the l').isVisible();
    });

    test('Verify Error Msg when Age Term is <18 or >75Years is selected', async ({eligibilityCriteria,page}) => {
      await page.goto('./');
      await eligibilityCriteria.clickAcceptCookies();
      await eligibilityCriteria.clickAgeCheckFalse();
      await page.getByText("We will need to discuss this in more detail with you. Please call us on 0800 056 1088 or use the liv").isVisible();
    });

    test('Verify Error Msg if user is not a UK resident', async ({eligibilityCriteria,page}) => {
      await page.goto('./');
      await eligibilityCriteria.clickAcceptCookies();
      await eligibilityCriteria.clickIfNotAUkResident();
      await page.getByText("Sorry you need to be a UK resident to apply for a mortgage with us.").isVisible();
    });

    test('Verify Error Msg if the application is not for main residence', async ({eligibilityCriteria,page}) => {
      await page.goto('./');
      await eligibilityCriteria.clickAcceptCookies();
      await eligibilityCriteria.clickIfAppliNotMainResidence();
      await page.getByText("If this application is not for your main residence, you will need to call us on 0800 056 1088 or use").isVisible();
    });

    test('Verify Error Msg if user is not having regular income', async ({eligibilityCriteria,page}) => {
      await page.goto('./');
      await eligibilityCriteria.clickAcceptCookies();
      await eligibilityCriteria.clickIfAppliHasNoRegulaIncome();
      await page.getByText("Sorry, to apply for one of our mortgages you need to have a regular income").isVisible();
    }); 

    test('Verify Error Msg if the applicant is having arrears', async ({eligibilityCriteria,page}) => {
      await page.goto('./');
      await eligibilityCriteria.clickAcceptCookies();
      await eligibilityCriteria.clickIfAppliHasRegulaIncome();
      await page.getByText("We will need to discuss this in more detail with you. Please call us on 0800 056 1088 or use the liv").isVisible();
    });

    test('Verify Error Msg if the applicant is having CCJs', async ({eligibilityCriteria,page}) => {
      await page.goto('./');
      await eligibilityCriteria.clickAcceptCookies();
      await eligibilityCriteria.clickIfApplHasCCJcheck();
      await page.getByText("We will need to discuss this in more detail with you. Please call us on 0800 056 1088 or use the liv").isVisible();
    });

    test('Verify Error Msg if the applicant selects bankrupt', async ({eligibilityCriteria,page}) => {
      await page.goto('./');
      await eligibilityCriteria.clickAcceptCookies();
      await eligibilityCriteria.clickBankrptcyCheckTrue();
      await page.getByText("Unfortunately you cannot apply for a TSB mortgage at this time.").isVisible();
    });

    test('Verify Error Msg if the applicant is looking for mortgage on Interest basis', async ({eligibilityCriteria,page}) => {
      await page.goto('./');
      await eligibilityCriteria.clickAcceptCookies();
      await eligibilityCriteria.clickMortOnInterestBasis();
      await page.getByText("We will need to discuss this in more detail with you. Please call us on 0800 056 1088 or use the liv").isVisible();
    });
  });

  test.describe("Verify Error text when user does not select Mandatory fields", () => {

    test('Verify error message when application type is not selected', async ({eligibilityCriteria,page}) => {
      await page.goto('./');
      await eligibilityCriteria.acceptCookiesAndClickContinue();
      await page.getByText("Please select your application type.").isVisible();
    });

    test('Verify Error text when No. of applicants not selected', async ({eligibilityCriteria,page}) => {
      await page.goto('./');
      await eligibilityCriteria.acceptCookiesAndClickContinue();
      await page.getByText("Please enter the number of applicants.").isVisible();
    });

    test('Verify Error text when Applicant age is not selected', async ({eligibilityCriteria,page,eligibilityValidationMsg}) => {
      await page.goto('./');
      await eligibilityCriteria.acceptCookiesAndClickContinue();
      await eligibilityValidationMsg.verifyApplicantAgeValidationMessage();
    });

    test('Verify Error text when Applicant residency is not selected', async ({eligibilityCriteria,eligibilityValidationMsg,page}) => {
      await page.goto('./');
      await eligibilityCriteria.acceptCookiesAndClickContinue();
      await eligibilityValidationMsg.verifyApplicantIsAResident();
    });

    test('Verify Error text when Applicant main residence is not selected', async ({eligibilityCriteria,eligibilityValidationMsg,page}) => {
      await page.goto('./');
      await eligibilityCriteria.acceptCookiesAndClickContinue();
      await eligibilityValidationMsg.verifyApplicantMainResidence();
    });

    test('Verify Error text when Regular Income is not selected', async ({eligibilityCriteria,page,eligibilityValidationMsg}) => {
      await page.goto('./');
      await eligibilityCriteria.acceptCookiesAndClickContinue();
      await eligibilityValidationMsg.verifyApplicantRegularIncome();
    });

    test('Verify Error text when arrears field is not selected', async ({eligibilityCriteria,page,eligibilityValidationMsg}) => {
      await page.goto('./');
      await eligibilityCriteria.acceptCookiesAndClickContinue();
      await eligibilityValidationMsg.verifyApplicantArrears();
    });

    test('Verify Error text when CCJ is not selected', async ({eligibilityCriteria,page,eligibilityValidationMsg}) => {
      await page.goto('./');
      await eligibilityCriteria.acceptCookiesAndClickContinue();
      await eligibilityValidationMsg.verifyApplicantCCJ();
    });

    test('Verify Error text when declared bankupt is not selected', async ({eligibilityCriteria,page,eligibilityValidationMsg}) => {
      await page.goto('./');
      await eligibilityCriteria.acceptCookiesAndClickContinue();
      await eligibilityValidationMsg.verifyApplicantBankrupt();
    });

    test('Verify Error text when interest on mortgage is not selected', async ({eligibilityCriteria,page,eligibilityValidationMsg}) => {
      await page.goto('./');
      await eligibilityCriteria.acceptCookiesAndClickContinue();
      await eligibilityValidationMsg.verifyMortgageOnInterestBasis();
    });
  });

  test.describe("Verify When Applicant gives valid Eligibility Criteria ", () => {
      
    test('Verify Eligibility criteria of the applicant', async ({eligibilityCriteria,page}) => {
      await page.goto('./');
      await eligibilityCriteria.clickAcceptCookies();
      await eligibilityCriteria.selectBuyAHome();
      await eligibilityCriteria.soleApplicant();
      await eligibilityCriteria.clickAgeCheckTrue();
      await eligibilityCriteria.clickIfAUkResident();
      await eligibilityCriteria.clickIfAppliMainResidence();
      await eligibilityCriteria.clickIfAppliHasRegulaIncome();
      await eligibilityCriteria.clickIfAppliNotHavingArrears();
      await eligibilityCriteria.clickIfApplHasNoCCJcheck();
      await eligibilityCriteria.clickBankrptcyCheckFalse();
      await eligibilityCriteria.clickMortOnNotInterestBasis();
      await eligibilityCriteria.clickContinueButton();
      await page.pause();
      await expect(page).toHaveURL('./disclosure');
      await page.pause();
      await eligibilityCriteria.selectConfirmDisclosure();
      await page.pause();
      await eligibilityCriteria.clickContinueButton();
    });
  });


    
  



