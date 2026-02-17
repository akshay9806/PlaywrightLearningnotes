// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  reporter: 'html',
  timeout: 40000,

  use: 
  {
    
    browsername: 'chromium',
    headless:false,
    screenshot:'on',
    trace : "retain-on-failure"//off/on/retain-on-failure

  },
  

    trace: 'on-first-retry',
  });

module.exports = config

