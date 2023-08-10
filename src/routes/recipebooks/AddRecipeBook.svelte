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

  <input type="submit" value="Add recipe book" />
</form>

<style>
  form {
    width: 80%;
    max-width: 500px;
    display: grid;
    grid-gap: 8px;
  }

  label {
    display: grid;
    grid-template-columns: 120px 1fr;
    grid-gap: 8px;
  }

  label input {
    grid-column: 2 / 3;
  }
</style>
