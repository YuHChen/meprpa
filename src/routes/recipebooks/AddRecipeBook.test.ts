import { act, render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import AddRecipeBook from './AddRecipeBook.svelte';
import { recipeBooks } from './recipesbooks';

describe('AddRecipeBook', () => {
  const getErrorMessage = () => screen.getByText('already exists', { exact: false });
  const queryErrorMessage = () => screen.queryByText('already exists', { exact: false });
  const getForm = () => screen.getByRole('form');
  const getSubmit = () => screen.getByRole('button');
  const getId = () => screen.getByRole('textbox', { name: 'Spreadsheet ID:' });

  afterEach(() => {
    recipeBooks.reset();
  });

  test('given intial render, then renders blank form', () => {
    render(AddRecipeBook);

    expect(queryErrorMessage()).not.toBeInTheDocument();

    const form = getForm();
    expect(form).toBeInTheDocument();
    expect(form).toHaveFormValues({
      id: '',
      name: '',
    });

    const submit = getSubmit();
    expect(submit).toBeInTheDocument();
    expect(submit).toBeEnabled();
  });

  test('given missing form values, then renders validation error', async () => {
    const user = userEvent.setup();

    render(AddRecipeBook);

    expect(queryErrorMessage()).not.toBeInTheDocument();

    const id = getId();
    expect(id).toBeInvalid();

    await act(() => user.click(getSubmit()));

    expect(queryErrorMessage()).not.toBeInTheDocument();

    expect(id).toBeInvalid();
  });

  test('given user submits successfully, then renders accepted values', async () => {
    const user = userEvent.setup();

    render(AddRecipeBook);

    expect(queryErrorMessage()).not.toBeInTheDocument();

    const id = getId();
    expect(id).toBeInvalid();
    await act(() => user.type(id, 'foo'));
    expect(id).toBeValid();

    await act(() => user.click(getSubmit()));

    expect(queryErrorMessage()).not.toBeInTheDocument();

    expect(id).toBeValid();
    expect(id).toHaveValue('foo');
  });

  test('given recipe book already exists, then renders error', async () => {
    const user = userEvent.setup();

    render(AddRecipeBook);

    expect(queryErrorMessage()).not.toBeInTheDocument();

    const id = getId();
    expect(id).toBeInvalid();
    await act(() => user.type(id, 'foo'));
    expect(id).toBeValid();

    const submit = getSubmit();
    await act(() => user.click(submit));

    expect(queryErrorMessage()).not.toBeInTheDocument();

    expect(id).toBeValid();
    expect(id).toHaveValue('foo');

    await act(() => user.click(submit));

    // form values should still be valid, but we also show error message
    expect(id).toBeValid();
    expect(id).toHaveValue('foo');
    const error = getErrorMessage();
    expect(error).toBeInTheDocument();
    expect(error).toHaveTextContent('foo');
    expect(error).toHaveClass('error');
  });
});
