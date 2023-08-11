<script lang="ts">
  import { recipeBooks, type RecipeBook } from './recipesbooks';

  function getAsString(data: FormData, key: string): string {
    let val = data.get(key)!;
    if (typeof val === 'string') {
      return val;
    } else {
      throw Error(`Expected string for \`${key}\` in form data.`);
    }
  }

  function addRecipeBook(form: SubmitEvent) {
    const formData = new FormData(form.target as HTMLFormElement);
    const id = getAsString(formData, 'id');
    const recipeBook: RecipeBook = {
      id,
      name: getAsString(formData, 'name') || id,
    };

    recipeBooks.push(recipeBook);
  }
</script>

<div>
  <h2>Add a recipe book</h2>
  <form on:submit|preventDefault={addRecipeBook}>
    <label>
      Spreadsheet ID:
      <input name="id" required />
    </label>

    <label>
      Name:
      <input name="name" />
    </label>

    <button>Add recipe book</button>
  </form>
</div>

<style>
  div {
    max-width: 30em;
  }

  form {
    display: grid;
    grid-gap: 1rem;
    align-items: baseline;
  }

  label {
    display: grid;
    grid-template-columns: 120px 1fr;
    grid-gap: 0.5rem;
    align-items: center;
  }

  label input {
    grid-column: 2 / 3;
  }

  input,
  button {
    padding: 0.5rem;
    border: 1px solid hsl(210, 5%, 15%);
    border-radius: 4px;
    box-sizing: border-box;
    background: hsl(0, 10%, 90%);
  }

  button {
    opacity: 0.5;
    transition: opacity 0.2s;
  }

  button:hover {
    opacity: 1;
  }
</style>
