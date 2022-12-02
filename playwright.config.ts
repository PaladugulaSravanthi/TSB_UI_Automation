// @ts-check
import  devices  from "@playwright/test";

const config = {
  testDir: './tests',
  workers: 1,
  /* Maximum time one test can run for. */
  timeout: 80 * 1000,
  expect: {
    timeout: 8000
  },
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    baseURL: 'https://tsb-m-web-elb.qa.hdinternal.co.uk/',
    browserName : 'chromium',
    headless : false,
  },

  /* Configure projects for major browsers */
 // projects: [
  // {
    // name: 'chrome',
     // use: {
      //  browserName : 'chromium',
       // headless : false,
      //  screenshot : 'off',
      //},
    //},

    //{
      //name: 'firefox',
      //use: {
        //...devices['Desktop Firefox'],
      //},
    //},

    //{
      //name: 'webkit',
      //use: {
        //...devices['Desktop Safari'],
      //},
    //},

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: {
    //     ...devices['Pixel 5'],
    //   },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: {
    //     ...devices['iPhone 12'],
    //   },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: {
    //     channel: 'msedge',
    //   },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: {
    //     channel: 'chrome',
    //   },
    // },
  //],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  // outputDir: 'test-results/',

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   port: 3000,
  // }
      
};

module.exports = config;
