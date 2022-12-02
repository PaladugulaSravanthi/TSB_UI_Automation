const {test,expect} = require('@playwright/test');
const {EligibilityPage} = require('../pageobjects/eligibilityPage');
const {PersonalDetails} = require('../pageobjects/PersonalDetails');
const dataset = JSON.parse(JSON.stringify(require("../Test-Data/singleAppEligibilityCheck.json")));

// const Applicant_Details = [
//   'Mortgage',
//   'Nobureau',
//   'Nottingham'
// ];

//   test.afterAll(async () => {
//   await page.close();
//  });

test.describe('Verify Mortgage Eligibility When single applicant submits application', () => {
  let page;

  test.beforeAll(async({browser}) => {
       page = await browser.newPage();
     });

  test('Applicant submits Eligibility criteria for Mortgage', async() => {
    const eligibilityPage = new EligibilityPage(page);
    const personalDetails = new PersonalDetails(page);
    await page.goto('./');
    await eligibilityPage.acceptCookies.click();
    await eligibilityPage.buyAHome();
    await eligibilityPage.soleApplicant.click();
    await eligibilityPage.ageCheckTrue.click();
    await eligibilityPage.residencyCheckTrue.click();
    await eligibilityPage.mainResidencyCheckTrue.click();
    await eligibilityPage.incomeCheckTrue.click();
    await eligibilityPage.arrearsCheckFalse.click();
    await eligibilityPage.ccjCheckFalse.click();
    await eligibilityPage.bankruptcyCheckFalse.click();
    await eligibilityPage.interestOnlyFalse.click();
    await eligibilityPage.continueButton.click();
    await eligibilityPage.confirmDisclosure.click();   //Applicant Approves Disclosure
    await eligibilityPage.continueButton.click();
  });

  test('Submit Personal Details of applicant', async() => {
    const personalDetails = new PersonalDetails(page);
    await personalDetails.notFirstTimeBuyer.click();  
    await personalDetails.selectApplicantTitle();
    await personalDetails.selectFirstName.fill(dataset.firstName);
    await personalDetails.selectLastName.fill(dataset.lastName);
    await personalDetails.selectGender.click();
    await personalDetails.nameNotChanged.click();
    await personalDetails.selectDateOfBirth();
    await personalDetails.selectMartialStatusofApplicant();
    await personalDetails.NoOfFinancialDependents();
    await personalDetails.ApplicantNationality();
    await personalDetails.ApplicantResidence();
    await personalDetails.selectCityOfBirth.fill(dataset.cityOfBirth);
    await personalDetails.ApplicantCountryOfBirth();
    await personalDetails.ApplicantCountryOfTaxResidence();
    await personalDetails.selectIfNotAUSCitizen.click();
    await personalDetails.SelectNotAPoliticallyExposedPerson.click();
    await personalDetails.selectNext.click();

  });
});