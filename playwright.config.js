const { devices } = require('@playwright/test');

module.exports = {
  testDir: './Tests',
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        video: {
          mode: 'retain-on-failure',  // Record video only on test failure
          size: {
            width: 1280,
            height: 720  // Set the resolution of the video
          }
        }
      },
    }
  ],
  reporter: [
    ['monocart-reporter', {  
        name: "My Test Report",
        outputFile: './test-results/report.html',
        coverage: {
            entryFilter: (entry) => true,
            sourceFilter: (sourcePath) => sourcePath.search(/src\/.+/) !== -1,
        }
    }]
  ],
  timeout: 30000,
};