import { expect, test } from '@playwright/test';

test('index page has expected form', async ({ page }) => {
  await page.goto('/meprpa/');
  // await expect(page.getByRole('form')).toBeVisible();
  await expect(
    page.getByRole('button', { name: 'Fetch Spreadsheet', disabled: true }),
  ).toBeVisible();
});
