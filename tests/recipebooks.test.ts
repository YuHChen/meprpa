import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/meprpa/recipebooks');
});

test.afterEach(async ({ page }) => {
  /**
   * see related local storage issue:
   * https://github.com/microsoft/playwright/issues/6258
   *
   * see solutions:
   * https://playwright.dev/docs/api/class-browser#browser-new-context-option-storage-state
   * https://playwright.dev/docs/auth/#session-storage
   * https://playwright.dev/docs/api/class-page#page-add-init-script
   */
  await page.addInitScript(() => {
    window.localStorage.setItem('yuhchen.github.io/meprpa::recipeBooks', '[]');
  });
  await page.reload(); // force local storage update
});

test('recipebooks page has expected elements', async ({ page }) => {
  await expect(page.getByRole('form')).toBeVisible();
  await expect(
    page.getByRole('button', { name: 'Remove All Recipe Books', disabled: true }),
  ).toBeVisible();
  // by default, there are no recipe books, so the list is effectively
  // not visible even though the element is present in the DOM
  await expect(page.getByRole('list')).not.toBeVisible();
  await expect(page.getByRole('listitem')).not.toBeVisible();
});

test('given user adds recipe book, then recipe book is listed', async ({ page }) => {
  await page.getByLabel('Spreadsheet ID:').fill('foo');
  await page.getByRole('button', { name: 'Add recipe book' }).click();

  await expect(page.getByRole('list')).toBeVisible();
  await expect(page.getByRole('listitem')).toBeVisible();
  await expect(page.getByRole('list').filter({ hasText: 'foo' })).toBeVisible();
});

test('given user adds recipe book with name, then recipe book is listed', async ({ page }) => {
  await page.getByLabel('Spreadsheet ID:').fill('foo');
  await page.getByLabel('Name:').fill('foo recipe book');
  await page.getByRole('button', { name: 'Add recipe book' }).click();

  await expect(page.getByRole('list')).toBeVisible();
  await expect(page.getByRole('listitem')).toBeVisible();
  await expect(page.getByRole('list').filter({ hasText: 'foo recipe book' })).toBeVisible();
});

test('given user removes recipe book, then user can add the same recipe book again', async ({
  page,
}) => {
  const submit = page.getByRole('button', { name: 'Add recipe book' });

  await page.getByLabel('Spreadsheet ID:').fill('foo');
  await submit.click();

  await page.getByLabel('Name:').fill('foo recipe book');
  await submit.click();

  await expect(page.getByText('already exists').filter({ hasText: 'foo' })).toBeVisible();

  await page.getByRole('button', { name: 'Remove foo' }).click();

  // there are no recipe books now, so the list is effectively
  // not visible even though the element is present in the DOM
  await expect(page.getByRole('list')).not.toBeVisible();
  await expect(page.getByRole('listitem')).not.toBeVisible();

  await submit.click();

  await expect(page.getByRole('list')).toBeVisible();
  await expect(page.getByRole('listitem')).toBeVisible();
  await expect(page.getByRole('list').filter({ hasText: 'foo recipe book' })).toBeVisible();
});

test('given user clicks on edit recipe book, then navigates to correct destination', async ({
  page,
}) => {
  await page.getByLabel('Spreadsheet ID:').fill('foo');
  await page.getByRole('button', { name: 'Add recipe book' }).click();

  await page.getByRole('button', { name: 'Edit foo' }).click();

  await expect(page).toHaveURL(/.*\/recipebook\?id=foo/);
});
