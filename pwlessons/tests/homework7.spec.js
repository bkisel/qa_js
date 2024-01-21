// @ts-check

import { test, expect } from '@playwright/test';

test('has text', async ({ page }) => {  
  //check if Platform have text: Planning & Collaboration
  await page.goto('https://www.testrail.com/');
  await page.locator('#menu-102').getByRole('link', { name: 'Platform' }).click();
  await page.getByRole('link', { name: 'Planning & Collaboration' }).click();
  expect(page.getByRole('heading', { name: 'Planning & Collaboration' })).toHaveText;
  await page.close()
});

test('have link', async ({ page }) => {  
  //check if Platform have text: Planning & Collaboration
  await page.goto('https://www.testrail.com/');
  await page.locator('#menu-102').getByRole('link', { name: 'Enterprise' }).click();
  page.getByRole('link', { name: 'Contact Sales' }).first();
  await page.close()
});

test('Monthly checked', async ({ page }) => {  
  //check if Platform have text: Planning & Collaboration
  await page.goto('https://www.testrail.com/');
  await page.locator('#menu-102').getByRole('link', { name: 'Pricing' }).click();
  await page.getByLabel('Monthly').check();
  await page.close()
});

test('37 usd per month', async ({ page }) => {  
  //check if Platform have text: Planning & Collaboration
  await page.goto('https://www.testrail.com/');
  await page.locator('#menu-102').getByRole('link', { name: 'Pricing' }).click();
  await page.getByLabel('Monthly').check();
  expect(page.getByText('37')).toHaveText;
  await page.close()
});

test('country lookup opened', async ({ page }) => {  
  //check if Platform have text: Planning & Collaboration
  await page.goto('https://secure.testrail.com/customers/testrail/trial/?type=signup&previous_page=%2F');
  await page.locator('select[name="cm-f-sdybl"]').click();
  await page.close()
});

test('users count lookup opened', async ({ page }) => {  
  //check if Platform have text: Planning & Collaboration
  await page.goto('https://secure.testrail.com/customers/testrail/trial/?type=signup&previous_page=%2F');
  await page.getByLabel('How many users do you expect').click();
  await page.close()
});