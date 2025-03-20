// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://www.google.com/?gws_rd=ssl');
//   await page.getByRole('combobox', { name: 'Search' }).click();
//   await page.getByRole('combobox', { name: 'Search' }).fill('playwright js');
//   await page.getByText('tutorial').click();
//   await page.locator('iframe[name="a-trg5zty3uk97"]').contentFrame().locator('html').click();
//   await page.locator('iframe[name="c-trg5zty3uk97"]').contentFrame().locator('tr:nth-child(2) > td').first().click();
//   await page.locator('iframe[name="c-trg5zty3uk97"]').contentFrame().locator('tr:nth-child(3) > td:nth-child(3)').click();
//   await page.locator('iframe[name="c-trg5zty3uk97"]').contentFrame().locator('td:nth-child(3)').first().click();
//   await page.locator('iframe[name="c-trg5zty3uk97"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
//   await page.getByRole('link', { name: 'Playwright JavaScript: A' }).click();
// });