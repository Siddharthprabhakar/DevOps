import { Builder } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';

export default function setupWebDriver() {
  const options = new chrome.Options();
  // Configure options if needed
  return new Builder().forBrowser('chrome').setChromeOptions(options).build();
}
