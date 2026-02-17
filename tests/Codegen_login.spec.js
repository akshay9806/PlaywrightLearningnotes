import { test, expect } from '@playwright/test';

test.only('Generated Test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.pause()
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
  await page.getByRole('button', { name: ' Login' }).click();
  await expect(page.getByText('You logged into a secure area')).toBeVisible();
  await expect(page.locator('h2')).toContainText('Secure Area');
  await page.getByRole('link', { name: 'Logout' }).click();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('11');
  await expect(page.getByRole('textbox', { name: 'Username' })).toHaveValue('11');
  await page.pause()
});