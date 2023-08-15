import { act, render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import RecipeBooks from './RecipeBooks.svelte';
import { recipeBooks } from './recipesbooks';
import { base } from '$app/paths';

describe('RecipeBooks', () => {
  const queryAllRecipeBooks = () => screen.queryAllByRole('listitem');
  const getRemoveAll = () => screen.getByRole('button', { name: 'Remove All Recipe Books' });
  const getEdit = (name: string) => screen.getByRole('form', { name: `Form to edit ${name}` });
  const getRemove = (name: string) => screen.getByRole('button', { name: `Remove ${name}` });

  afterEach(() => {
    recipeBooks.reset();
  });

  test('given initial render, then renders empty list and remove all is disabled', async () => {
    render(RecipeBooks);

    expect(queryAllRecipeBooks()).toHaveLength(0);
    expect(getRemoveAll()).toBeDisabled();
  });

  test('given recipe books, then renders edit button with correct destination', async () => {
    render(RecipeBooks);

    expect(queryAllRecipeBooks()).toHaveLength(0);

    await act(() => {
      recipeBooks.push({
        id: 'foo',
        name: 'foo recipe book',
      });
      recipeBooks.push({
        id: 'bar',
        name: 'bar',
      });
    });

    expect(queryAllRecipeBooks()).toHaveLength(2);
    for (const name of ['foo recipe book', 'bar']) {
      expect(getEdit(name)).toHaveAttribute('action', `${base}/recipebook`);
    }
  });

  test('given user removes some recipe books, then renders remaining list and remove all is enabled', async () => {
    const user = userEvent.setup();

    render(RecipeBooks);

    expect(queryAllRecipeBooks()).toHaveLength(0);

    await act(() => {
      recipeBooks.push({
        id: 'foo',
        name: 'foo recipe book',
      });
      recipeBooks.push({
        id: 'bar',
        name: 'bar',
      });
    });

    expect(queryAllRecipeBooks()).toHaveLength(2);

    await act(() => user.click(getRemove('foo recipe book')));

    expect(queryAllRecipeBooks()).toHaveLength(1);
    expect(getRemoveAll()).toBeEnabled();
  });

  test('given user removes all recipe books, then renders empty list and remove all is disabled', async () => {
    const user = userEvent.setup();

    render(RecipeBooks);

    expect(queryAllRecipeBooks()).toHaveLength(0);

    await act(() => {
      recipeBooks.push({
        id: 'foo',
        name: 'foo recipe book',
      });
    });

    expect(queryAllRecipeBooks()).toHaveLength(1);

    await act(() => user.click(getRemove('foo recipe book')));

    expect(queryAllRecipeBooks()).toHaveLength(0);
    expect(getRemoveAll()).toBeDisabled();
  });
});
