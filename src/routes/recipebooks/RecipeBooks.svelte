<script lang="ts">
  import { base } from '$app/paths';
  import { getAsString } from '$lib/formData';
  import { recipeBooks } from './recipesbooks';

  function removeRecipeBook(form: SubmitEvent) {
    const formData = new FormData(form.target as HTMLFormElement);
    const id = getAsString(formData, 'id');
    recipeBooks.remove(id);
  }
</script>

<div>
  <h2>Your recipe books</h2>
  <button on:click={recipeBooks.reset} disabled={$recipeBooks.length === 0}>
    Remove All Recipe Books
  </button>
  <ul aria-label="List of recipe books">
    {#each $recipeBooks as recipeBook (recipeBook.id)}
      <li aria-label={recipeBook.name}>
        <div>
          <span>{recipeBook.name}</span>
          <form action="{base}/recipebook" aria-label="Form to edit {recipeBook.name}">
            <input type="hidden" name="id" value={recipeBook.id} />
            <button class="edit" aria-label="Edit {recipeBook.name}" />
          </form>
          <form
            on:submit|preventDefault={removeRecipeBook}
            aria-label="Form to remove {recipeBook.name}"
          >
            <input type="hidden" name="id" value={recipeBook.id} />
            <button class="remove" aria-label="Remove {recipeBook.name}" />
          </form>
        </div>
      </li>
    {/each}
  </ul>
</div>

<style>
  div {
    max-width: 30em;
  }

  button {
    opacity: 0.5;
    transition: opacity 0.2s;
  }

  :is(button:hover):enabled {
    opacity: 1;
  }

  div button {
    padding: 0.5rem;
    border: 1px solid hsl(210, 5%, 15%);
    border-radius: 4px;
    box-sizing: border-box;
    background: hsl(0, 10%, 90%);
  }

  ul:has(li):has(div) {
    list-style: none;
    padding: 0;
  }

  ul li div {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.5em 0.5em 0.5em 1em;
    margin: 0 0 0.5em 0;
    gap: 0.5em;
    border-radius: 5px;
    user-select: none;
    background: hsl(0, 10%, 90%);
    filter: drop-shadow(2px 3px 6px rgba(0, 0, 0, 0.1));
    transition:
      filter 0.2s,
      opacity 0.2s;
  }

  div span {
    flex: 1;
    word-break: break-all;
  }

  form button {
    border: none;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 1rem 1rem;
    cursor: pointer;
    width: 3em;
    height: 3em;
    margin: -0.5em -0.5em -0.5em 0;
    aspect-ratio: 1;
  }

  form button.edit {
    background: url(./edit.svg) no-repeat 50% 50%;
    background-size: 1rem 1rem;
  }

  form button.remove {
    background: url(./remove.svg) no-repeat 50% 50%;
    background-size: 1rem 1rem;
  }
</style>
