import setupWebDriver from '../config/webdriver.config.js';
import { By, until } from 'selenium-webdriver';

(async function loginTest() {
    let driver = setupWebDriver();

    try {
        console.log('Navigating to login page...');
        await driver.get('http://localhost:3000/login');

        // Locate the email input by its type
        console.log('Entering email...');
        await driver.findElement(By.css('input[type="email"]')).sendKeys('testUser@mail.com');

        // Locate the password input by its type
        console.log('Entering password...');
        await driver.findElement(By.css('input[type="password"]')).sendKeys('testPassword');

        // Click the submit button
        console.log('Submitting login form...');
        await driver.findElement(By.css('button[type="submit"]')).click();

        // Wait for the <h1> element on the redirected page to load
        console.log('Waiting for the welcome message...');
        await driver.wait(until.elementLocated(By.css('h1')), 10000); // Wait for up to 10 seconds

        // Get the title from the <h1> element
        let title = await driver.findElement(By.css('h1')).getText();

        // Check if the title matches the expected value
        console.log(`Expected title: 'Hi there!', Actual title: '${title}'`);
        if (title === 'Hi there!') {
            console.log('Login test passed');
        } else {
            console.error('Login test failed: Unexpected title');
        }
    } catch (error) {
        console.error('An error occurred during the login test:', error);
    } finally {
        console.log('Quitting the driver...');
        await driver.quit();
    }
})();
