class PersonalDetails {

    constructor(page)
    {
        this.page = page;
        this.notFirstTimeBuyer = page.locator('label[for="firstTimeBuyer_0_false"]');
        this.selectTitle = page.locator('span[role="combobox"]:has-text("Select title")');
        this.selectTitleFromList = page.locator('ul[role="listbox"]:has-text("Select titleMrMrsMsMissDrRevOther (please specify)")').getByRole('option', { name: 'Mr' });
        this.selectFirstName = page.getByLabel('First name');
        this.selectLastName = page.getByLabel('Last name');
        this.selectGender = page.getByText('Female');
        this.nameNotChanged = page.locator('label[for="firstTimeBuyer_0_false"]');
        this.selectDate = page.locator('span[role="combobox"]:has-text("Day")');
        this.selectDatefromList = page.locator('ul[role="listbox"]:has-text("Day12345678910111213141516171819202122232425262728293031")').getByRole('option', { name: '1' });
        this.selectMonth = page.locator('span[role="combobox"]:has-text("Month")');
        this.selectMonthFromList = page.locator('li[role="option"]:has-text("January")');
        this.selectYear = page.locator('span[role="combobox"]:has-text("Year")');
        this.selectYearFromList = page.locator('li[role="option"]:has-text("2002")');
        this.selectMartialStatus = page.locator('span[role="combobox"]:has-text("Select marital status")');
        this.selectMartialStatusFromList = page.locator('li[role="option"]:has-text("Single")');
        this.selectFinancialDependents = page.getByRole('group', { name: 'Number of financial dependants' }).locator('span[role="combobox"]:has-text("0")');
        this.selectDependents = page.locator('li[role="option"]:has-text("0")');
        this.selectNationalityDropdown = page.locator('#applicants_0__personalDetails_nationality1-button');
        this.selectAppliNationality = page.locator('li[role="option"]:has-text("British")');
        this.selectResidence = page.locator('span[role="combobox"]:has-text("Select country of residence")');
        this.selectCountryResidence = page.locator('li[role="option"]:has-text("United Kingdom")');
        this.selectCityOfBirth = page.getByLabel('Town or city of birth');
        this.selectCountryOfBirth = page.locator('span[role="combobox"]:has-text("Select country of birth")');
        this.selectCountry = page.locator('ul[role="listbox"]:has-text("Select country of birthUnited KingdomAfghanistanÅland IslandsAlbaniaAlgeriaAmeri")').getByRole('option', { name: 'United Kingdom' });
        this.selectCountryOfTax = page.locator('span[role="combobox"]:has-text("Select country of tax residence")');
        this.selectTaxedCountry = page.locator('ul[role="listbox"]:has-text("Select country of tax residenceUnited KingdomAfghanistanÅland IslandsAlbaniaAlge")').getByRole('option', { name: 'United Kingdom' });
        this.selectIfNotAUSCitizen = page.getByRole('group', { name: 'Are you a US citizen?' }).getByText('No');
        this.SelectNotAPoliticallyExposedPerson = page.getByRole('group', { name: 'Do you declare yourself a politically exposed person?' }).getByText('No');
        this.selectNext = page.locator('button[type="submit"]');

    }

async selectApplicantTitle()
    {
        await this.selectTitle.click();
        await this.selectTitleFromList.click();
    }

async selectDateOfBirth()
    {
        await this.selectDate.click();
        await this.selectDatefromList.click();
        await this.selectMonth.click();
        await this.selectMonthFromList.click();
        await this.selectYear.click();
        await this.selectYearFromList.click();
    }

async selectMartialStatusofApplicant()
    {
        await this.selectMartialStatus.click();
        await this.selectMartialStatusFromList.click();
    }

async NoOfFinancialDependents()
    {
        await this.selectFinancialDependents.click();
        await this.selectDependents.click();
    }

async ApplicantNationality()
    {
        await this.selectNationalityDropdown.click();
        await this.selectAppliNationality.click();
    }

async ApplicantResidence()
    {
        await this.selectResidence.click();
        await this.selectCountryResidence.click();
    }

async ApplicantCountryOfBirth()
    {
        await this.selectCountryOfBirth.click();
        await this.selectCountry.click();
    }

async ApplicantCountryOfTaxResidence()
    {
        await this.selectCountryOfTax.click();
        await this.selectTaxedCountry.click();
    }

}
module.exports = {PersonalDetails};